import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import viit from '../public/Vignan_logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = useRef([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'rules', label: 'Rules' },
    { id: 'themes', label: 'Themes'},
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact' },
    
  ]).current;

  // 1) Scroll shadow/contrast
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2) IntersectionObserver Scrollspy (fixed: pick first visible entry)
  useEffect(() => {
    const sections = navItems
      .map(n => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = (visible?.target as HTMLElement | undefined)?.id;
        if (id) setActiveSection(id);
      },
      {
        // offset for fixed navbar; flip a bit before reaching the very top
        root: null,
        rootMargin: '-96px 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 3) Smooth scroll + immediate visual feedback
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // immediate highlight
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={[
        'fixed top-4 inset-x-0 z-50 mx-auto w-auto lg:max-w-[50vw]',
        'rounded-2xl border backdrop-blur-md transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/70 border-sky-400/30 shadow-[0_10px_30px_rgba(2,132,199,0.25)]'
          : 'bg-slate-900/50 border-sky-300/20 shadow-[0_8px_24px_rgba(99,102,241,0.18)]'
      ].join(' ')}
      aria-label="Primary navigation"
    >
      <div className="px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo -> Home */}
          <motion.button
            type="button"
            aria-label="Go to Home"
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 rounded-md"
            onClick={() => scrollToSection('home')}
          >
            <motion.img
              src={viit}
              alt="Vignan's Institute Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10"
            />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:ml-6">
            <div className="flex items-baseline space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={[
                    'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50',
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-[0_6px_18px_rgba(14,165,233,0.35)]'
                      : 'text-slate-200 hover:text-sky-300 hover:bg-slate-800/50'
                  ].join(' ')}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center -mr-2">
            <motion.button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-sky-300 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-3"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={[
                    'block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50',
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-500'
                      : 'text-slate-200 hover:text-sky-300 hover:bg-slate-800/50'
                  ].join(' ')}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
