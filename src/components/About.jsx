import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
        >
          À propos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 md:p-12 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/portfolio/images/profil.png"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-md"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Ramarosandratana Mampionona Rinasoa
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Étudiant en informatique motivé et passionné par le développement web.
                Compétences solides en langages tels que PHP et Java, ainsi qu'en
                front-end (HTML, CSS, JavaScript). Curieux et rigoureux, capable de
                s'adapter rapidement aux nouvelles technologies et appréciant le travail
                en équipe pour élaborer des solutions innovantes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
