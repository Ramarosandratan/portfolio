import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({
  goToSection,
  name = "Ramarosandratana Mampionona Rinasoa",
  title = "A passionate Full-Stack Developer with a focus on creating elegant and efficient web applications. I love bringing ideas to life through code and constantly learning new technologies.",
  backgroundImage = "/images/freelance.png",
  profileImage = "/portfolio/images/profil.png",
  profileImageAlt = "Profile Illustration",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full md:flex-row">
        {/* Presentation Text and Call to Action */}
        <div className="flex flex-col items-center mb-8 text-center md:items-start md:text-left max-w-2xl md:mr-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-white">Hello, I'm</span> <span className="text-indigo-600">{name}</span>
            </h1>
            <p className="mb-8 text-lg text-white md:text-xl">
              {title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => goToSection(1)}
              className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Scroll Down &darr;
            </button>
          </motion.div>
        </div>

        {/* Photo/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="order-first mb-8 md:mb-0 md:ml-8 md:order-last"
        >
          <img
            src={profileImage}
            alt={profileImageAlt}
            className="object-cover w-48 h-48 border-4 border-white rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
