import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Link } from "react-router-dom";
import ps1 from "../public/ps1.png";
import ps2 from "../public/ps2.png";

export const ProblemStatement: React.FC = () => {
  const [ref, inView] = useInView();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Hackathon Problem Statements
            </span>
          </h1>
          <p className="text-gray-400">
            Explore the official problem statements for our hackathon. Prepare your solution and bring your ideas to life!
          </p>
        </motion.div>

        {/* Problem Statement Images */}
        <div className="space-y-10 flex flex-col items-center">
          <motion.img
            src={ps2}
            alt="Problem Statement 2"
            className="rounded-xl shadow-lg w-[80%] max-w-[600px] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={ps1}
            alt="Problem Statement 1"
            className="rounded-xl shadow-lg w-[80%] max-w-[600px] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
