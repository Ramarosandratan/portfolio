import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ramarosandratana Mampionona Rinasoa</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <motion.a
                href="#home"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#about"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#projects"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#skills"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Skills
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
