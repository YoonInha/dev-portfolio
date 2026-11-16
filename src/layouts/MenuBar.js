import React from 'react';
import Link from 'next/link';

const NAV = [
  { label: 'Robotics', href: '/#robotics', robo: true },
  { label: 'Game & Software', href: '/#game-software' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Contact', href: '/#contact' },
];

export default function MenuBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-editor-line bg-editor-panel/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-[1600px] items-center gap-3 px-4 sm:gap-5 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-mono text-[13px] text-white">
          <span className="text-editor-robo">◆</span>
          InhaYoon<span className="hidden text-editor-muted sm:inline">.uproject</span>
        </Link>
        <nav className="no-scrollbar flex min-w-0 flex-1 gap-1 overflow-x-auto text-[13px]" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false}
              className={`shrink-0 whitespace-nowrap rounded px-2.5 py-1.5 transition-colors hover:bg-editor-panel2 ${
                item.robo ? 'text-editor-robo' : 'text-editor-muted hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="hidden shrink-0 items-center gap-2 font-mono text-[11px] text-editor-muted md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-editor-y" />
          Simulating
        </span>
      </div>
    </header>
  );
}
