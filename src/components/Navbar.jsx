import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaFolder, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ sectionNames, activeIndex, goToSection, isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(activeIndex);

  const iconMap = {
    Home: FaHome,
    About: FaUser,
    Skills: FaCode,
    Projects: FaFolder,
    Contact: FaEnvelope,
  };

  // Empêcher le défilement de la page lorsque le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Détecter la section active lors du scroll pour le menu mobile
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let newActiveIndex = 0;
      sectionNames.forEach((item, index) => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          if (scrollY >= elementTop && scrollY < elementBottom) {
            newActiveIndex = index;
          }
        }
      });
      setMobileActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appeler une fois pour l'état initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionNames]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (index, sectionId) => {
    if (isMobile) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      goToSection(index);
    }
    setIsMenuOpen(false); // Fermer le menu après la navigation
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 py-4 flex">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        
        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          {sectionNames.map((sectionName, index) => (
            <li key={sectionName}>
              <button
                onClick={() => goToSection(index)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeIndex === index ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {sectionName}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden fixed top-4 right-4 z-[100]">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed top-0 right-0 w-80 h-full bg-slate-900 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-slate-100 text-xl font-semibold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="text-slate-100 focus:outline-none p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        
        {/* Navigation Items */}
        <motion.ul
          className="flex flex-col space-y-3 flex-1 justify-center"
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {sectionNames.map((item, index) => {
            const IconComponent = iconMap[item];
            const isContact = item === 'Contact';
            return (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => handleNavigationClick(index, item.toLowerCase())}
                  className={`w-full text-center text-lg font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center space-x-3 ${
                    mobileActiveIndex === index
                      ? 'text-slate-900 bg-slate-200 shadow-lg'
                      : 'text-slate-300 bg-transparent hover:text-slate-100 hover:bg-slate-700 hover:shadow-md'
                  }`}
                >
                  {IconComponent && <IconComponent className="text-xl" />}
                  <span>{item}</span>
                </motion.button>
              </motion.li>
            );
          })}
        </motion.ul>
        
        {/* Footer with social icons */}
        <div className="mt-auto pt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/Ramarosandratan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rinasoa-mampionona-ramarosandratana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ramarosandratana@hotmail.com"
            className="text-slate-300 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
