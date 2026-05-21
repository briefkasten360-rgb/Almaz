import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Euro, Sparkles, CheckCircle2 } from 'lucide-react';
import { SALON_SERVICES } from '../data';
import { ServiceCategory, SalonService } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'alle'>('alle');

  const categories: { label: string; value: ServiceCategory | 'alle' }[] = [
    { label: 'Alle Angebote', value: 'alle' },
    { label: 'Damen Schnitte', value: 'damen' },
    { label: 'Balayage & Farbe', value: 'farbe' },
    { label: 'Herren Treatments', value: 'herren' },
    { label: 'Styling & Specials', value: 'styling' },
    { label: 'Intensiv-Pflege', value: 'pflege' },
  ];

  const filteredServices = activeCategory === 'alle'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-cream-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">Meisterliches Handwerk</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
            Exklusive Leistungen für <br />
            <span className="italic font-normal text-gold-500">Ihren glanzvollen Auftritt</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm text-charcoal-400 font-light mt-4">
            Jede Haarstruktur ist einzigartig. Bei Almaz Haarstudio nehmen wir uns viel Zeit für eine ausführliche, 
            typgerechte Beratung und formvollendete Umsetzung auf höchstem handwerklichen Niveau.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="service-tabs">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2.5 rounded text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
                activeCategory === cat.value
                  ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-md'
                  : 'bg-white text-charcoal-500 border-cream-200 hover:text-charcoal-900 hover:border-gold-300 hover:bg-gold-50/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Services Cards Grid & Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: SalonService) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={service.id}
                className={`bg-white rounded-lg overflow-hidden border transition-all duration-300 relative flex flex-col h-full hover:shadow-xl group ${
                  service.popular ? 'border-gold-300 ring-1 ring-gold-200/50' : 'border-cream-100'
                }`}
              >
                {/* Popularity Badge Overlay */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gold-500 rounded text-[9px] uppercase tracking-wider font-bold text-white shadow-md flex items-center space-x-1">
                    <Sparkles size={10} />
                    <span>Beliebt</span>
                  </div>
                )}

                {/* Service Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-40" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal-950 mb-2 group-hover:text-gold-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-xs text-charcoal-500 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing and Timing Specs */}
                  <div className="pt-4 border-t border-cream-100 mt-auto">
                    <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium mb-4">
                      <div className="flex items-center space-x-1.5 bg-cream-50 px-2.5 py-1 rounded">
                        <Clock size={13} className="text-gold-500" />
                        <span>ca. {service.durationMin} Min.</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-gold-50 text-gold-700 px-2.5 py-1 rounded border border-gold-100">
                        <Euro size={13} />
                        <span className="font-semibold">ab {service.priceFrom} €</span>
                      </div>
                    </div>

                    {/* Book / Request Action button */}
                    <button
                      onClick={() => onSelectService(service.name)}
                      className="w-full py-2.5 bg-cream-100/80 hover:bg-charcoal-900 text-charcoal-800 hover:text-white rounded text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <CheckCircle2 size={13} className="opacity-70" />
                      <span>Termin buchen</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
