import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 lg:p-14 xl:p-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Profile Photo/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src="/portfolio/images/profil-colored.png"
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover shadow-lg border-4 border-indigo-500 dark:border-indigo-400 lg:border-6 xl:border-8 max-w-full"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="flex-grow text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-bold text-gray-900 dark:text-white mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-8 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >
              I am Ramarosandratana Mampionona Rinasoa, a computer science student passionate about web development and modern technologies. Curious and rigorous, I enjoy exploring new solutions to create high-performance and intuitive applications. My goal is to continue growing as a full-stack developer, combining creativity and efficiency to meet real user needs.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-700 dark:text-gray-300 space-y-3 mb-10 text-sm md:text-left text-center sm:text-base lg:text-lg xl:text-xl"
            >
              <li><span className="font-semibold text-gray-900 dark:text-white">🎓 Education:</span> Bachelor's Degree in Computer Science (IT University, Madagascar)</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">💻 Specialty:</span> Web Development and Application Development</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">🌍 Location:</span> Antananarivo, Madagascar</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">📧 Email:</span> ramarosandratana@hotmail.com</li>
              <li><span className="font-semibold text-gray-900 dark:text-white">📂 Availability:</span> Open to internships and collaborations</li>
            </motion.ul>

            <motion.a
              href="/portfolio/documents/CV_ramarosandratana_mampionona_rinasoa.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out lg:text-xl lg:py-4 lg:px-10 xl:text-2xl xl:py-5 xl:px-12"
            >
              Download my CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
