import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import MenuBar from './MenuBar';
import { LINKS } from '../mock/profile';

// -----------------------------------------------------------

export default function MainLayout({ children, meta }) {
  // 우클릭 방지 (기존 동작 유지)
  const preventRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {meta}
      </Head>

      <MenuBar />

      <main className="overflow-x-hidden" onContextMenu={preventRightClick}>
        {children}
      </main>

      <footer className="border-t border-editor-line bg-editor-panel">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-4 font-mono text-[11px] text-editor-muted sm:px-6">
          <span>© {new Date().getFullYear()} Inha Yoon</span>
          <nav className="flex flex-wrap gap-4">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}

// ---------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
};
