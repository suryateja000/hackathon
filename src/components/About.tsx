import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

import IMPOSTOR from "../public/impost.jpg";
import CREW from "../public/crewup.jpg";
import SHIP from "../public/ship.png";
import MAP from "../public/starategize.jpg";
const poster = '/poster.png';

const CARD_IMAGES = {
  CREW: CREW,
  MAP: MAP,
  SHIP: SHIP,
  IMPOSTOR: IMPOSTOR
};

type ImageOpts = {
  src: string;
  alt?: string;
  aspect?: '4/3';
  decoding?: 'async' | 'sync' | 'auto';
  loading?: 'lazy' | 'eager';
};

type Card = {
  title: string;
  tag: string;
  points: string[];
  image?: ImageOpts;
};

export const About: React.FC = () => {
  const [ref, inView] = useInView();
  const reduceMotion = useReducedMotion();

  // Reusable animation presets honoring reduced motion
  const fadeUp = reduceMotion
    ? { initial: { opacity: 0 }, animate: inView ? { opacity: 1 } : {} }
    : { initial: { opacity: 0, y: 36 }, animate: inView ? { opacity: 1, y: 0 } : {} };

  const ringInRight = reduceMotion
    ? { initial: { opacity: 0 }, animate: inView ? { opacity: 0.4 } : {}, transition: { duration: 0.6 } }
    : { initial: { opacity: 0, rotate: -8, scale: 0.95 }, animate: inView ? { opacity: 0.4, rotate: -8, scale: 1 } : {}, transition: { duration: 1.2 } };

  const ringInLeft = reduceMotion
    ? { initial: { opacity: 0 }, animate: inView ? { opacity: 0.3 } : {}, transition: { duration: 0.6 } }
    : { initial: { opacity: 0, rotate: 12, scale: 0.9 }, animate: inView ? { opacity: 0.3, rotate: 12, scale: 1 } : {}, transition: { duration: 1.2, delay: 0.1 } };

  const cards: Card[] = [
    {
      title: 'Crew Up',
      tag: 'Spacecrew',
      points: ['Pair programming windows', 'Task handoffs and reviews', 'Checkpoint sync cadence'],
      image: CARD_IMAGES.CREW
        ? { src: CARD_IMAGES.CREW, alt: 'Spacecrew collaboration banner', aspect: '4/3', decoding: 'async', loading: 'lazy' }
        : undefined
    },
    {
      title: 'Strategize',
      tag: 'Strategy',
      points: ['Scope, triage, prioritize', 'Risk flags and mitigation', 'Decision logs'],
      image: CARD_IMAGES.MAP
        ? { src: CARD_IMAGES.MAP, alt: 'Strategy map banner', aspect: '4/3', decoding: 'async', loading: 'lazy' }
        : undefined
    },
    {
      title: 'Ship Fast',
      tag: '24h Sprint',
      points: ['MVP cuts and guardrails', 'Live demos and telemetry', 'Retro-ready notes'],
      image: CARD_IMAGES.SHIP
        ? { src: CARD_IMAGES.SHIP, alt: 'Spaceship takeoff banner', aspect: '4/3', decoding: 'async', loading: 'lazy' }
        : undefined
    },
    {
      title: 'Adapt',
      tag: 'Impostor',
      points: ['Debug surprises quickly', 'Pivot with intent', 'Stabilize then optimize'],
      image: CARD_IMAGES.IMPOSTOR
        ? { src: CARD_IMAGES.IMPOSTOR, alt: 'Impostor silhouette banner', aspect: '4/3', decoding: 'async', loading: 'lazy' }
        : undefined
    }
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      aria-labelledby="about-title"
      style={{
        backgroundImage: `
          radial-gradient(900px 440px at 10% -10%, rgba(56,189,248,0.10), transparent),
          radial-gradient(760px 420px at 110% 10%, rgba(99,102,241,0.10), transparent)
        `,
        backgroundColor: '#070b1a'
      }}
    >
      {/* Hologrid + ambient glow (CSS-only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 sm:opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:40px_40px]" />
        <div className="absolute inset-0 opacity-[0.10] sm:opacity-[0.12] bg-[radial-gradient(700px_320px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)]" />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 sm:-top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.35), rgba(99,102,241,0.25), transparent 60%)'
        }}
      />

      {/* Decorative rings (CSS-only, responsive sizes) */}
      <motion.div
        aria-hidden
        className="absolute right-[-28%] sm:-right-40 top-16 sm:top-24 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(closest-side, rgba(14,165,233,0.0) 74%, rgba(14,165,233,0.35) 75% 76%, rgba(14,165,233,0.0) 77%)',
          boxShadow: '0 0 120px rgba(56,189,248,0.25)'
        }}
        {...ringInRight}
      />
      <motion.div
        aria-hidden
        className="absolute left-[-24%] sm:-left-40 bottom-6 sm:bottom-10 w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(closest-side, rgba(99,102,241,0.0) 74%, rgba(99,102,241,0.30) 75% 76%, rgba(99,102,241,0.0) 77%)',
          boxShadow: '0 0 100px rgba(99,102,241,0.25)'
        }}
        {...ringInLeft}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-12 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-200 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em]">
            Super Sus Edition
            <span className="inline-block h-1 w-1 rounded-full bg-sky-300" />
            Hackathon 4.0
          </div>

          <h2 id="about-title" className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              About Hackathon 4.0
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A 24-hour innovation mission inspired by spacecrew teamwork and social-deduction strategy—build, collaborate, and launch under pressure.
          </p>
        </motion.div>

        {/* Hero split (Mission copy + Mission console) */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-14 md:mb-16"
        >
          
        <div className="relative p-1 sm:p-1 md:p-1 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/70 to-indigo-950/40 backdrop-blur-md">
          <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/5" />
          <div className="relative h-full overflow-hidden rounded-xl">
            <img
              src={poster}
              alt="Hackathon 4.0 Poster"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>


          {/* Right: Mission Console (stats/chips) */}
          <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 md:p-8">
            <div className="absolute inset-0 pointer-events-none opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[linear-gradient(transparent,transparent_22px,rgba(56,189,248,0.18)_23px),linear-gradient(90deg,transparent,transparent_22px,rgba(56,189,248,0.12)_23px)] bg-[size:22px_22px] sm:bg-[size:24px_24px]" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { k: 'Duration', v: '24h' },
                { k: 'Teams', v: '100+' },
                { k: 'Tracks', v: 'AI • Web • Mobile' },
                { k: 'Format', v: 'On-site' },
                { k: 'Team Size', v: '2-4 Members' },
                { k: 'Venue', v: "VIIT • Duvvada • Vskp" }

              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-slate-700 bg-slate-900/40 p-3 sm:p-3.5">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400">{s.k}</div>
                  <div className="mt-1 text-slate-100 font-semibold text-sm sm:text-base">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {['Crew Ops', 'Prototype', 'Demo'].map((chip, i) => (
                <div
                  key={chip}
                  className="flex items-center justify-center gap-2 rounded-lg px-2.5 sm:px-3 py-2 border border-sky-400/30 bg-sky-400/10 text-sky-200"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-sky-300' : i === 1 ? 'bg-indigo-300' : 'bg-cyan-300'}`}
                  />
                  <span className="text-[11px] sm:text-xs tracking-wide">{chip}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature cards with 16:9 image banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 md:mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={inView ? (reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={reduceMotion ? {} : { y: -6, scale: 1.01 }}
              className="group relative rounded-2xl border border-slate-700/70 bg-slate-900/50 overflow-hidden"
            >
              {card.image?.src ? (
                <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[4/5] lg:aspect-[5/5]">
                  <img
                    src={card.image.src}
                    alt={card.image.alt || card.title}
                    className="h-full w-full object-cover object-center" // or object-top if needed
                    loading={card.image.loading || 'lazy'}
                    decoding={card.image.decoding || 'async'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                </div>
              ) : (
                <div className="h-20 md:h-16 bg-[radial-gradient(600px_180px_at_70%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(500px_160px_at_30%_120%,rgba(147,51,234,0.22),transparent)]" />
              )}


              <div className="p-5 sm:p-6">
                <div className="mb-2.5 sm:mb-3">
                  <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium tracking-wide text-cyan-300">
                    {card.tag}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2.5">{card.title}</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-sm">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/0 via-sky-500/25 to-blue-500/0 blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
