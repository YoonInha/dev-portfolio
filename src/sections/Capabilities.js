import React from 'react';
import { SectionHeader } from '../components/editor/ui';
import { CAPABILITIES } from '../mock/profile';

export default function Capabilities() {
  return (
    <section className="border-b border-editor-line">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader id="capabilities" path="/Config/Capabilities" title="Capabilities" />
        <div className="grid gap-px overflow-hidden rounded-md border border-editor-line bg-editor-line sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((group) => {
            const robo = group.accent === 'robo';
            return (
              <div key={group.title} className={`min-w-0 p-5 sm:p-6 ${robo ? 'bg-[#1f1a10]' : 'bg-editor-panel'}`}>
                <h3 className={`font-mono text-xs uppercase tracking-wider ${robo ? 'text-editor-robo' : 'text-editor-muted'}`}>
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-[14.5px] text-editor-ink">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={robo ? 'text-editor-robo' : 'text-editor-sel'}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
