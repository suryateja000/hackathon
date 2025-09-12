import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import pb1 from '../public/pb1.jpg';
import pb2 from '../public/pb2.jpg';

export const Registration: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="registration"
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
              Problem Statements for Hackathon 4.0
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't miss this opportunity to showcase your skills, learn from experts, and compete for amazing prizes!
          </p>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 text-center w-full  mx-auto"
>
  <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
    <img
      src={pb1}
      alt="Problem Statement 1"
      className="w-46 h-46 object-cover rounded-lg"
    />
    <img
      src={pb2}
      alt="Problem Statement 2"
      className="w-46 h-46 object-cover rounded-lg"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};