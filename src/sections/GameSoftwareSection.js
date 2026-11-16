import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader, StatusPill } from '../components/editor/ui';
import { CATEGORY, getCategory, projectsIn } from '../mock/projects';

// Content-browser style grid with large photos. The first item spans the full width.

export default function GameSoftwareSection() {
  const cat = getCategory(CATEGORY.GAME_SOFTWARE);
  const items = projectsIn(CATEGORY.GAME_SOFTWARE);

  return (
    <section className="border-b border-editor-line">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader id="game-software" path={`/Game/${cat.folder}`} title={cat.label} blurb={cat.blurb} count={items.length} />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((p, i) => (
            <Link
              key={p.id}
              href={p.routeLink}
              className={`group flex min-w-0 flex-col overflow-hidden rounded-md border border-editor-line bg-editor-panel transition-colors hover:border-editor-sel ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative w-full overflow-hidden bg-editor-view ${i === 0 ? 'aspect-[16/10] md:aspect-[21/9]' : 'aspect-[16/10]'}`}>
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes={i === 0 ? '(min-width: 1400px) 1350px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-editor-sel">
                    {p.type} · {p.engine}
                  </span>
                  <StatusPill status={p.status} />
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{p.title}</h3>
                <p className="text-sm text-editor-ink">{p.subtitle}</p>
                <p className="text-sm leading-relaxed text-editor-muted">{p.description}</p>
                <p className="mt-auto pt-3 font-mono text-[11px] text-editor-muted">{p.stack.join(' · ')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
