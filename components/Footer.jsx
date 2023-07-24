import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} MicroSaas Prompts. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
