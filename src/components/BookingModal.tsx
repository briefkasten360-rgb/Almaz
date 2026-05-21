import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Check, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle } from 'lucide-react';
import { SALON_SERVICES, TEAM_MEMBERS } from '../data';
import Logo from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string; // Optional name to speed up step 1
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>(preselectedService || '');
  const [selectedStylist, setSelectedStylist] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    comments: '',
    agreedToPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill custom service if requested
  if (preselectedService && !selectedService && step === 1) {
    setSelectedService(preselectedService);
    setStep(2);
  }

  const timeSlots = [
    { label: 'Vormittag', slots: ['09:30', '10:15', '11:00', '11:45'] },
    { label: 'Nachmittag', slots: ['13:00', '14:15', '15:30', '16:45'] },
    { label: 'Abend', slots: ['17:30', '18:15', '19:00'] }
  ];

  // Helper mock calendar days
  const getMockDays = () => {
    const days = [];
    const weekdays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    
    // Create 7 active salon booking days ignoring Sundays (0) and Mondays (1)
    const today = new Date();
    let count = 0;
    let dayOffset = 1;

    while (count < 7) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + dayOffset);
      const dayOfWeek = nextDate.getDay();

      if (dayOfWeek !== 0 && dayOfWeek !== 1) { // Skip closed days (Sunday/Monday)
        days.push({
          raw: nextDate,
          formatted: `${weekdays[dayOfWeek]}, ${nextDate.getDate()}. ${months[nextDate.getMonth()]}`,
          dayNum: nextDate.getDate(),
          weekdayName: weekdays[dayOfWeek],
          full: nextDate.toISOString().split('T')[0]
        });
        count++;
      }
      dayOffset++;
    }
    return days;
  };

  const bookingDays = getMockDays();

  const handleNextStep = () => {
    setErrorMsg('');
    if (step === 1 && !selectedService) {
      setErrorMsg('Bitte wählen Sie zuerst eine Leistung aus.');
      return;
    }
    if (step === 2 && !selectedStylist) {
      setErrorMsg('Bitte wählen Sie eine Stylistin aus.');
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTimeSlot)) {
      setErrorMsg('Bitte wählen Sie ein Datum und eine Uhrzeit.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBackStep = () => {
    setErrorMsg('');
    setStep(prev => prev - 1);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerDetails.name || !customerDetails.phone || !customerDetails.email) {
      setErrorMsg('Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus.');
      return;
    }
    if (!customerDetails.agreedToPrivacy) {
      setErrorMsg('Bitte stimmen Sie den Datenschutzbestimmungen zu.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real booking ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5);
    }, 1500);
  };

  const resetState = () => {
    setStep(1);
    setSelectedService('');
    setSelectedStylist('');
    setSelectedDate('');
    setSelectedTimeSlot('');
    setCustomerDetails({
      name: '',
      phone: '',
      email: '',
      comments: '',
      agreedToPrivacy: false
    });
    setErrorMsg('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm" id="booking-modal-overlay">
      <div 
        className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-cream-200 text-charcoal-900 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header area */}
        <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-gold-50/50">
          <div className="flex items-center space-x-3">
            <Logo variant="icon-only" className="w-12 h-12" />
            <div>
              <h3 className="font-serif text-base font-bold text-charcoal-950 flex items-center space-x-1.5">
                <span>Premium Terminsystem</span>
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">Almaz Friseursalon Herne</p>
            </div>
          </div>
          <button
            onClick={() => {
              resetState();
              onClose();
            }}
            className="text-charcoal-400 hover:text-charcoal-900 p-1 bg-cream-100/80 rounded-full transition-colors"
            id="close-booking-modal-btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Progress indicator bar */}
        {step < 5 && (
          <div className="bg-cream-100 h-1 w-full" id="booking-progress-tracker">
            <div 
              className="bg-gold-500 h-1 transition-all duration-300" 
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Step Info Banner */}
        {step < 5 && (
          <div className="px-6 py-2 bg-cream-100/40 border-b border-cream-200 text-center text-[11px] font-semibold uppercase tracking-wider text-charcoal-500">
            Schritt {step} von 4: {
              step === 1 ? 'Gewünschte Leistung wählen' : 
              step === 2 ? 'Ihre Wunsch-Stylistin festlegen' : 
              step === 3 ? 'Termin & Uhrzeit reservieren' : 
              'Kontaktdaten eingeben'
            }
          </div>
        )}

        {/* Modal content body (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1 max-h-[60vh]">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded text-xs flex items-center space-x-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            
            {/* STEP 1: CHOOSE SERVICE */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <p className="text-xs text-charcoal-500 font-light mb-4">Bitte wählen Sie aus, welche Leistung Sie buchen möchten:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="booking-services-picker">
                  {SALON_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-4 rounded-lg border text-left cursor-pointer transition-all ${
                        selectedService === srv.name
                          ? 'border-gold-500 bg-gold-50/40 ring-1 ring-gold-400'
                          : 'border-cream-200 hover:border-gold-300 hover:bg-cream-50/40'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-bold text-charcoal-900 group-hover:text-gold-600">{srv.name}</h4>
                        <span className="text-xs text-gold-600 font-bold whitespace-nowrap ml-2">ab {srv.priceFrom} €</span>
                      </div>
                      <p className="text-[11px] text-charcoal-400 font-light mt-1.5 leading-normal shrink-0 line-clamp-2">{srv.description}</p>
                      <div className="flex items-center space-x-1 mt-3 text-[10px] text-charcoal-405 text-charcoal-400 font-mono">
                        <Clock size={11} className="text-gold-400" />
                        <span>ca. {srv.durationMin} Min.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: CHOOSE STYLIST */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <p className="text-xs text-charcoal-500 font-light mb-4">Wählen Sie Ihre bevorzugte Ansprechpartnerin:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="booking-stylist-picker">
                  {/* Egal, wer Option */}
                  <div
                    onClick={() => setSelectedStylist('Schnellster Termin')}
                    className={`p-5 rounded-xl border text-center cursor-pointer flex flex-col justify-center items-center transition-all ${
                      selectedStylist === 'Schnellster Termin'
                        ? 'border-gold-500 bg-gold-50/40 ring-1 ring-gold-400'
                        : 'border-cream-200 hover:border-gold-300 hover:bg-cream-50/40'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center text-gold-600 border border-gold-300/30 mb-3">
                      <User size={24} />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-charcoal-900">Egal, wer frei ist</h4>
                    <p className="text-[10px] text-gold-600 font-semibold mt-1">Schnellster Termin</p>
                  </div>

                  {TEAM_MEMBERS.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedStylist(t.name)}
                      className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                        selectedStylist === t.name
                          ? 'border-gold-500 bg-gold-50/40 ring-1 ring-gold-400'
                          : 'border-cream-200 hover:border-gold-300 hover:bg-cream-50/40'
                      }`}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-white shadow-md bg-cream-50"
                      />
                      <h4 className="font-serif text-sm font-bold text-charcoal-900">{t.name}</h4>
                      <p className="text-[10px] text-charcoal-400 font-light mt-0.5 line-clamp-1">{t.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME SELECTOR */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Scrollable days horizontal row */}
                <div>
                  <p className="text-xs text-charcoal-500 font-light mb-3">1. Tag auswählen:</p>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2" id="booking-days-selectors">
                    {bookingDays.map((d) => (
                      <button
                        key={d.full}
                        type="button"
                        onClick={() => setSelectedDate(d.formatted)}
                        className={`px-4 py-3 rounded-lg border text-center flex flex-col items-center justify-center shrink-0 min-w-[75px] transition-all duration-200 ${
                          selectedDate === d.formatted
                            ? 'bg-charcoal-900 text-white border-charcoal-900 font-semibold shadow'
                            : 'bg-cream-50 hover:bg-cream-105 hover:bg-cream-100 text-charcoal-700 border-cream-205 border-cream-200'
                        }`}
                      >
                        <span className="text-[10px] uppercase opacity-75">{d.weekdayName}</span>
                        <span className="text-base font-serif font-bold mt-1">{d.dayNum}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid slots picker */}
                {selectedDate && (
                  <div>
                    <p className="text-xs text-charcoal-500 font-light mb-3">2. Freie Uhrzeit wählen für {selectedDate}:</p>
                    <div className="space-y-4" id="booking-time-picker">
                      {timeSlots.map((group) => (
                        <div key={group.label} className="space-y-1.5">
                          <h5 className="text-[9px] uppercase tracking-wider font-bold text-charcoal-400">{group.label}</h5>
                          <div className="grid grid-cols-4 gap-2">
                            {group.slots.map((sl) => (
                              <button
                                key={sl}
                                type="button"
                                onClick={() => setSelectedTimeSlot(sl)}
                                className={`py-2 rounded text-xs font-semibold transition-all ${
                                  selectedTimeSlot === sl
                                    ? 'bg-gold-500 text-white font-bold scale-[1.03] shadow'
                                    : 'bg-gold-50/40 hover:bg-gold-50 text-gold-700 font-mono border border-gold-100/30'
                                }`}
                              >
                                {sl}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 4: CUSTOMER DETAILS */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-xs text-charcoal-500 font-light mb-4 text-center">Füllen Sie Ihre Angaben aus, um die Reservierung abzuschließen:</p>
                <form id="booking-client-form" className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-charcoal-650 tracking-wider">Name, Vorname *</label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Luisa Müller"
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                      className="w-full bg-cream-50 focus:bg-white border border-cream-200 rounded px-3 py-2.5 text-xs outline-none focus:border-gold-400 transition-all placeholder:text-charcoal-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold text-charcoal-650 tracking-wider">Telefonnummer *</label>
                      <input
                        type="tel"
                        required
                        placeholder="z.B. +49 176 1234567"
                        value={customerDetails.phone}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                        className="w-full bg-cream-50 focus:bg-white border border-cream-200 rounded px-3 py-2.5 text-xs outline-none focus:border-gold-400 transition-all placeholder:text-charcoal-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold text-charcoal-650 tracking-wider">E-Mail Adresse *</label>
                      <input
                        type="email"
                        required
                        placeholder="z.B. luisa@email.de"
                        value={customerDetails.email}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                        className="w-full bg-cream-50 focus:bg-white border border-cream-200 rounded px-3 py-2.5 text-xs outline-none focus:border-gold-400 transition-all placeholder:text-charcoal-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-charcoal-650 tracking-wider">Besondere Bemerkungen (optional)</label>
                    <textarea
                      placeholder="z.B. Ich habe dicke schulterlange Haare oder benötige Beratung zur Balayage-Farbe..."
                      value={customerDetails.comments}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, comments: e.target.value })}
                      rows={2}
                      className="w-full bg-cream-50 focus:bg-white border border-cream-200 rounded px-3 py-2.5 text-xs outline-none focus:border-gold-400 transition-all placeholder:text-charcoal-300 resize-none"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="modalPrivacyAgreement"
                      required
                      checked={customerDetails.agreedToPrivacy}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, agreedToPrivacy: e.target.checked })}
                      className="mt-0.5 rounded text-gold-500 border-cream-300 shrink-0 focus:ring-gold-400"
                    />
                    <label htmlFor="modalPrivacyAgreement" className="ml-2 text-[10px] text-charcoal-500 font-light leading-snug">
                      Ich stimme den Datenschutzrichtlinien zu und willige ein, dass meine Angaben zwecks Terminkoordination verarbeitet werden dürfen. *
                    </label>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 5: SUCCESS CONFIRMATION */}
            {step === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 space-y-5"
                id="booking-success-container"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <Check size={32} />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 inline-block">Reservierung Gesichert</span>
                  <h3 className="font-serif text-2xl font-light text-charcoal-900 mt-1">Ihr Premium-Termin steht!</h3>
                </div>

                {/* Recap card */}
                <div className="bg-cream-50 p-5 rounded-xl border border-cream-200 max-w-sm mx-auto space-y-3.5 text-left text-xs text-charcoal-600 shadow-inner">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={14} className="text-gold-500 font-semibold" />
                    <span><strong>Service:</strong> {selectedService}</span>
                  </div>
                  <div className="flex items-center space-x-2 border-t border-cream-200/50 pt-2.5">
                    <User size={14} className="text-gold-500 font-semibold" />
                    <span><strong>Stylistin:</strong> {selectedStylist}</span>
                  </div>
                  <div className="flex items-center space-x-2 border-t border-cream-200/50 pt-2.5">
                    <Calendar size={14} className="text-gold-500 font-semibold" />
                    <span><strong>Termin:</strong> {selectedDate}</span>
                  </div>
                  <div className="flex items-center space-x-2 border-t border-cream-200/50 pt-2.5">
                    <Clock size={14} className="text-gold-500 font-semibold" />
                    <span><strong>Uhrzeit:</strong> {selectedTimeSlot} Uhr</span>
                  </div>
                </div>

                <p className="text-xs text-charcoal-500 font-light max-w-md mx-auto leading-relaxed">
                  Wir haben eine Bestätigungs-E-Mail an Sie versandt. 
                  Sollte sich etwas ändern oder Sie absagen müssen, bitten wir Sie, uns mindestens 
                  <strong> 24 Stunden vorher</strong> Bescheid zu geben. Wir freuen uns auf Sie!
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      resetState();
                      onClose();
                    }}
                    className="bg-charcoal-900 hover:bg-gold-500 text-white font-medium text-xs uppercase tracking-widest px-8 py-3.5 rounded shadow transition-all duration-300"
                  >
                    Fertigstellen & Schließen
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Modal Bottom control buttons */}
        {step < 5 && (
          <div className="p-5 border-t border-cream-200 flex items-center justify-between bg-cream-50/50">
            {step > 1 ? (
              <button
                onClick={handleBackStep}
                className="flex items-center space-x-1.5 text-xs text-charcoal-500 hover:text-charcoal-900 font-semibold py-2"
              >
                <ArrowLeft size={16} />
                <span>Zurück</span>
              </button>
            ) : (
              <span /> // spatial placeholder
            )}

            {step < 4 ? (
              <button
                onClick={handleNextStep}
                className="bg-charcoal-900 hover:bg-gold-500 text-white font-medium text-xs uppercase tracking-widest px-6 py-2.5 rounded transition-all duration-300 flex items-center space-x-1 border border-charcoal-900 hover:border-gold-500 shadow-sm"
              >
                <span>Weiter</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleBookingSubmit}
                disabled={isSubmitting}
                className={`bg-gold-500 hover:bg-gold-600 text-white font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded transition-all flex items-center space-x-1.5 shadow-md ${
                  isSubmitting ? 'opacity-80 cursor-wait' : ''
                }`}
                id="modal-booking-final-launch"
              >
                <Send size={14} />
                <span>{isSubmitting ? 'Reserviert...' : 'Termin fest buchen'}</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
