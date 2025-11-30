import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a] z-10" />
        <img 
          src="./images/back.png" 
          alt="Beauty Lash Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-1000 z-0" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-pink-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
            Melissa Durmaz • Berlin Hellersdorf
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            The Beauty <span className="text-gradient italic">Bash</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 tracking-wide font-light">
            Wimpernverlängerung • Lash & Brow Lift • PMU
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#booking"
              className="px-8 py-4 bg-white text-black font-medium tracking-wider hover:bg-pink-100 transition-colors duration-300 min-w-[200px]"
            >
              TERMIN BUCHEN
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm min-w-[200px]"
            >
              MEHR ERFAHREN
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
