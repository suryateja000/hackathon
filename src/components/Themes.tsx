import React, { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const themes: string[] = [
  "Blockchain & Cyber Security",
  "Disaster Management",
  "MedTech",
  "Robotics & Drones",
  "Transportation & Logistics",
  "Clean & Green Technology",
  "Smart Education",
  "Smart Automation",
  "Agriculture & Food Tech",
  "Fitness & Sports",
  "Culture & Heritage",
  "Miscellaneous",
];

export const Themes: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="themes"
      className="max-w-7xl mx-auto px-4 py-12 mt-12 scroll-mt-32"
    >
      {/* Scrolling Banner */}
      <div className="overflow-hidden border-t-2 border-b-2 border-yellow-400 mb-12">
        <div className="whitespace-nowrap animate-marquee inline-block">
          <span style={spanStyle}>
            🚀 Problem statements will be released on 12/09/2025 🚀
          </span>
          <span style={spanStyle}>
            🚀 Problem statements will be released on 12/09/2025 🚀
          </span>
          
        </div>
      </div>

      {/* Inline Keyframes Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* Heading with Subheading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: isInView ? 0.8 : 0 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
            Hackathon Themes
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore diverse problem areas designed to spark innovation and real-world solutions.
        </p>
      </motion.div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {themes.map((theme: string, idx: number) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl shadow-lg p-6 text-center h-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-medium text-white">{theme}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const spanStyle: React.CSSProperties = {
  marginRight: "3rem",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "yellow",
};

export default Themes;
