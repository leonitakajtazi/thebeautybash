import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wimpernverlängerung',
    date: '',
    time: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after showing success for a while if needed, 
      // but usually for booking we leave the success message visible.
    }, 2000);
  };

  return (
    <section id="booking" className="py-24 relative isolate overflow-hidden">
      {/* Background Image & Overlay */}
      <img
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-pink-500 uppercase tracking-widest text-sm font-semibold mb-4">Termin</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Online Buchen
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sichere dir deinen Wunschtermin ganz bequem online. Fülle das Formular aus und ich bestätige den Termin schnellstmöglich.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                </div>
                <h4 className="text-3xl font-serif text-white mb-4">Anfrage gesendet!</h4>
                <p className="text-gray-300 text-lg">
                  Vielen Dank, {formState.name}.<br/>
                  Ich habe deine Anfrage erhalten und werde mich in Kürze bei dir melden.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-pink-500 hover:text-pink-400 underline underline-offset-4"
                >
                  Neue Anfrage senden
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Vor- und Nachname</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Maria Musterfrau"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Adresse</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="maria@beispiel.de"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Telefonnummer</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="0176 12345678"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-300">Behandlung</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors [&>option]:bg-neutral-900"
                    >
                      <option value="Wimpernverlängerung">Wimpernverlängerung (Neu)</option>
                      <option value="Wimpernverlängerung Refill">Wimpernverlängerung (Refill)</option>
                      <option value="Lash & Brow Lift">Lash & Brow Lift</option>
                      <option value="PMU Brows">Permanent Make-up (Brows)</option>
                      <option value="PMU Lips">Permanent Make-up (Lips)</option>
                      <option value="Beratung">Kostenlose Beratung</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-pink-500" /> Wunschdatum
                    </label>
                    <input
                      required
                      type="date"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors [color-scheme:dark]"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-pink-500" /> Uhrzeit (ca.)
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formState.time}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-pink-600 hover:bg-pink-500 disabled:bg-pink-800 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center justify-center gap-2 mt-4"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Termin anfragen"
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten einverstanden.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;