import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ramarosandratana Mampionona Rinasoa</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400">À propos</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projets</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Compétences</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
