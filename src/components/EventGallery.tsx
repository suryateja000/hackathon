import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Code, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { hackathonData } from '../data/hackathonData';

export const EventGallery: React.FC = () => {
  const [ref, inView] = useInView();
  const { eventGallery } = hackathonData;

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              Our Previous Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at the amazing moments from our previous hackathons and see what awaits you
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-700 group-hover:border-blue-500/40 transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Camera, label: "Memorable Moments", value: "1000+" },
            { icon: Users, label: "Past Participants", value: "1500+" },
            { icon: Code, label: "Projects Built", value: "300+" },
            { icon: Trophy, label: "Winners Celebrated", value: "50+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center bg-slate-900/50 rounded-xl p-6 border border-slate-700"
            >
              <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
