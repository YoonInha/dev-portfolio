import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORY } from '../../mock/projects';

// Small building blocks shared by the home page and project pages.

export function PanelTitle({ children, right, className = '' }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 border-b border-editor-line bg-editor-panel2 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-editor-muted ${className}`}
    >
      <span>{children}</span>
      {right ? <span className="normal-case tracking-normal">{right}</span> : null}
    </div>
  );
}

/** Diamond marker; amber for Robotics, blue for Game & Software. */
export function CategoryMark({ category, className = '' }) {
  const color = category === CATEGORY.ROBOTICS ? 'border-editor-robo' : 'border-editor-sel';
  return <span aria-hidden className={`inline-block h-2.5 w-2.5 shrink-0 rotate-45 border-[1.5px] ${color} ${className}`} />;
}

export function StatusPill({ status }) {
  if (!status) return null;
  const live = status === 'In development';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
        live ? 'border-editor-y/40 text-editor-y' : 'border-editor-line text-editor-muted'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'animate-pulse bg-editor-y' : 'bg-editor-muted'}`} />
      {status}
    </span>
  );
}

export function Chips({ items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="rounded border border-editor-line bg-editor-panel2 px-2 py-1 font-mono text-[11px] text-editor-ink">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Label/value table used for robot specs and project properties. */
export function PropTable({ rows, top = true, className = '' }) {
  return (
    <dl className={`${top ? 'border-t' : ''} border-editor-line ${className}`}>
      {rows.map(([label, value]) => (
        <div key={label} className="grid grid-cols-[104px_minmax(0,1fr)] border-b border-editor-line">
          <dt className="border-r border-editor-line px-3 py-2 font-mono text-[11px] text-editor-muted">{label}</dt>
          <dd className="px-3 py-2 text-[13px] text-editor-ink [overflow-wrap:anywhere]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SectionHeader({ id, path, title, blurb, count, accent = 'sel' }) {
  const color = accent === 'robo' ? 'text-editor-robo' : 'text-editor-sel';
  return (
    <div id={id} className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <p className={`font-mono text-xs ${color}`}>{path}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {blurb ? <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-editor-muted">{blurb}</p> : null}
      </div>
      {count != null ? <span className="shrink-0 font-mono text-xs text-editor-muted">{count} items</span> : null}
    </div>
  );
}

PanelTitle.propTypes = { children: PropTypes.node, right: PropTypes.node, className: PropTypes.string };
CategoryMark.propTypes = { category: PropTypes.string, className: PropTypes.string };
StatusPill.propTypes = { status: PropTypes.string };
Chips.propTypes = { items: PropTypes.arrayOf(PropTypes.string).isRequired, className: PropTypes.string };
PropTable.propTypes = { rows: PropTypes.array.isRequired, top: PropTypes.bool, className: PropTypes.string };
SectionHeader.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  count: PropTypes.number,
  accent: PropTypes.string,
};
