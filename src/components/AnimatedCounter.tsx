import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};