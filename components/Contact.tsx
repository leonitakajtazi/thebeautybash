import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h3 className="text-pink-500 font-serif text-2xl italic mb-6">Kontakt</h3>
            <h2 className="text-4xl font-bold text-white mb-10 font-serif">Komm vorbei</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-pink-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Adresse</h4>
                  <p className="text-gray-400">Hellersdorfer Str. 123<br/>12627 Berlin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-pink-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Telefon</h4>
                  <p className="text-gray-400">+49 123 4567890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-pink-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">info@beauty-bash.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-pink-500">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Social Media</h4>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">@thebeautybash_berlin</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full rounded-lg overflow-hidden grayscale invert filter brightness-75 contrast-125">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.938833446543!2d13.6025!3d52.5365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84c7000000001%3A0x0!2sBerlin-Hellersdorf!5e0!3m2!1sde!2sde!4v1600000000000!5m2!1sde!2sde" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
