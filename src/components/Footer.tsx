import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, ExternalLink } from 'lucide-react';
import { hackathonData } from '../data/hackathonData';

export const Footer: React.FC = () => {
  const { event, socialMedia } = hackathonData;

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Rules', href: '#rules' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-4"
            >
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                {event.name}
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-4 max-w-md"
            >
              {event.college}'s premier coding competition. Join us for 24 hours of innovation, 
              learning, and building the future through technology.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-400 font-semibold"
            >
              {event.tagline}
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="https://www.linkedin.com/company/supersus-hackathon-4-0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-slate-800 mt-8 pt-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
      >
        <p className="text-gray-400 text-sm">
          © 2025 {event.college} – {event.name}. All rights reserved.
        </p>

        <div className="text-gray-300 text-sm space-y-1 md:text-right">
          <p>
            <span className="font-semibold">Organized by:</span>{' '}
            Department of CSE and ACSE
          </p>

          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 md:justify-end">
            <span>AlgoZenith</span>
            <span aria-hidden="true" className="text-gray-500">•</span>
            <span>GeeksforGeeks</span>
            <span aria-hidden="true" className="text-gray-500">•</span>
            <span>Igniters Club</span>
            <span aria-hidden="true" className="text-gray-500">•</span>
            <span>ACM</span>
        
          </p>
        </div>
      </motion.div>
      </div>
    </footer>
  );
};
