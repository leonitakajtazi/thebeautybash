import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10 text-center">
      <p className="text-gray-500 text-sm font-light">
        &copy; {new Date().getFullYear()} The Beauty Bash - Melissa Durmaz. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4 text-xs text-gray-600 uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Impressum</a>
        <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
      </div>
    </footer>
  );
};

export default Footer;
