import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-sm" id="privacy-modal-overlay">
      <div 
        className="bg-white max-w-xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 border border-cream-200 text-charcoal-950 flex flex-col max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-cream-200 mb-6">
          <div className="flex items-center space-x-2.5">
            <Shield className="text-gold-500" size={18} />
            <h3 className="font-serif text-lg font-bold">Datenschutz</h3>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-400 hover:text-charcoal-900 p-1 bg-cream-100 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable text details of the GDPR Policy */}
        <div className="overflow-y-auto text-xs space-y-5 flex-1 pr-2 text-charcoal-600 font-light leading-relaxed">
          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">1. Datenschutz auf einen Blick</h4>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">2. Datenerfassung auf dieser Website</h4>
            <p className="font-semibold text-charcoal-800">Verantwortliche Stelle:</p>
            <p>
              Almaz Friseursalon e.K. <br />
              Hauptstraße 206, 44649 Herne <br />
              E-Mail: info@almaz-friseursalon.de
            </p>
            <p className="mt-2 text-charcoal-800 font-semibold">Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei handelt es sich 
              z. B. um Daten, die Sie in unser Kontaktformular oder in den Termin-Bucher eingeben (Name, E-Mail, Telefonnummer).
            </p>
            <p className="mt-2 text-charcoal-800 font-semibold">Wofür nutzen wir Ihre Daten?</p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Die von Ihnen eingegebenen Daten im Buchungsformular werden ausschließlich zur Vereinbarung, Koordination 
              und Durchführung von Friseurleistungen in unserem Salon verwendet.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">3. Ihre gesetzlichen Rechte</h4>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
            <p className="mt-1">
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">4. SSL- bzw. TLS-Verschlüsselung</h4>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie 
              zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. 
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt 
              und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal-950 uppercase tracking-wider text-[10px] mb-2">5. Cookies & Tracking</h4>
            <p>
              Unsere Website arbeitet offline-first und respektiert Ihre Privatsphäre. Wir setzen keine unnötigen 
              Werbe- oder Tracking-Cookies von Google Analytics oder Meta Pixel ein, um Ihr Surfverhalten zu überwachen. 
              Sämtliche etwaigen Sitzungs-Parameter dienen rein dem reibungsfreien Ablauf des Systems.
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
