import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function WhatsAppBubble() {
  const handleWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    const formattedNum = (CONTACT_INFO.whatsappFormatted || '').replace('+', '');
    window.open(`https://wa.me/${formattedNum || '4915257619814'}?text=${encodedMessage}`, '_blank', 'noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      id="floating-whatsapp-bubble"
      className="fixed bottom-22 md:bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3.5 shadow-2xl hover:scale-105 active:scale-95 transition-all group flex items-center justify-center cursor-pointer border border-emerald-400"
      aria-label="WhatsApp Beratung chatten"
    >
      {/* Dynamic blink notification badge */}
      <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      </span>
      <MessageSquare size={22} className="group-hover:rotate-6 transition-transform" />
    </button>
  );
}
