import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';
import { CONTACT_INFO, OPENING_HOURS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'balayage',
    datePreference: '',
    message: '',
    privacyAccepted: false,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.privacyAccepted) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    
    // Simulate real high-performing API request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'balayage',
        datePreference: '',
        message: '',
        privacyAccepted: false,
      });
    }, 1200);
  };

  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    const formattedNum = (CONTACT_INFO.whatsappFormatted || '').replace('+', '');
    window.open(`https://wa.me/${formattedNum || '4915257619814'}?text=${encodedMessage}`, '_blank', 'noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-cream-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Opening timings and Address details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-left">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2 block">Kontakt & Anfahrt</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
                Besuchen Sie <br />
                <span className="italic font-normal text-gold-500">unser Wohlfühl-Studio</span>
              </h2>
              <div className="h-0.5 w-16 bg-gold-400 mt-4" />
            </div>

            {/* Direct contact info cards */}
            <div className="space-y-4 bg-white p-6 rounded-xl border border-cream-105 border-cream-200 shadow-sm">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-gold-50 text-gold-600 rounded">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal-950">Salon Adresse</h4>
                  <p className="text-xs text-charcoal-500 font-light mt-0.5">{CONTACT_INFO.address}</p>
                  <p className="text-xs text-charcoal-500 font-light">{CONTACT_INFO.zipCity}</p>
                  <a
                    href={CONTACT_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[10px] text-gold-600 font-semibold uppercase tracking-widest mt-2 hover:text-gold-700 transition-colors"
                  >
                    <Navigation size={10} />
                    <span>In Google Maps öffnen</span>
                  </a>
                </div>
              </div>

              <div className="h-px bg-cream-100/60" />

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-gold-50 text-gold-600 rounded">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal-950">Telefonische Buchung</h4>
                  <a
                    href={`tel:${CONTACT_INFO.phoneFormatted}`}
                    className="text-xs text-charcoal-500 hover:text-gold-600 font-light mt-0.5 block transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-[10px] text-charcoal-400 font-light mt-0.5">Dienstag bis Samstag direkt erreichbar.</p>
                </div>
              </div>

              <div className="h-px bg-cream-100/60" />

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-gold-50 text-gold-600 rounded">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal-950">E-Mail Kontakt</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs text-charcoal-500 hover:text-gold-600 font-light mt-0.5 block transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening timings details */}
            <div className="bg-white p-6 rounded-xl border border-cream-200 shadow-sm">
              <div className="flex items-center space-x-2.5 mb-4">
                <Clock className="text-gold-500" size={18} />
                <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal-950">Öffnungszeiten</h4>
              </div>
              <div className="space-y-2.5">
                {OPENING_HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-600 font-medium">{item.day}</span>
                    <span className={`font-light font-mono ${item.isClosed ? 'text-charcoal-400 font-sans italic bg-cream-100/80 px-2 py-0.5 rounded' : 'text-charcoal-500'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic structured form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-cream-200 shadow-xl relative overflow-hidden" id="contact-form-card">
            <h3 className="font-serif text-xl sm:text-2xl font-light text-charcoal-950 mb-2">
              Terminanfrage online senden
            </h3>
            <p className="text-xs text-charcoal-500 font-light mb-8">
              Senden Sie uns unkompliziert Ihren Terminwunsch. Wir prüfen freie Slots und melden uns umgehend zur Bestätigung.
            </p>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center text-charcoal-800 space-y-4 my-8"
                  id="form-success-banner"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Anfrage erfolgreich übermittelt!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed font-light max-w-sm mx-auto">
                    Vielen Dank für Ihre Terminanfrage. Wir prüfen die Kapazitäten für Ihren Wunschtermin und melden uns 
                    <strong> innerhalb von 30 Minuten</strong> telefonisch oder per E-Mail bei Ihnen.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-xs uppercase tracking-widest font-semibold bg-emerald-100 hover:bg-emerald-200 text-emerald-850 px-6 py-2 rounded transition-colors"
                    >
                      Neue Anfrage senden
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="appointment-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5">Ihr vollständiger Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="z.B. Luisa Müller"
                        className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all placeholder:text-charcoal-350"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5 font-sans">Ihre Telefonnummer *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="z.B. +49 176 1234567"
                        className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all placeholder:text-charcoal-350"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5">Ihre E-Mail-Adresse *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="z.B. luisa@email.de"
                        className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all placeholder:text-charcoal-350"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5">Gewünschte Leistung *</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all"
                      >
                        <option value="balayage">Balayage & Coloration (ab 189 €)</option>
                        <option value="cut">Damenhaarschnitt & Styling (ab 79 €)</option>
                        <option value="styling">Premium Blow Dry / Finish (ab 49 €)</option>
                        <option value="keratin">Keratin-Glättung (ab 220 €)</option>
                        <option value="herren">Herren Premium Haarschnitt (ab 45 €)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="datePreference" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5">Terminwunsch (Datum & Zeitvorstellung) *</label>
                    <input
                      type="text"
                      name="datePreference"
                      id="datePreference"
                      required
                      value={formData.datePreference}
                      onChange={handleInputChange}
                      placeholder="z.B. Freitagvormittag oder Samstag, 12.06. um 14:00 Uhr"
                      className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all placeholder:text-charcoal-350"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-600 mb-1.5">Besondere Haarwünsche oder Bemerkungen</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="..."
                      className="w-full bg-cream-50 focus:bg-white px-4 py-3 rounded text-xs border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-300 outline-none transition-all resize-none placeholder:text-charcoal-350"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      id="privacyAccepted"
                      required
                      checked={formData.privacyAccepted}
                      onChange={handleCheckboxChange}
                      className="mt-0.5 rounded text-gold-500 focus:ring-gold-400 border-cream-300 shrink-0"
                    />
                    <label htmlFor="privacyAccepted" className="ml-2.5 text-[10px] text-charcoal-400 font-light leading-snug">
                      Ich stimme zu, dass meine Daten für die Bearbeitung dieser Terminanfrage gespeichert werden. 
                      Weitere Infos in unserer <span className="underline cursor-pointer text-gold-600">Datenschutzerklärung</span>. *
                    </label>
                  </div>

                  {formStatus === 'error' && (
                    <div className="text-xs text-red-600 bg-red-50 p-3 rounded font-medium border border-red-200">
                      Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus und akzeptieren Sie die Datenschutzhinweise.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full py-4 bg-charcoal-900 text-white hover:bg-gold-500 rounded text-xs uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                      formStatus === 'loading' ? 'opacity-80 cursor-wait' : ''
                    }`}
                    id="submit-contact-button"
                  >
                    {formStatus === 'loading' ? (
                      <span>Wird gesendet...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Terminanfrage unverbindlich senden</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-charcoal-400">Bevorzugen Sie eine schnelle Antwort?</span>
              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2.5 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                id="contact-whatsapp-quick"
              >
                <MessageSquare size={14} />
                <span>Direkt per WhatsApp anfragen</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
