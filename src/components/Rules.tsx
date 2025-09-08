import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { hackathonData } from '../data/hackathonData';
import SIDE_IMAGE from '../public/rules.png';

export const Rules: React.FC = () => {
  const [ref, inView] = useInView();

  const { rules } = hackathonData;

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const node = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="rules"
      aria-labelledby="rules-title"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        backgroundImage: `
          radial-gradient(900px 440px at 10% -10%, rgba(56,189,248,0.10), transparent),
          radial-gradient(760px 420px at 110% 10%, rgba(99,102,241,0.10), transparent)
        `,
        backgroundColor: '#070b1a',
      }}
    >
      {/* Hologrid + ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 sm:opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:40px_40px]" />
        <div className="absolute inset-0 opacity-[0.10] sm:opacity-[0.12] bg-[radial-gradient(700px_320px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>

      {/* Decorative conic “scanner” rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.12), rgba(99,102,241,0.10), rgba(56,189,248,0.12))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="rules-title" className="text-4xl md:text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Rules & Guidelines
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A mission‑map of fair play and innovation to guide squads from spawn to final demo without friction.
          </p>
        </motion.div>

        {/* Layout: Side image (optional) + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Side image panel (optional) */}
          {SIDE_IMAGE ? (
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-md">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={SIDE_IMAGE}
                      alt="Super Sus official visual"
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                  </div>
                </div>

              </div>
            </div>
          ) : null}

          {/* Map column */}
          <div className={SIDE_IMAGE ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 md:p-8">
              {/* Map canvas background (scan grid + path) */}
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                {/* repeating conic grid accent */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    background:
                      'repeating-conic-gradient(from 0deg at 50% 50%, rgba(56,189,248,0.08) 0deg 15deg, transparent 15deg 30deg)',
                  }}
                />
                {/* path glow */}
                <div
                  className="absolute inset-6 rounded-2xl opacity-25"
                  style={{
                    background:
                      'radial-gradient(1200px 400px at 10% 30%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(1200px 400px at 90% 70%, rgba(99,102,241,0.18), transparent 60%)',
                  }}
                />
                {/* dotted navigation path (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1000 600" preserveAspectRatio="none">
                  <defs>
                    <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                      <circle cx="3" cy="3" r="2" fill="rgba(56,189,248,0.9)" />
                    </marker>
                  </defs>
                  <path
                    d="M40,520 C180,420 260,420 380,520 S600,580 720,460 860,260 960,220"
                    fill="none"
                    stroke="rgba(56,189,248,0.35)"
                    strokeWidth="3"
                    strokeDasharray="10 12"
                    markerEnd="url(#dot)"
                  />
                </svg>
              </div>

              {/* Map nodes */}
              <motion.ol
                variants={container}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                  {rules.map((rule, idx) => (
                    <motion.li
                      key={idx}
                      variants={node}
                      className="relative"
                    >
                      {/* Node pin + connector aura */}
                      <div className="absolute -left-2 -top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
                      <div className="absolute -inset-1 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/0 via-sky-500/25 to-blue-500/0 blur" />
                      </div>

                      {/* Node card */}
                      <div className="relative rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
                        <div className="mb-2 inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                          <span className="text-xs uppercase tracking-wider text-sky-200/80">
                            Rule No {idx + 1}
                          </span>
                        </div>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                          {rule.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {rule.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </div>
              </motion.ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
