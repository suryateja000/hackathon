import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';


export const Submissions: React.FC = () => {
  const [ref, inView] = useInView();
  const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

  return (
    <section
      id="Submissions"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Submission Form
            </span>
          </h2>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 text-center w-[500px] mx-auto"
>
  <p className="text-gray-400 text-lg font-medium mb-4">
    Please ensure to submit your ppt by <span className="text-blue-400 font-semibold">1:15 PM</span>. Failure to meet this deadline will negatively impact your team's result.
  </p>

  <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
    <motion.div variants={item} className="mt-8">
      <a
        href=""
        className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00C2FF] to-[#6B8CFF] px-4 py-4 font-semibold text-white shadow-[0_0_22px_rgba(0,194,255,0.45)] ring-1 ring-white/15 hover:from-[#12D1FF] hover:to-[#7B9BFF] transition-colors"
      >
        Submission form <span aria-hidden className="ml-2">→</span>
      </a>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  );
};