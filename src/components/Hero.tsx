import React from 'react';
import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';
import AZ from '../public/AZ_VIIT.png';
import Un from '../public/Unstop_VIIT.png';
import gfg from '../public/Gfg.png';
import Acm from '../public/ACM.png';
import hero1 from '../public/hero1.png';
import hero2 from '../public/hero2.png';
import hero5 from '../public/hero-3.png';
import hero4 from '../public/hero4.png';
import name from '../public/name.png';
import { MarqueeBanner } from '../components/MarqueeBanner';

const WEB_IMAGES = { A: hero1, B: hero2, C: hero5, D: hero4 };

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero: React.FC = () => {
  const { event, stats } = hackathonData;
  const partners = [
    { src: AZ, alt: 'Algozint' },
    { src: gfg, alt: 'GeeksforGeeks' },
    { src: Un, alt: 'Unstop' },
    { src: Acm, alt: 'ACM' },
  ];

  return (
    <>
<section id="home" className="relative w-full min-h-[93.5vh] overflow-x-auto overflow-y-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 60% at 10% -10%, rgba(0,194,255,0.10), transparent), radial-gradient(80% 60% at 110% 110%, rgba(99,102,241,0.10), transparent)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(0,194,255,0.16), rgba(99,102,241,0.14), rgba(0,194,255,0.16))',
        }}
      />

      {/* Four decorative images — visible and positioned responsively */}
      <div className="pointer-events-none select-none absolute inset-0">
        {/* Top-left */}
        {WEB_IMAGES.A && (
          <img
            src={WEB_IMAGES.A}
            alt=""
            className="absolute top-[-100%] left-[3%] lg:top-[8%] lg:left-[1%] w-[120px] md:w-[160px] lg:w-[500px] rotate-[-6deg] drop-shadow-[0_10px_30px_rgba(0,194,255,0.35)]"
          />
        )}
        {/* Top-right */}
        {WEB_IMAGES.B && (
          <img
            src={WEB_IMAGES.B}
            alt=""
            className="absolute top-[-100%] right-[4%] lg:top-[9%] lg:right-[5%] w-[170px] md:w-[210px] lg:w-[400px] rotate-[7deg] drop-shadow-[0_12px_34px_rgba(99,102,241,0.35)]"
          />
        )}
        {/* Bottom-left */}
        {WEB_IMAGES.C && (
          <img
            src={WEB_IMAGES.C}
            alt=""
            className="absolute bottom-[1%] left-[1%] lgd:bottom-[12%] lg:left-[32%] w-[90px] md:w-[130px] lg:w-[100px] rotate-[3deg] drop-shadow-[0_8px_24px_rgba(0,194,255,0.30)]"
          />
        )}
        {/* Bottom-right */}
        {WEB_IMAGES.D && (
          <img
            src={WEB_IMAGES.D}
            alt=""
            className="absolute bottom-[1%] right-[1%] lg:bottom-[3%] lg:right-[28%] w-[138px] md:w-[150px] lg:w-[180px] rotate-[-3deg] drop-shadow-[0_10px_30px_rgba(99,102,241,0.32)]"
          />
        )}
      </div>

      {/* Centered content (name removed) */}
      <img src={name} alt="VISTA" className="absolute top-20   left-1/2 -translate-x-1/2 w-96  md:w-[300px] lg:w-[550px] opacity-90" />
      <div className="relative top-44 lg:top-56 z-10 min-h-[80vh] grid place-items-center px-6 py-20 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl text-center"
        >
          {/* Chips */}
          <motion.div
            variants={item}
            className=" flex flex-wrap items-center justify-center gap-2 md:gap-4 text-slate-100"
          >
            <div className="flex items-center gap-3 rounded-full border border-sky-400/25 bg-slate-900/60 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-sky-400/25 bg-slate-900/60 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="font-medium">{stats.expectedParticipants}+ Participants</span>
            </div>
            <a
              href="https://maps.app.goo.gl/R2sCkQ4o231ohfsi8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-sky-400/25 bg-slate-900/60 px-4 py-2 backdrop-blur transition-colors hover:bg-slate-900/80"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-300" />
              <span className="font-medium">{event.venue}</span>
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mt-8">
            <a
              href="#registration"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00C2FF] to-[#6B8CFF] px-4 py-4 font-semibold text-white shadow-[0_0_22px_rgba(0,194,255,0.45)] ring-1 ring-white/15 hover:from-[#12D1FF] hover:to-[#7B9BFF] transition-colors"
            >
              Problem Statements <span aria-hidden className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Sponsors pill */}
          <motion.div variants={item} className="mt-7">
            <div className="mx-auto w-fit rounded-full border border-slate-700/60 bg-slate-900/50 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                {partners.map((logo, i) => (
                  <img key={i} src={logo.src} alt={logo.alt} className="h-5 sm:h-6 md:h-7 w-auto object-contain" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
    <MarqueeBanner />
    </>
  );
};
