import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yourName = "Ramarosandratana Mampionona Rinasoa";

  return (
    <footer className="text-center text-sm text-gray-500 mt-8 py-4 border-t border-gray-700">
      <p>Copyright &copy; {currentYear} {yourName}</p>
    </footer>
  );
};

export default Footer;
