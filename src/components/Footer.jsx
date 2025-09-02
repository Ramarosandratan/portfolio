import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ramarosandratana Mampionona Rinasoa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
