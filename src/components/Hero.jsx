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
    <div id="home" className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full md:flex-row">
        {/* Presentation Text and Call to Action */}
        <div className="flex flex-col items-center mb-8 text-center md:items-start md:text-left max-w-2xl md:mr-8 md:mb-0 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-4 text-xl font-bold leading-tight sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              <span className="text-white">Hello, I'm</span> <span className="text-indigo-600">{name}</span>
            </h1>
            <p className="mb-8 text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
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
              className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-14 2xl:py-7"
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
          className="order-first mb-8 md:mb-0 md:ml-8 md:order-last lg:ml-12 xl:ml-16 2xl:ml-20"
        >
          <img
            src={profileImage}
            alt={profileImageAlt}
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 border-4 border-white rounded-full shadow-lg max-w-full lg:border-6 xl:border-8 2xl:border-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
