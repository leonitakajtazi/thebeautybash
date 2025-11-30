import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
