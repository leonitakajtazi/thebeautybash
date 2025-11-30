import React from 'react';
import { Eye, Sparkles, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Wimpernverlängerung",
    description: "Von der klassischen 1:1 Technik bis zum voluminösen Hollywood-Look. Wir kreieren Wimpern, die deinen Blick öffnen und perfekt zu deiner Augenform passen.",
    features: ["1:1 Technik", "Volumen Technik", "Refill Service"]
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Lash & Brow Lift",
    description: "Das perfekte Upgrade für deine Naturwimpern und Augenbrauen. Für einen wachen Blick und perfekt geformte Brauen – ganz ohne künstliche Härchen.",
    features: ["Keratin Laminierung", "Färben inklusive", "Haltbarkeit 6-8 Wochen"]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Permanent Make-up",
    description: "Aufwachen und fertig sein. PMU verleiht deinen Lippen Farbe und Kontur oder perfektioniert deine Augenbrauenform dauerhaft und natürlich.",
    features: ["Powder Brows", "Aquarell Lips", "Wimpernkranzverdichtung"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Bg Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-4">Meine Leistungen</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Behandlungen</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative p-8 glass-panel hover:bg-white/5 transition-all duration-500 cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="mb-6 text-pink-400 group-hover:text-pink-300 transition-colors">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h4>
              
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-3 border-t border-white/10 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
