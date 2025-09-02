import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Mon Portfolio. Tous droits réservés.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">GitHub</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
