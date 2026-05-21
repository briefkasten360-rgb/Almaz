import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import Logo from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection based on section offset
      const sections = ['home', 'services', 'pricing', 'gallery', 'about', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Start', href: '#home', id: 'home' },
    { label: 'Leistungen', href: '#services', id: 'services' },
    { label: 'Preise', href: '#pricing', id: 'pricing' },
    { label: 'Galerie', href: '#gallery', id: 'gallery' },
    { label: 'Über uns', href: '#about', id: 'about' },
    { label: 'Bewertungen', href: '#reviews', id: 'reviews' },
    { label: 'Kontakt', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect py-3 shadow-sm border-b border-cream-200'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center group"
            id="logo-brand"
          >
            <Logo variant="compact" />
          </a>

          {/* Desktop Navigation Link items */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8" id="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-200 relative py-1 ${
                  activeTab === item.id
                    ? 'text-gold-600'
                    : 'text-charcoal-400 hover:text-charcoal-900'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 origin-bottom" />
                )}
              </a>
            ))}
          </nav>

          {/* Conversion CTA Group */}
          <div className="hidden lg:flex items-center space-x-4" id="cta-desktop-group">
            <a
              href={`tel:${CONTACT_INFO.phoneFormatted}`}
              className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-charcoal-500 hover:text-gold-500 transition-colors"
            >
              <Phone size={14} className="text-gold-500" />
              <span>Anrufen</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-charcoal-900 hover:bg-gold-600 text-white hover:text-white px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded shadow-md hover:shadow-lg flex items-center space-x-2 border border-charcoal-900 hover:border-gold-600"
              id="header-booking-btn"
            >
              <Calendar size={14} />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile menu and core booking action for smaller devices */}
          <div className="flex md:hidden items-center space-x-3" id="mobile-controls">
            <button
              onClick={onOpenBooking}
              className="bg-gold-500 text-white px-3 py-1.5 text-[0.7rem] uppercase tracking-wider font-semibold rounded flex items-center space-x-1 shadow"
              id="header-booking-btn-mobile"
            >
              <Calendar size={12} />
              <span>Buchen</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-900 p-1 bg-cream-100 hover:bg-cream-200 rounded transition-colors"
              aria-label="Menü öffnen"
              id="hamburger-menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-canvas Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream-50 border-b border-cream-200 shadow-xl overflow-hidden animate-none z-50 transition-all duration-300">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block px-3 py-2 text-sm uppercase tracking-widest font-medium rounded transition-all ${
                  activeTab === item.id
                    ? 'bg-gold-50 text-gold-600 border-l-2 border-gold-400 font-semibold'
                    : 'text-charcoal-500 hover:bg-cream-100 hover:text-charcoal-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-cream-200 flex flex-col space-y-3 px-3">
              <a
                href={`tel:${CONTACT_INFO.phoneFormatted}`}
                className="flex items-center justify-center space-x-2 bg-cream-100 p-2.5 rounded text-sm text-charcoal-800 font-medium hover:bg-cream-200 transition-colors"
              >
                <Phone size={16} className="text-gold-500" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center space-x-2 bg-charcoal-900 text-white p-2.5 rounded text-sm uppercase tracking-widest font-semibold transition-colors hover:bg-gold-500"
              >
                <Calendar size={16} />
                <span>Premium-Termin anfragen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
