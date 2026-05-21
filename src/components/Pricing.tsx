import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Percent, Sparkles, Scissors, Info } from 'lucide-react';

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  // exact pricing from the flyer image
  const flyerServices = [
    { 
      name: 'Trockenhaarschnitt', 
      short: '18 €', 
      medium: '20 €', 
      long: '25 €', 
      desc: 'Präziser Trockenhaarschnitt für eine frische Kontur und perfekten Sitz.' 
    },
    { 
      name: 'Waschen - Fönen o. Legen', 
      short: '23 €', 
      medium: '28 €', 
      long: '32 €', 
      desc: 'Haarschonende Wäsche mit Premium-Shampoo inklusive Föhnen oder klassischem Eindrehen (Legen).' 
    },
    { 
      name: 'Waschen - Schneiden - Fönen', 
      short: '30 €', 
      medium: '35 €', 
      long: '40 €', 
      desc: 'Das klassische Rundum-Verwöhnprogramm für Schnitt, Form und professionelles Volumen.' 
    },
    { 
      name: 'Ansatz', 
      short: '25 €', 
      medium: '35 €', 
      long: '40 €', 
      desc: 'Perfekte Abdeckung des Haaransatzes mit schonender, hochintensiver Coloration.' 
    },
    { 
      name: 'Komplett Färben', 
      short: '30 €', 
      medium: '45 €', 
      long: '55 €', 
      desc: 'Vollständige Farbveränderung oder Farbauffrischung vom Ansatz bis in die Spitzen.' 
    },
    { 
      name: 'Strähnen', 
      short: '60 €', 
      medium: '75 €', 
      long: '100 €', 
      desc: 'Mehrdimensionale Licht-Reflexe und lebendige Farbspiele nach Maß angepasst.' 
    },
    { 
      name: 'Balayage', 
      single: 'ab 120 €',
      desc: 'Signature Balayage-Technik für natürliche, fließende und sonnengeküsste Blondverläufe.' 
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5dbbe_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">Originale Preisliste</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
            Tarife & Leistungen
          </h2>
          <div className="h-0.5 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-sm text-charcoal-600 font-light mt-4">
            Direkt entnommen aus unserem aktuellen Salon-Flyer. Wir bieten transparente und faire Preise, 
            gestaffelt nach Haarlänge (<span className="font-semibold text-charcoal-800">Kurz, Mittel, Lang</span>).
          </p>
        </div>

        {/* Replicated Flyer Visual Frame */}
        <div className="bg-charcoal-950 text-white rounded-3xl shadow-2xl p-6 sm:p-12 border-2 border-gold-400/30 relative overflow-hidden max-w-4xl mx-auto">
          {/* Subtle Golden gradient glowing dots like the flyer */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Flyer Top Header Concept */}
          <div className="flex flex-col items-center mb-10 pb-8 border-b border-gold-400/20 text-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-gold-400">
              {/* Queen silhouette concept representation with svg */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <path d="M50 15 L58 35 L78 35 L62 47 L68 67 L50 55 L32 67 L38 47 L22 35 L42 35 Z" />
                <path d="M50 45 C40 45 35 55 35 65 C35 75 42 80 50 80 C58 80 65 75 65 65 C65 55 60 45 50 45 Z M50 72 C46 72 43 69 43 65 C43 61 46 58 50 58 C54 58 57 61 57 65 C57 69 54 72 50 72 Z" opacity="0.8" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-gold-300 font-semibold uppercase">Almaz</h3>
            <p className="text-xs tracking-[0.4em] font-light text-cream-200/60 uppercase mt-1">Haarstudio & Friseursalon</p>
            <div className="flex items-center space-x-1.5 mt-6 px-4 py-1.5 bg-gold-400/10 border border-gold-400/25 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gold-300 font-bold font-sans">ORIGINAL FLYER-PREISE</span>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto" id="flyer-pricing-table">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold-400/20 text-[10px] sm:text-xs uppercase tracking-widest text-gold-300 font-bold">
                  <th className="py-4 pb-3 pl-2 sm:pl-4 font-normal text-cream-100">Dienstleistung</th>
                  <th className="py-4 pb-3 text-center font-normal w-20 sm:w-24">Kurz</th>
                  <th className="py-4 pb-3 text-center font-normal w-20 sm:w-24">Mittel</th>
                  <th className="py-4 pb-3 text-center font-normal w-20 sm:w-24">Lang / Ab</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold-400/10">
                {flyerServices.map((service, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 pl-2 sm:pl-4 pr-4">
                      <div className="font-serif text-sm sm:text-base font-semibold text-white tracking-wide group-hover:text-gold-300 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-[11px] text-cream-100/60 font-light mt-0.5 leading-relaxed max-w-lg hidden sm:block">
                        {service.desc}
                      </div>
                    </td>
                    
                    {service.single ? (
                      <td colSpan={3} className="py-4 text-center font-sans">
                        <span className="inline-block px-4 py-1.5 bg-gold-500/15 border border-gold-400/30 text-gold-300 font-bold text-sm sm:text-base rounded-lg tracking-wider">
                          {service.single}
                        </span>
                      </td>
                    ) : (
                      <>
                        <td className="py-4 text-center font-sans text-sm sm:text-base text-cream-100 font-semibold group-hover:text-white transition-colors">
                          {service.short}
                        </td>
                        <td className="py-4 text-center font-sans text-sm sm:text-base text-cream-100 font-semibold group-hover:text-white transition-colors">
                          {service.medium}
                        </td>
                        <td className="py-4 text-center font-sans text-sm sm:text-base text-gold-400 font-bold group-hover:text-gold-300 transition-colors">
                          {service.long}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Info & Notes from flyer */}
          <div className="mt-10 pt-8 border-t border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-3 text-[11px] text-cream-100/70 font-light max-w-xl">
              <Info size={16} className="text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Längen-Definition:</span> Kurz (bis Ohrläppchen), Mittel (bis Schulter), Lang (über Schulter). 
                Alle Colorationen und Spezialbehandlungen richten sich nach tatsächlichem Material- und Zeitaufwand.
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full md:w-auto bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all duration-300 shrink-0"
              id="flyer-booking-button"
            >
              Termin Buchen
            </button>
          </div>
        </div>

        {/* Outer Trust Indicator */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-white border border-cream-200 rounded-2xl p-6 shadow-sm">
          <p className="text-xs text-charcoal-500 flex items-center justify-center gap-2">
            <Percent size={14} className="text-gold-500 shrink-0" />
            <span>Du möchtest deinen Wunschservice reservieren? Wähle deinen Service einfach im Buchungsformular aus.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
