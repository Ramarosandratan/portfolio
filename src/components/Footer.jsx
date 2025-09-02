import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ramarosandratana Mampionona Rinasoa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
