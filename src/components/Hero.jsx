import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Photo/Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img
          src="/portfolio/images/profil.png"
          alt="Profile Illustration"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Presentation Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-2xl mb-8"
      >
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Hello, I'm <span className="text-indigo-600">Ramarosandratana Mampionona Rinasoa</span>
        </h1>
        <p className="text-xl text-gray-600">
          A passionate Full-Stack Developer with a focus on creating elegant and efficient web applications.
          I love bringing ideas to life through code and constantly learning new technologies.
        </p>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          View My Work
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
