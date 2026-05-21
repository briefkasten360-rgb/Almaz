import { motion } from 'motion/react';
import { Calendar, MessageSquare, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import Logo from './Logo';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    const formattedNum = (CONTACT_INFO.whatsappFormatted || '').replace('+', '');
    window.open(`https://wa.me/${formattedNum || '4915257619814'}?text=${encodedMessage}`, '_blank', 'noreferrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-cream-50"
    >
      {/* Editorial Luxury Background Texture / Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-gold-50 blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] rounded-full bg-cream-200 blur-3xl opacity-40" />
        {/* Subtle decorative grid/stripes */}
        <div className="absolute inset-0 bg-[radial-gradient(#d6bf7b_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Value Proposition & Lead Generation */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Logo Brand Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <Logo variant="full" className="max-w-[200px] h-auto bg-white/20 p-2 rounded-xl backdrop-blur-sm shadow-sm border border-gold-100/30" />
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2"
            >
              <div className="px-3.5 py-1 rounded-full bg-gold-100/70 border border-gold-200/80 text-gold-700 text-xs tracking-wider uppercase font-medium flex items-center space-x-1">
                <Sparkles size={12} className="text-gold-500 animate-pulse" />
                <span>Premium-Stylings in Herne</span>
              </div>
            </motion.div>

            {/* Captivating Luxury Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-900 tracking-tight leading-[1.05]"
              >
                Ihre Haare sind Ihre <br className="hidden sm:inline" />
                <span className="font-serif italic text-gold-500 relative inline-block">
                  wertvollste Krone
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gold-300 opacity-60 blur-[0.5px]" />
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-charcoal-500 font-light leading-relaxed font-sans"
              >
                Almaz Friseursalon kreiert maßgeschneiderte Signature-Balayage, 
                präzise Schnitte und luxuriöse Stylings. Erleben Sie meisterhafte Handwerkskunst 
                und exklusiven Service in unserem Salon in Herne.
              </motion.p>
            </div>

            {/* Direct High-Converting CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-cta-group"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-charcoal-900 hover:bg-gold-500 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 border border-charcoal-900 hover:border-gold-500"
                id="hero-booking-btn"
              >
                <Calendar size={18} />
                <span>Wunschtermin Sichern</span>
              </button>
              
              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                id="hero-whatsapp-btn"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Beratung</span>
              </button>
            </motion.div>

            {/* Crucial Conversion Cues / Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-cream-200/80 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-charcoal-500 font-medium"
              id="hero-trust-indicators"
            >
              <div className="flex items-center space-x-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span><strong>4.9 Sterne</strong> auf Google (240+ Bewertungen)</span>
              </div>
              <div className="flex items-center space-x-1.5 border-l border-cream-200 pl-4 hidden sm:flex">
                <ShieldCheck size={14} className="text-gold-500" />
                <span>Zufriedenheitsgarantie</span>
              </div>
              <div className="flex items-center space-x-1.5 border-l border-cream-200 pl-4">
                <Sparkles size={14} className="text-gold-500 animate-pulse" />
                <span>Meisterbetrieb</span>
              </div>
            </motion.div>

          </div>

          {/* Premium Visual Imagery Container */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none shadow-2xl rounded-2xl overflow-hidden aspect-[4/5] border-[6px] border-white"
              id="hero-visual-container"
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Almaz Haarstudio Premium Salon Interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              {/* Overlapping Floating Banner Component */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-white/95 backdrop-blur shadow-lg border border-gold-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">Balayage & Blond</p>
                  <p className="font-serif text-sm font-medium text-charcoal-950">Meisterhafte Colorationen</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-charcoal-400 uppercase">Preise ab</p>
                  <p className="font-serif text-base font-semibold text-gold-500">149 €</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
