import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AnimatedCounter } from './AnimatedCounter';
import { hackathonData } from '../data/hackathonData';
import qr from '../public/Pay.jpg';

export const Registration: React.FC = () => {
  const [ref, inView] = useInView();
  const { event, stats } = hackathonData;

  // Stats data (icons removed)

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30">
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
              Register for Hackathon 4.0
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't miss this opportunity to showcase your skills, learn from experts, and compete for amazing prizes!
          </p>
        </motion.div>


        {/* Registration Fee Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-green-800/20 to-emerald-800/20 rounded-2xl p-6 border border-green-500/30 mb-16 text-center"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">Registration Fee: ₹600 per team</h3>
          <p className="text-gray-300 mb-4">
            Fee includes: Meals, Refreshments, Participation Kit, Certificate, and Access to all workshops
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-gray-300">Breakfast, Lunch & Dinner included</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-gray-300">24/7 Refreshments</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-gray-300">Participation Certificate</span>
            </div>
          </div>
        </motion.div>

        {/* Registration + Payment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Registration Card (iconless CTA) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Registration</h3>

            <div className="space-y-4 mb-8">
              {[
                { c: 'bg-sky-400', t: 'Fill out the registration form' },
                { c: 'bg-blue-400', t: 'Submit your team details' },
                { c: 'bg-cyan-400', t: 'Complete payment' },
                { c: 'bg-green-400', t: 'Receive confirmation email' },
              ].map((s) => (
                <div key={s.t} className="flex items-center space-x-3 text-gray-300">
                  <div className={`w-2 h-2 ${s.c} rounded-full`} />
                  <span>{s.t}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">Registration Deadline: {event.registrationDeadline}</p>
              <p className="text-sky-400 mb-6 font-semibold">
                After registration, you'll receive a unique Team Registration Number
              </p>
              <motion.a
                href="https://forms.gle/cBPeyrBwh768X7F56"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
              >
                <span>Register Your Team</span>
                <span aria-hidden className="opacity-90">→</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Payment Card (no icons) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Payment Details</h3>

            <div className="text-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-blue-500/40 transition-all duration-300"
              >
                <img src={qr} alt="QR Code" className="w-36 h-36 mx-auto" />
              </motion.div>
            </div>

            <div className="space-y-3 text-center">
              <p className="text-gray-300">
                <span className="font-semibold">Registration Fee:</span> ₹600 per team
              </p>
              <p className="text-gray-400 text-sm">Fee includes meals, refreshments, and participation kit</p>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-blue-400 font-semibold">UPI ID: 9440550323@ybl</p>
                <p className="text-blue-400 font-semibold">Banking name: SANDHYARANI GUTTULA</p>
                <p className="text-gray-400 text-sm mt-1">Send payment screenshot to confirm registration</p>
                <p className="text-yellow-400 text-sm mt-2 font-semibold">
                  Include your Team Name in payment description
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-800/20 to-red-800/20 border border-orange-500/30 rounded-xl p-6 text-center"
        >
          <h4 className="text-xl font-bold text-orange-400 mb-2">⚡ Limited Seats Available!</h4>
          <p className="text-gray-300">Only few participants will be selected. Register early to secure your spot!</p>
        </motion.div>
      </div>
    </section>
  );
};
