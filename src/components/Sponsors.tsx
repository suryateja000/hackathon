import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import sponsor1 from '../public/sponser1.jpg';
import sponsor2 from '../public/sponser2.png';
import sideVisual from '../public/sponser.png'; 

export const Sponsors: React.FC = () => {
  const [ref, inView] = useInView();

  const sponsors = [
    { name: 'Kuantum Krux', logoSrc: sponsor1 },
    { name: 'Neemiit',      logoSrc: sponsor2 },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Our Sponsors & Partners
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Proudly supported by industry leaders who foster innovation and talent
          </p>
        </motion.div>

        {/* Left image + right sponsors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left sticky visual */}
          <aside className="lg:col-span-4">
                <div className="relative w-[350px] overflow-hidden">
                  <img
                    src={sideVisual}
                    alt="Sponsor showcase visual"
                    className="h-full w-full object-cover"
                  />
            </div>
          </aside>

          {/* Right sponsor tiles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl lg:max-w-none">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="bg-gradient-to-br from-blue-500/10 to-white-500/10 border border-blue-500/30 rounded-2xl p-8 text-center group hover:border-blue-900/50 transition-all duration-300"
                >
                  <div className="mx-auto mb-4 grid place-items-center h-24 w-24 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 overflow-hidden group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <img
                      src={sponsor.logoSrc}
                      alt={sponsor.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {sponsor.name}
                  </h4>
                  <p className="text-blue-400 text-sm">Official Sponsor</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
