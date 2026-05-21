import { Calendar, Phone, Mail, Instagram, Facebook, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import Logo from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenImprint: () => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenBooking, onOpenImprint, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-charcoal-900 text-charcoal-400 font-light" id="main-footer-container">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Editorial Salon brand summary */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex justify-start">
              <Logo variant="full" lightMode={true} className="max-w-[170px] !items-start !text-left p-0" />
            </div>
            
            <p className="text-xs text-charcoal-350 leading-relaxed max-w-sm">
              Ihr exklusiver Salon für kunstvolle Signature Balayage, 
              präzise Damen- & Herrenschnitte sowie tiefenwirksame Pflege-Behandlungen. 
              Erleben Sie absolute Perfektion in unserem Salon in Herne.
            </p>

            <div className="flex space-x-3 pt-2" id="footer-social-icons">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Instagram Profil besuchen"
              >
                <Instagram size={14} />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Facebook Seite beitreten"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Location Anchor points */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white border-b border-white/5 pb-2">Standort & Kontakt</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-center space-x-2">
                <span className="text-gold-400">📍</span>
                <span>{CONTACT_INFO.address}, {CONTACT_INFO.zipCity}</span>
              </p>
              <a href={`tel:${CONTACT_INFO.phoneFormatted}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-gold-400">📞</span>
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <span className="text-gold-400">✉️</span>
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quicklinks Booking drive */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white border-b border-white/5 pb-2">Sofort-Buchung</h4>
            <p className="text-xs text-charcoal-350">
              Sichern Sie sich schnell und einfach Ihren Wunschtermin online oder rufen Sie uns direkt an.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-white hover:text-white text-xs uppercase tracking-widest font-bold rounded shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              id="footer-booking-action-trigger"
            >
              <Calendar size={13} />
              <span>Termin Online Reservieren</span>
            </button>
          </div>

        </div>
      </div>

      {/* Lower Copyright & Regulatory disclosures footer section */}
      <div className="bg-charcoal-950/80 border-t border-white/5 py-6 text-center text-[11px]" id="footer-bottom-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 font-sans">
            &copy; {new Date().getFullYear()} Almaz Friseursalon. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onOpenImprint}
              className="text-charcoal-400 hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-semibold"
            >
              Impressum
            </button>
            <span className="text-charcoal-700">|</span>
            <button
              onClick={onOpenPrivacy}
              className="text-charcoal-400 hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-semibold"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
