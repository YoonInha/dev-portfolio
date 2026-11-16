import React, { useEffect, useRef } from 'react';

// Wireframe robot arm drawn on a 2D canvas with a tiny hand-rolled 3D pipeline.
// Hierarchical joints: base yaw (J1) -> shoulder (J2) -> elbow (J3) -> gripper.

const mul = (a, b) => {
  const r = new Array(16).fill(0);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++) r[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
  return r;
};
const T = (x, y, z) => [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1];
const Ry = (a) => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1];
};
const Rz = (a) => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
const Rx = (a) => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1];
};
const apply = (m, v) => [
  m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3],
  m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7],
  m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11],
];
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];
const CORNERS = [
  [-1, 0, -1], [1, 0, -1], [1, 0, 1], [-1, 0, 1],
  [-1, 1, -1], [1, 1, -1], [1, 1, 1], [-1, 1, 1],
];
const box = (m, w, h, d) => CORNERS.map(([x, y, z]) => apply(m, [(x * w) / 2, y * h, (z * d) / 2]));

export default function RobotArmViewport({ readoutRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = true;

    const size = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width;
      H = r.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Wide screens: arm sits right of the HUD text. Narrow screens: centered, above the text.
    const project = (p, cam) => {
      const v = apply(cam, p);
      const z = v[2] + 9;
      const wide = W > 760;
      // Scale from height so the arm keeps clear of the HUD text at the bottom.
      const f = Math.min(H * (wide ? 0.75 : 0.5), W * 0.9) / z;
      const cx = wide ? W * 0.66 : W * 0.5;
      const cy = wide ? H * 0.62 : H * 0.4;
      return [cx + v[0] * f, cy - v[1] * f];
    };
    const line = (a, b, color, width) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    };

    const draw = (time) => {
      const s = (reduce ? 2000 : time) / 1000;
      ctx.clearRect(0, 0, W, H);
      const cam = mul(Rx(-0.42), Ry(s * 0.18));

      for (let i = -6; i <= 6; i++) {
        const grid = 'rgba(138,145,156,.12)';
        line(project([i, 0, -6], cam), project([i, 0, 6], cam), i === 0 ? 'rgba(70,167,88,.55)' : grid, 1);
        line(project([-6, 0, i], cam), project([6, 0, i], cam), i === 0 ? 'rgba(229,72,77,.55)' : grid, 1);
      }

      const j1 = s * 0.6;
      const j2 = Math.sin(s * 0.9) * 0.6 - 0.3;
      const j3 = Math.sin(s * 1.3 + 1) * 0.8 + 0.6;
      if (readoutRef?.current) {
        const deg = (r) => Math.round((r * 180) / Math.PI);
        readoutRef.current.textContent = `J1 ${deg(j1) % 360}° · J2 ${deg(j2)}° · J3 ${deg(j3)}°`;
      }

      const m0 = Ry(j1);
      const m1 = mul(m0, mul(T(0, 0.95, 0), Rz(j2)));
      const m2 = mul(m1, mul(T(0, 2.4, 0), Rz(j3)));
      const m3 = mul(m2, T(0, 1.9, 0));
      const parts = [
        box(m0, 1.6, 0.35, 1.6),
        box(mul(m0, T(0, 0.35, 0)), 0.8, 0.6, 0.8),
        box(m1, 0.42, 2.4, 0.42),
        box(m2, 0.34, 1.9, 0.34),
        box(m3, 0.6, 0.18, 0.3),
        box(mul(m3, T(-0.2, 0.18, 0)), 0.08, 0.4, 0.2),
        box(mul(m3, T(0.2, 0.18, 0)), 0.08, 0.4, 0.2),
      ];
      parts.forEach((corners, k) => {
        const pc = corners.map((p) => project(p, cam));
        EDGES.forEach(([a, b]) => line(pc[a], pc[b], k === 0 ? 'rgba(213,217,223,.5)' : 'rgba(120,180,255,.85)', 1.2));
      });

      ctx.fillStyle = '#f5a524';
      [m1, m2, m3].forEach((m) => {
        const p = project(apply(m, [0, 0, 0]), cam);
        ctx.beginPath();
        ctx.arc(p[0], p[1], 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
      const tip = project(apply(m3, [0, 0.5, 0]), cam);
      ctx.strokeStyle = 'rgba(245,165,36,.6)';
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.arc(tip[0], tip[1], 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    size();
    const ro = new ResizeObserver(() => {
      size();
      if (reduce) draw(0);
    });
    ro.observe(cv);
    // Pause the loop while the viewport is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(cv);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [readoutRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label="움직이는 로봇 팔 와이어프레임" />;
}
