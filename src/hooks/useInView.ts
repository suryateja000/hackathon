import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export const useInView = (options = {}) => {
  return useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options
  });
};