import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Über Mich', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
  <img 
    src="/images/logo.jpg" 
    alt="The Beauty Bash Logo" 
    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
  />
  <span className="font-serif text-2xl font-bold tracking-wider text-white">
    The Beauty Bash
  </span>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-pink-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]"
          >
            Termin buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a
            href="#booking"
            className="bg-pink-600 text-center text-white px-6 py-3 rounded-md mt-4"
            onClick={() => setIsOpen(false)}
          >
            Termin buchen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
