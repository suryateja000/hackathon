import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AnimatedCounter } from './AnimatedCounter';
import { hackathonData } from '../data/hackathonData';
import ps1 from '../public/ps1.png';
import ps2 from '../public/ps2.png';



export const ProblemStatement: React.FC = () => {
  const [ref, inView] = useInView();

  // Stats data (icons removed)

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <img src={ps2} alt='ps2'/>

        <img src={ps1} alt='ps1'/>

      </div>
    </section>
  );
};
