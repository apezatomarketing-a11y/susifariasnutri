import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-secondary to-secondary/80 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow will-change-transform hover:scale-110 md:bottom-12 md:right-12"
        title="Enviar mensagem via WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Scroll to Top Button - Bottom Left */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-8 left-8 z-40 px-4 py-3 bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in will-change-transform hover:scale-105 flex items-center gap-2 md:bottom-12 md:left-12"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
          <span className="text-sm font-medium hidden sm:inline">Topo</span>
        </button>
      )}
    </>
  );
}
