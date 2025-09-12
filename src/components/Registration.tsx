import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AnimatedCounter } from './AnimatedCounter';
import { hackathonData } from '../data/hackathonData';
import qr from '../public/upi_payment_qr_2.png';
import ship from '../public/ship.png';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router

export const Registration: React.FC = () => {
  const [ref, inView] = useInView();

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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
              Problem Statements
            </span>
          </h2>
          <p className="text-gray-400">
            Explore the official problem statements for our hackathon. Prepare your solution and bring your ideas to life!
          </p>
        </motion.div>

        <img
          src={ship}
          alt="Problem Statements"
          className="mx-auto mb-16 rounded-xl shadow-lg h-42"
        />

        {/* ✅ Smooth navigation with Link */}
        <motion.div variants={item} className="mt-8 justify-center items-center flex">
          <Link
            to="/problem-statement" // ✅ Correct route (make sure this exists in App.jsx)
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00C2FF] to-[#6B8CFF] px-4 py-4 font-semibold text-white shadow-[0_0_22px_rgba(0,194,255,0.45)] ring-1 ring-white/15 hover:from-[#12D1FF] hover:to-[#7B9BFF] transition-colors"
          >
            Click here to view Problem Statements
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
