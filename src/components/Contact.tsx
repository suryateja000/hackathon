import React, { useState } from 'react';
import { hackathonData } from '../data/hackathonData';

export const Contact: React.FC = () => {
  const { event, contact, socialMedia } = hackathonData;

  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {}
  };

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.location || contact.general.address
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        backgroundImage: `
          radial-gradient(900px 420px at 10% -10%, rgba(56,189,248,0.10), transparent),
          radial-gradient(780px 400px at 110% 110%, rgba(99,102,241,0.10), transparent)
        `,
        backgroundColor: '#070b1a',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.16), rgba(99,102,241,0.14), rgba(56,189,248,0.16))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-extrabold mb-3 font-display" style={{ fontSize: 'clamp(1.9rem,4.8vw,3rem)' }}>
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              Get in touch
            </span>
          </h2>
          <p className="text-slate-300 mx-auto" style={{ fontSize: 'clamp(1rem,2.6vw,1.125rem)', maxWidth: '50rem' }}>
            Questions about participation, rules, or logistics? Reach out to the coordinators below or use the links to connect.
          </p>
        </header>

        {/* New two-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Left sidebar: Details */}
          <aside className="lg:col-span-2 space-y-6">
            {/* General card */}
            
          </aside>

          {/* Right main: Organizers + Social */}
          <div className="lg:col-span-8 space-y-6">
            <section className="rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-md p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Organizers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {contact.organizers.map((o) => (
                  <div key={o.phone} className="rounded-xl border border-slate-700/70 bg-slate-900/50 p-4">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{o.role}</p>
                    <p className="text-slate-100 font-semibold">{o.name}</p>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="text-sky-300 text-sm">{o.phone}</span>
                      <button
                        onClick={() => copy(o.phone)}
                        className="rounded-full border border-sky-400/25 bg-slate-900/60 px-3 py-1 text-xs text-slate-100 hover:bg-slate-900/80 transition-colors"
                      >
                        {copied === o.phone ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social (text buttons only) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {Object.entries(socialMedia).map(([key, href]) => (
                  <a
                    key={key}
                    href={href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-sky-400/25 bg-slate-900/60 px-4 py-1.5 text-slate-200 hover:text-sky-300 hover:bg-slate-800/60 transition-colors"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
