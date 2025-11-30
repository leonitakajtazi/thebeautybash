import React from 'react';

const images = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.PNG",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
             <h2 className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-4">Portfolio</h2>
             <h3 className="text-4xl font-serif text-white">Galerie</h3>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:inline-block text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-pink-500 pb-1">
            Folge mir auf Instagram
          </a>
        </div>

        {/* Masonry Layout Simulation with CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden break-inside-avoid">
              <img 
                src={src} 
                alt="Beauty Work" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest uppercase border border-white px-4 py-2">
                  View Look
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
