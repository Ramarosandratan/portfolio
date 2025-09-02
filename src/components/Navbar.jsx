import React from 'react';

const Navbar = ({ activeIndex, goToSection }) => {

  const sections = ['Hero', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900 bg-opacity-70 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          {sections.map((sectionName, index) => (
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
      </div>
    </nav>
  );
};

export default Navbar;
