import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader, StatusPill, PropTable, Chips } from '../components/editor/ui';
import { CATEGORY, getCategory, projectsIn } from '../mock/projects';

// Robotics gets the most room on the page: full-width rows with a large photo
// and a hardware spec sheet beside it. Rows alternate sides on desktop.

export default function RoboticsSection() {
  const cat = getCategory(CATEGORY.ROBOTICS);
  const items = projectsIn(CATEGORY.ROBOTICS);

  return (
    <section className="relative border-b border-editor-line">
      {/* faint engineering grid behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(245,165,36,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,165,36,.05)_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader id="robotics" path={`/Game/${cat.folder}`} title={cat.label} blurb={cat.blurb} count={items.length} accent="robo" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {items.map((p, i) => (
            <article
              key={p.id}
              className="grid overflow-hidden rounded-md border border-editor-line bg-editor-panel lg:grid-cols-12"
            >
              <Link
                href={p.routeLink}
                className={`group relative block aspect-[16/10] min-w-0 overflow-hidden bg-editor-view lg:col-span-7 lg:aspect-auto lg:min-h-[460px] ${
                  i % 2 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 font-mono text-[11px] text-editor-robo backdrop-blur">
                  RB-{String(i + 1).padStart(2, '0')}
                </span>
              </Link>

              <div className="flex min-w-0 flex-col lg:col-span-5">
                <div className="flex flex-col gap-3 p-5 sm:p-7">
                  <StatusPill status={p.status} />
                  <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{p.title}</h3>
                  <p className="font-medium text-editor-robo">{p.subtitle}</p>
                  <p className="text-[15px] leading-relaxed text-editor-muted">{p.description}</p>
                </div>
                <PropTable rows={p.specs} />
                <div className="flex flex-col gap-5 p-5 sm:p-7">
                  <Chips items={p.stack} />
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={p.routeLink}
                      className="rounded bg-editor-robo px-4 py-2.5 text-sm font-semibold text-[#1a1204] hover:opacity-90"
                    >
                      자세히 보기
                    </Link>
                    {p.repoLink ? (
                      <a
                        href={p.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded border border-editor-line px-4 py-2.5 text-sm text-white hover:border-editor-muted"
                      >
                        GitHub ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
