import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from './MainLayout';
import { StatusPill, PropTable, Chips, PanelTitle, CategoryMark } from '../components/editor/ui';
import { CATEGORY, getCategory, getProject, projectsIn } from '../mock/projects';

// Shared layout for every project detail page (/prg*).
// Desktop: content column + sticky Details panel. Mobile: Details panel first, then content.

export default function ProjectPage({ projectId, hero, children }) {
  const project = getProject(projectId);
  const cat = getCategory(project.category);
  const robo = project.category === CATEGORY.ROBOTICS;
  const siblings = projectsIn(project.category);
  const next = siblings[(siblings.indexOf(project) + 1) % siblings.length];

  const rows = robo
    ? project.specs
    : [
        ['Engine', project.engine],
        ['Type', project.type],
      ];

  return (
    <MainLayout meta={<title>{`${project.title} | Inha Yoon`}</title>}>
      <article>
        {/* breadcrumb */}
        <div className="border-b border-editor-line bg-editor-panel">
          <div className="mx-auto flex max-w-[1280px] items-center gap-3 overflow-hidden px-4 py-2.5 font-mono text-[12px] sm:px-6">
            <Link href={`/#${cat.id}`} className="shrink-0 text-editor-muted hover:text-white">
              ← Back
            </Link>
            <span className="truncate text-editor-muted">
              /Game/{cat.folder}/<span className="text-white">{project.title}</span>
            </span>
          </div>
        </div>

        <header className="mx-auto max-w-[1280px] px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${robo ? 'text-editor-robo' : 'text-editor-sel'}`}>
              <CategoryMark category={project.category} />
              {cat.label}
            </span>
            <StatusPill status={project.status} />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
          <p className={`mt-3 text-lg ${robo ? 'text-editor-robo' : 'text-editor-ink'}`}>{project.subtitle}</p>
          <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-editor-muted">{project.description}</p>
        </header>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-editor-line bg-editor-view sm:aspect-[16/8]">
            <Image src={hero || project.cover} alt={project.title} fill priority sizes="(min-width: 1280px) 1230px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <aside className="min-w-0 self-start overflow-hidden rounded-md border border-editor-line bg-editor-panel lg:sticky lg:top-16 lg:order-2">
            <PanelTitle right={robo ? 'Hardware' : project.type}>Details</PanelTitle>
            <PropTable rows={rows} top={false} />
            <div className="flex flex-col gap-4 p-4">
              <Chips items={project.stack} />
              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded border border-editor-sel bg-editor-sel/15 py-2.5 text-center text-sm text-white hover:bg-editor-sel/30"
                >
                  GitHub repository ↗
                </a>
              ) : null}
            </div>
          </aside>

          <div className="min-w-0 lg:order-1">{children}</div>
        </div>

        {next && next.id !== project.id ? (
          <div className="border-t border-editor-line">
            <Link href={next.routeLink} className="group mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-8 sm:px-6">
              <span className="min-w-0">
                <span className="block font-mono text-xs text-editor-muted">Next in {cat.label}</span>
                <span className="mt-1 block truncate text-2xl font-semibold text-white group-hover:text-editor-sel">{next.title}</span>
              </span>
              <span className="text-2xl text-editor-muted transition-transform group-hover:translate-x-1 group-hover:text-editor-sel">→</span>
            </Link>
          </div>
        ) : null}
      </article>
    </MainLayout>
  );
}

/**
 * Image with caption. Still images go through next/image (resized, so multi-MB photos load fast);
 * gifs are served as-is so they keep animating. width/height only set the aspect ratio.
 */
export function Figure({ src, alt, caption, width = 1600, height = 1200 }) {
  const cls = 'h-auto w-full rounded-md border border-editor-line bg-editor-view';
  return (
    <figure className="my-8 min-w-0">
      {src.toLowerCase().endsWith('.gif') ? (
        <img src={src} alt={alt || caption || ''} loading="lazy" className={cls} />
      ) : (
        <Image src={src} alt={alt || caption || ''} width={width} height={height} sizes="(min-width: 1024px) 860px, 100vw" className={cls} />
      )}
      {caption ? <figcaption className="mt-2.5 text-[13px] leading-relaxed text-editor-muted">{caption}</figcaption> : null}
    </figure>
  );
}

/** Row of headline facts shown at the top of a project write-up. */
export function KeyFacts({ items }) {
  return (
    <dl className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-editor-line bg-editor-line sm:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0 bg-editor-panel p-4">
          <dt className="font-mono text-[11px] uppercase tracking-wider text-editor-muted">{label}</dt>
          <dd className="mt-1.5 text-[15px] font-semibold text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Labelled sub-section heading (e.g. HW / CORE / OPS). */
export function PartTitle({ tag, children }) {
  return (
    <div className="mb-3 mt-16 flex flex-wrap items-baseline gap-3 border-t border-editor-line pt-8">
      <span className="rounded bg-editor-robo/15 px-2 py-0.5 font-mono text-[11px] text-editor-robo">{tag}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-white">{children}</h2>
    </div>
  );
}

export function FigureRow({ children }) {
  return <div className="grid gap-x-4 sm:grid-cols-2 [&>figure]:my-4">{children}</div>;
}

export function SectionTitle({ children }) {
  return <h2 className="mb-2 mt-14 text-2xl font-semibold tracking-tight text-white">{children}</h2>;
}

ProjectPage.propTypes = {
  projectId: PropTypes.string.isRequired,
  hero: PropTypes.string,
  children: PropTypes.node,
};
Figure.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
KeyFacts.propTypes = { items: PropTypes.array.isRequired };
PartTitle.propTypes = { tag: PropTypes.string, children: PropTypes.node };
FigureRow.propTypes = { children: PropTypes.node };
SectionTitle.propTypes = { children: PropTypes.node };
