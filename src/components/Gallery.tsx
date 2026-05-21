import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenBooking: () => void;
}

export default function Gallery({ onOpenBooking }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cut' | 'color' | 'styling' | 'balayage'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories: { label: string; value: 'all' | 'cut' | 'color' | 'styling' | 'balayage' }[] = [
    { label: 'Alle Arbeiten', value: 'all' },
    { label: 'Balayage', value: 'balayage' },
    { label: 'Schnitte', value: 'cut' },
    { label: 'Coloration', value: 'color' },
    { label: 'Event-Styling', value: 'styling' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  // Lightbox Navigation helpers
  const handleOpenLightbox = (itemId: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    let nextIdx = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    
    // Looping bounds
    if (nextIdx >= GALLERY_ITEMS.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = GALLERY_ITEMS.length - 1;
    
    setLightboxIndex(nextIdx);
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">Inspiration & Ergebnisse</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
            Unsere Meisterwerke
          </h2>
          <div className="h-0.5 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm text-charcoal-400 font-light mt-4">
            Echte Fotos von echten Kundinnen und Kunden aus unserem Salon in Herne. 
            Lassen Sie sich für Ihren nächsten Besuch inspirieren.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="gallery-filters">
          {filterCategories.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                activeFilter === f.value
                  ? 'bg-gold-500 text-white border-gold-500 shadow-md'
                  : 'bg-cream-50 text-charcoal-550 border-cream-200 hover:bg-cream-100 hover:text-charcoal-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Beautiful Masonry Grid Look) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" id="gallery-masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer border border-cream-100 shadow-sm hover:shadow-lg transition-shadow bg-cream-50"
                onClick={() => handleOpenLightbox(item.id)}
              >
                {/* Image */}
                <img
                  src={item.imageAfter}
                  alt={item.title}
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gold-400 bg-gold-950/50 px-2 py-0.5 rounded-full inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[11px] text-cream-200 mt-1 font-light flex items-center space-x-1">
                        <Sparkles size={11} className="text-gold-400" />
                        <span>{item.description}</span>
                      </p>
                    )}
                    <span className="text-[10px] uppercase font-semibold text-white/80 flex items-center space-x-1 mt-3">
                      <ZoomIn size={12} className="text-gold-400" />
                      <span>Vergrößern</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal Carousel Component */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/95 backdrop-blur-md"
            onClick={handleCloseLightbox}
            role="dialog"
            aria-modal="true"
          >
            {/* Close trigger */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 text-white hover:text-gold-400 bg-white/5 p-2 rounded-full transition-colors z-[60]"
              aria-label="Schließen"
            >
              <X size={24} />
            </button>

            {/* Left Nav trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 bg-white/5 p-3 rounded-full transition-colors z-[60]"
              aria-label="Voriges Bild"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Lightbox Card content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-charcoal-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image Container */}
                <div className="md:col-span-8 bg-black relative flex items-center justify-center aspect-[4/5] md:aspect-auto md:max-h-[75vh]">
                  <img
                    src={currentLightboxItem.imageAfter}
                    alt={currentLightboxItem.title}
                    className="w-full h-full object-contain max-h-[75vh]"
                  />
                </div>

                {/* Details side column */}
                <div className="p-6 md:p-8 md:col-span-4 flex flex-col justify-between text-white bg-charcoal-900">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold-400 px-2.5 py-1 bg-gold-950/60 rounded border border-gold-700/30 inline-block">
                      {currentLightboxItem.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light leading-snug">
                      {currentLightboxItem.title}
                    </h3>
                    <div className="h-0.5 w-10 bg-gold-400" />
                    
                    {currentLightboxItem.description && (
                      <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                        {currentLightboxItem.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-8 border-t border-white/10 space-y-3">
                    <p className="text-[11px] text-charcoal-400">Gefällt Ihnen dieser Style? Sichern Sie sich Ihren Platz bei Almaz.</p>
                    <button
                      onClick={() => {
                        handleCloseLightbox();
                        onOpenBooking();
                      }}
                      className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold transition-colors rounded flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Calendar size={14} />
                      <span>Diesen Style anfragen</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Nav trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 bg-white/5 p-3 rounded-full transition-colors z-[60]"
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
