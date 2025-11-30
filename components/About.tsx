import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <img 
                src="./images/owner.png" 
                alt="Melissa Durmaz" 
                className="w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-pink-500/30 -z-10 hidden md:block" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-pink-500 font-serif text-2xl italic mb-2">Über mich</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Melissa Durmaz
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Willkommen bei <strong>The Beauty Bash</strong>. Ich bin Melissa, Gründerin und zertifizierte Expertin für Wimpernverlängerung, Lash & Brow Lifting und Permanent Make-up.
              </p>
              <p>
                Mein Ziel ist es, deine natürliche Schönheit zu unterstreichen – nicht zu überdecken. In meinem Studio in Berlin Hellersdorf schaffe ich einen Raum, in dem du dich entspannen kannst, während ich mit höchster Präzision und Leidenschaft an deinem perfekten Look arbeite.
              </p>
              <p>
                Egal ob du dir einen dramatischen Augenaufschlag oder subtile Betonung wünschst – ich berate dich individuell und finde genau den Style, der zu dir passt.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
                alt="Unterschrift" 
                className="h-12 opacity-50 invert" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
