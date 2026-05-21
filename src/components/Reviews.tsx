import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, MessageSquare, Plus, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Reviews() {
  const [filterRating, setFilterRating] = useState<'all' | 'verified'>('all');

  // Interactive review list filter
  const displayedReviews = filterRating === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(r => r.source === 'google');

  // Google Rating Progress bar details
  const ratingDetails = [
    { stars: 5, pct: 96 },
    { stars: 4, pct: 4 },
    { stars: 3, pct: 0 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">Ausgezeichnete Zufriedenheit</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
            Was unsere Kunden sagen
          </h2>
          <div className="h-0.5 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm text-charcoal-400 font-light mt-4">
            Das Vertrauen und die Freude unserer Kundinnen und Kunden ist das Fundament unserer täglichen Hingabe. 
            Lesen Sie echte, verifizierte Rezensionen.
          </p>
        </div>

        {/* Google Style Ratings Summary Widget */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gold-50/50 rounded-2xl p-6 sm:p-10 border border-gold-100/40 mb-12" id="reviews-dashboard">
          
          {/* Main Average Score */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-6xl font-extrabold font-serif text-charcoal-900">4.9</h3>
            <div className="flex text-amber-500 my-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-xs text-charcoal-500 uppercase tracking-widest font-semibold">247 Google Bewertungen</p>
            <span className="text-[10px] text-emerald-600 font-semibold mt-1 bg-emerald-50 px-2 py-0.5 rounded flex items-center space-x-1">
              <ShieldCheck size={12} />
              <span>Verifizierter Salon</span>
            </span>
          </div>

          {/* Rating meters */}
          <div className="md:col-span-5 space-y-2">
            {ratingDetails.map((item) => (
              <div key={item.stars} className="flex items-center space-x-3">
                <span className="text-xs font-semibold text-charcoal-600 font-mono w-3">{item.stars}</span>
                <Star size={11} className="text-amber-500 shrink-0" fill="currentColor" stroke="none" />
                <div className="flex-1 bg-cream-200 h-2 rounded overflow-hidden">
                  <div className="bg-amber-500 h-full rounded" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-xs font-medium text-charcoal-405 text-charcoal-400 font-mono w-8 text-right">{item.pct}%</span>
              </div>
            ))}
          </div>

          {/* Call to Review CTA card */}
          <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-cream-200/80 pt-6 md:pt-0 pl-0 md:pl-8 text-center md:text-left flex flex-col justify-center h-full">
            <h4 className="font-serif text-base font-medium text-charcoal-900 mb-1">Ihr Feedback zählt</h4>
            <p className="text-xs text-charcoal-405 text-charcoal-400 font-light mb-4">Waren Sie bereits bei uns zu Gast? Bewerten Sie uns auf Google.</p>
            <a
              href="https://g.page/r/your-google-review-placeholder/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold bg-white text-charcoal-900 hover:bg-gold-50 px-4 py-2.5 rounded border border-cream-205 border-cream-300 transition-colors shadow-sm"
              id="google-review-intent"
            >
              <Plus size={14} className="text-gold-500" />
              <span>Bewertung schreiben</span>
            </a>
          </div>

        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-between items-center mb-8 pb-3 border-b border-cream-100" id="reviews-toolbar">
          <p className="text-xs text-charcoal-500 font-medium">Zeige verifizierte Rezensionen</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                filterRating === 'all'
                  ? 'bg-charcoal-900 text-white'
                  : 'bg-cream-100 text-charcoal-500 hover:bg-cream-200'
              }`}
            >
              Alle
            </button>
            <button
              onClick={() => setFilterRating('verified')}
              className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                filterRating === 'verified'
                  ? 'bg-charcoal-900 text-white'
                  : 'bg-cream-100 text-charcoal-500 hover:bg-cream-200'
              }`}
            >
              Google Reviews
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-cards">
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((testimonial, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={testimonial.id}
                className="bg-cream-50/40 rounded-xl p-6 border border-cream-100 shadow-sm relative hover:border-gold-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card head: verified star score */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full object-cover border border-gold-200"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-sm">
                          {testimonial.author[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal-950">{testimonial.author}</h4>
                        <span className="text-[9px] text-charcoal-400 font-mono">{testimonial.date}</span>
                      </div>
                    </div>

                    <div className="flex text-amber-500">
                      {[...Array(testimonial.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={12} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xs text-charcoal-500 font-light leading-relaxed italic mb-4">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Received Service indicators */}
                {testimonial.serviceReceived && (
                  <div className="pt-3 border-t border-cream-100/60 flex items-center justify-between">
                    <span className="text-[10px] text-gold-700 font-semibold bg-gold-50 px-2.5 py-0.5 rounded flex items-center space-x-1 border border-gold-100/50">
                      <CheckCircle2 size={10} />
                      <span>{testimonial.serviceReceived}</span>
                    </span>
                    <span className="text-[10px] text-charcoal-400 flex items-center space-x-1 uppercase font-mono tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                      <span>Google verifiziert</span>
                    </span>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
