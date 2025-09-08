import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { hackathonData } from '../data/hackathonData';
import time from '../public/time_line.png';

// Intrinsic right-side image (desktop-only)
const SIDE_IMAGE = {
  src: time,
  alt: 'Time Master — Thematic Visual',
  width: undefined as number | undefined,
  height: undefined as number | undefined,
};

export const Schedule: React.FC = () => {
  const [ref, inView] = useInView();
  const { timeline } = hackathonData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -22, scale: 0.98 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="relative overflow-hidden py-14 sm:py-16 md:py-20 bg-slate-950/90"
      style={{
        backgroundImage: `
          radial-gradient(820px 380px at 12% -10%, rgba(217,70,239,0.10), transparent),
          radial-gradient(720px 360px at 105% 110%, rgba(99,102,241,0.10), transparent)
        `,
      }}
    >
      {/* Temporal conic wash (desktop emphasis, subtle on mobile) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 w-[760px] h-[760px] sm:w-[880px] sm:h-[880px] rounded-full blur-3xl opacity-15 sm:opacity-20"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(217,70,239,0.14), rgba(99,102,241,0.12), rgba(217,70,239,0.14))' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: fluid typography for small screens */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            id="schedule-title"
            className="font-extrabold mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}
          >
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              Temporal Mission Timeline
            </span>
          </h2>
          <p
            className="text-slate-300 mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 2.8vw, 1.25rem)', maxWidth: '48rem' }}
          >
            Track the Time Master’s arc through 24 hours—each waypoint unlocks the next build, test, and demo phase. [All times subject to tempo shifts.]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Timeline Column */}
          <div className="relative">
            {/* Mobile rail: simple dashed glow for clarity */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-4 w-[2px] rounded-full lg:hidden"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  to bottom,
                  rgba(217,70,239,0.8),
                  rgba(217,70,239,0.8) 12px,
                  transparent 12px,
                  transparent 24px
                )`,
                boxShadow: '0 0 10px rgba(217,70,239,0.45)',
              }}
            />

            {/* Desktop rail: curved ‘C-like’ with runic ticks */}
            <div aria-hidden className="absolute top-0 bottom-0 left-4 w-1 hidden lg:block">
              <svg width="100%" height="100%" viewBox="0 0 4 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="railGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(217,70,239,0.00)" />
                    <stop offset="18%" stopColor="rgba(217,70,239,0.95)" />
                    <stop offset="82%" stopColor="rgba(99,102,241,0.95)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.00)" />
                  </linearGradient>
                </defs>
                <path d="M 2 0 C 10 25, 10 75, 2 100" stroke="url(#railGradient)" strokeWidth="1.35" fill="none" />
                {[10, 22, 34, 46, 58, 70, 82, 94].map((y, i) => (
                  <line key={i} x1="1.2" y1={y} x2="2.8" y2={y} stroke="rgba(217,70,239,0.55)" strokeWidth="0.6" opacity="0.8" />
                ))}
              </svg>
            </div>

            {/* Events: compressed for mobile, roomy for desktop */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="space-y-6 sm:space-y-7"
            >
              {timeline.map((event, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-10 sm:pl-12">
                  {/* Event Card: smaller padding on mobile */}
                  <motion.div
                    whileHover={{ scale: 1.01, y: -1 }}
                    className="
                      relative bg-slate-900/60 backdrop-blur-md border border-slate-700
                      rounded-xl p-4 sm:p-5 group hover:border-fuchsia-500/40 transition-all duration-300
                      lg:max-w-[520px]
                    "
                  >
                    <div className="mb-2 inline-flex items-center gap-2 px-2 py-1 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200 text-[10.5px] sm:text-[11px] tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 animate-pulse" />
                      {event.time}
                    </div>
                    <p className="text-slate-300 text-[0.95rem] sm:text-[1rem] leading-relaxed">
                      {event.description}
                    </p>

                    {/* Right-side diamonds: desktop-only to keep phones uncluttered */}
                    <div className="hidden lg:flex items-center absolute top-1/2 -translate-y-1/2 right-[-26px]">
                      <div className="relative">
                        <div className="w-3.5 h-3.5 rotate-45 bg-gradient-to-br from-fuchsia-400 to-indigo-500 shadow-[0_0_14px_rgba(217,70,239,0.85)]" />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gradient-to-br from-fuchsia-400 to-indigo-500 opacity-90 shadow-[0_0_10px_rgba(217,70,239,0.65)]" />
                      </div>
                    </div>

                    {/* Left-side mobile pin for orientation */}
                    <div className="lg:hidden absolute top-1/2 -translate-y-1/2 -left-3">
                      <div className="w-2.5 h-2.5 rotate-45 bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.7)]" />
                    </div>

                    {/* Hover edge glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/25 to-indigo-500/0 blur" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right-side image: desktop only to avoid mobile layout issues */}
          {SIDE_IMAGE.src && (
            <div className="hidden lg:flex items-start justify-start">
              <img
                src={SIDE_IMAGE.src}
                alt={SIDE_IMAGE.alt}
                width={SIDE_IMAGE.width}
                height={SIDE_IMAGE.height}
                className="block w-auto h-auto max-w-none"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
