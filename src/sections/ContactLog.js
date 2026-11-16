import React, { useState } from 'react';
import { SectionHeader, PanelTitle } from '../components/editor/ui';
import { contactEmail, LINKS } from '../mock/profile';

// Contact styled as the editor's Output Log.

export default function ContactLog() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // clipboard unavailable: the address stays selectable on screen
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader
          id="contact"
          path="/Output/Contact"
          title="Get in touch"
          blurb="새로운 기회와 도전을 지향합니다. 협업 제안이나 기술 교류 모두 환영합니다."
        />
        <div className="overflow-hidden rounded-md border border-editor-line bg-editor-panel">
          <PanelTitle right="Output Log">LogContact</PanelTitle>
          <div className="flex flex-col gap-6 p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${contactEmail}?subject=Inquiry`}
                className="min-w-0 text-2xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] hover:text-editor-sel sm:text-4xl"
              >
                {contactEmail}
              </a>
              <button
                type="button"
                onClick={copy}
                className="shrink-0 self-start rounded border border-editor-line px-4 py-2 font-mono text-xs text-editor-ink hover:border-editor-muted sm:self-auto"
              >
                {copied ? 'Copied ✓' : 'Copy email'}
              </button>
            </div>
            <ul className="grid gap-1.5 font-mono text-[12.5px]">
              {LINKS.map((l) => (
                <li key={l.href} className="min-w-0 [overflow-wrap:anywhere]">
                  <span className="text-editor-y">LogContact:</span> <span className="text-editor-muted">{l.label} →</span>{' '}
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-editor-sel hover:underline">
                    {l.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
