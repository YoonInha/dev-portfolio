import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RobotArmViewport from '../components/editor/RobotArmViewport';
import { PanelTitle, CategoryMark, StatusPill, PropTable } from '../components/editor/ui';
import { CATEGORIES, CATEGORY, PROJECTS, projectsIn } from '../mock/projects';
import { aboutParagraph, HERO_TITLES, GITHUB_URL } from '../mock/profile';

// Editor-style hero. Desktop (lg+): Outliner | Viewport | Details.
// Below lg the panes stack: Viewport, then Outliner (as chips), then Details.

export default function EditorHero() {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const selected = PROJECTS.find((p) => p.id === selectedId);
  const readoutRef = useRef(null);

  return (
    <section className="border-b border-editor-line bg-editor-line">
      <div className="mx-auto grid max-w-[1600px] gap-px lg:grid-cols-[240px_minmax(0,1fr)_340px]">
        {/* Outliner */}
        <div className="order-2 min-w-0 bg-editor-panel lg:order-1">
          <PanelTitle right={PROJECTS.length}>Outliner</PanelTitle>
          <div className="flex flex-col gap-3 p-3 lg:gap-0 lg:p-0 lg:py-1">
            {CATEGORIES.map((cat) => {
              const robo = cat.id === CATEGORY.ROBOTICS;
              return (
                <div key={cat.id}>
                  <p
                    className={`flex items-center gap-2 pb-2 font-mono text-[10.5px] uppercase tracking-wider lg:px-3 lg:pt-3 ${
                      robo ? 'text-editor-robo' : 'text-editor-muted'
                    }`}
                  >
                    ▾ {cat.label}
                    {robo ? <span className="rounded bg-editor-robo/15 px-1.5 py-px text-[9.5px]">Featured</span> : null}
                  </p>
                  <ul className="flex flex-wrap gap-1.5 lg:block" role="listbox" aria-label={cat.label}>
                    {projectsIn(cat.id).map((p) => {
                      const on = p.id === selectedId;
                      return (
                        <li key={p.id} role="option" aria-selected={on}>
                          <button
                            type="button"
                            onClick={() => setSelectedId(p.id)}
                            className={`flex w-full items-center gap-2.5 rounded border px-3 py-2 text-left text-[13px] transition-colors lg:rounded-none lg:border-0 lg:border-l-2 ${
                              on
                                ? 'border-editor-sel bg-editor-sel/15 text-white'
                                : 'border-editor-line text-editor-ink hover:bg-editor-panel2 lg:border-transparent'
                            }`}
                          >
                            <CategoryMark category={p.category} />
                            <span className="truncate">{p.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Viewport */}
        <div className="relative order-1 min-h-[660px] min-w-0 overflow-hidden bg-editor-view sm:min-h-[640px] lg:order-2 lg:min-h-[680px]">
          <RobotArmViewport readoutRef={readoutRef} />
          <div className="pointer-events-none absolute inset-x-3 top-3 flex justify-between gap-3 font-mono text-[11px] text-editor-muted">
            <span>
              Perspective · Lit · <b className="font-medium text-editor-robo">Wireframe</b>
            </span>
            <span ref={readoutRef} className="hidden sm:inline" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-editor-view via-editor-view/90 to-transparent px-5 pb-6 pt-24 sm:px-8 sm:pb-8">
            <p className="font-mono text-xs text-editor-robo">Physical AI · Robotics · Real-time 3D</p>
            <h1 className="mt-2 text-[44px] font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">Inha Yoon</h1>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-[#aeb4bd] sm:text-base">{aboutParagraph}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {HERO_TITLES.slice(1).map((t) => (
                <li key={t} className="rounded-full border border-editor-line bg-editor-panel/70 px-3 py-1 text-xs text-editor-ink">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="#robotics"
                className="rounded bg-editor-robo px-4 py-2.5 text-sm font-semibold text-[#1a1204] transition-opacity hover:opacity-90"
              >
                로보틱스 프로젝트 보기
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-editor-line bg-editor-panel/70 px-4 py-2.5 text-sm text-white hover:border-editor-muted"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Details */}
        <aside className="order-3 flex min-w-0 flex-col bg-editor-panel" aria-live="polite">
          <PanelTitle right={selected.category === CATEGORY.ROBOTICS ? 'Robotics' : selected.type}>Details</PanelTitle>
          <div className="relative aspect-[16/10] w-full border-b border-editor-line bg-editor-view">
            <Image
              key={selected.id}
              src={selected.cover}
              alt={selected.title}
              fill
              sizes="(min-width: 1024px) 340px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 px-4 pb-4 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-white">{selected.title}</h2>
              <StatusPill status={selected.status} />
            </div>
            <p className="text-[13px] text-editor-muted">{selected.subtitle}</p>
          </div>
          <PropTable
            rows={
              selected.specs
                ? selected.specs.slice(0, 4)
                : [
                    ['Engine', selected.engine],
                    ['Type', selected.type],
                    ['Stack', selected.stack.join(' · ')],
                  ]
            }
          />
          <div className="mt-auto p-4">
            <Link
              href={selected.routeLink}
              className="block rounded border border-editor-sel bg-editor-sel/15 py-2.5 text-center text-sm text-white transition-colors hover:bg-editor-sel/30"
            >
              Open project ›
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
