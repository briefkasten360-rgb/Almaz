import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface MobileCTAProps {
  onOpenBooking: () => void;
}

export default function MobileCTA({ onOpenBooking }: MobileCTAProps) {
  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    const formattedNum = (CONTACT_INFO.whatsappFormatted || '').replace('+', '');
    window.open(`https://wa.me/${formattedNum || '4915257619814'}?text=${encodedMessage}`, '_blank', 'noreferrer');
  };

  return (
    <div
      id="mobile-sticky-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur shadow-[0_-8px_24px_rgba(0,0,0,0.06)] border-t border-cream-200/80 px-4 py-3.5 flex items-center justify-between gap-3"
    >
      {/* Phone Link block */}
      <a
        href={`tel:${CONTACT_INFO.phoneFormatted}`}
        className="flex-1 bg-cream-100/60 hover:bg-cream-200 text-charcoal-800 text-center py-3 rounded text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center space-x-1.5 transition-colors"
      >
        <Phone size={14} className="text-gold-500" />
        <span>Anrufen</span>
      </a>

      {/* WhatsApp Link block */}
      <button
        onClick={handleWhatsAppChat}
        className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 text-center py-3 rounded text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center space-x-1.5 transition-colors"
      >
        <MessageSquare size={14} />
        <span>WhatsApp</span>
      </button>

      {/* Primary Action Button */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.5] bg-gold-500 hover:bg-gold-600 text-white text-center py-3 rounded text-[10px] uppercase tracking-widest font-bold flex items-center justify-center space-x-1.5 shadow"
        id="mobile-sticky-action-booking-btn"
      >
        <Calendar size={14} />
        <span>Buchen</span>
      </button>
    </div>
  );
}
