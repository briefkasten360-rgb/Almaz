import { X, Scale } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalNoticeModal({ isOpen, onClose }: LegalNoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-sm" id="imprint-modal-overlay">
      <div 
        className="bg-white max-w-xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 border border-cream-200 text-charcoal-950 flex flex-col max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-cream-200 mb-6">
          <div className="flex items-center space-x-2.5">
            <Scale className="text-gold-500" size={18} />
            <h3 className="font-serif text-lg font-bold">Impressum</h3>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-400 hover:text-charcoal-900 p-1 bg-cream-100 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable text details of the Imprint */}
        <div className="overflow-y-auto text-xs space-y-5 flex-1 pr-2 text-charcoal-600 font-light leading-relaxed">
          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Angaben gemäß § 5 TMG</h4>
            <p className="font-semibold text-charcoal-800">Almaz Friseursalon e.K.</p>
            <p>{CONTACT_INFO.address}</p>
            <p>{CONTACT_INFO.zipCity}</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Vertretung</h4>
            <p>Vertreten durch den Inhaber und Geschäftsführer: <strong>Khalil Al-Sayed</strong></p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Kontaktkanäle</h4>
            <p>Telefon: {CONTACT_INFO.phone}</p>
            <p>E-Mail: {CONTACT_INFO.email}</p>
            <p>Webseite: www.almaz-friseursalon.de</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Registereintrag</h4>
            <p>Eintragung im Handelsregister.</p>
            <p>Registergericht: Amtsgericht Bochum</p>
            <p>Registernummer: HRA 987654</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Umsatzsteuer-ID</h4>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="font-semibold">DE 321 654 987</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Aufsichtsbehörde</h4>
            <p>Handwerkskammer Dortmund, Ardeystraße 93, 44139 Dortmund</p>
            <p>Berufsbezeichnung: Friseurmeisterin (verliehen in der Bundesrepublik Deutschland)</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">Verbraucherstreitbeilegung</h4>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline ml-1">https://ec.europa.eu/consumers/odr</a>.
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-cream-200 mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-charcoal-950 hover:bg-gold-500 text-white text-[10px] uppercase tracking-widest font-bold rounded transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
