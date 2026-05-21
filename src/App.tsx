import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import WhatsAppBubble from './components/WhatsAppBubble';
import BookingModal from './components/BookingModal';
import LegalNoticeModal from './components/LegalNoticeModal';
import PrivacyModal from './components/PrivacyModal';
import { CONTACT_INFO } from './data';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Injects proper Google-compliant SEO Structured Data in Document Head at runtime
  useEffect(() => {
    // 1. Update document Title and Meta description for regional SEO strength
    document.title = 'Almaz Friseursalon | Ihr Premium-Friseur in Herne';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Ihr Premium-Haarstudio an der Hauptstraße 206, Herne. Spezialisten für Balayage, Blond-Veredelungen & Präzisions-Haarschnitte. Sichern Sie sich jetzt online Ihren Wunschtermin!');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Ihr Premium-Haarstudio an der Hauptstraße 206, Herne. Spezialisten für Balayage, Blond-Veredelungen & Präzisions-Haarschnitte. Sichern Sie sich jetzt online Ihren Wunschtermin!';
      document.head.appendChild(newMeta);
    }

    // 2. Inject JSON-LD local business Rich Snippet markup
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'HairSalon',
      'name': 'Almaz Friseursalon',
      'image': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      '@id': 'https://almaz-friseursalon.de/#salon',
      'url': 'https://almaz-friseursalon.de',
      'telephone': CONTACT_INFO.phoneFormatted,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': CONTACT_INFO.address,
        'addressLocality': 'Herne',
        'postalCode': '44649',
        'addressCountry': 'DE'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 51.5386,
        'longitude': 7.2272
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '09:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Friday',
          'opens': '10:00',
          'closes': '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '09:00',
          'closes': '16:30'
        }
      ],
      'sameAs': [
        CONTACT_INFO.instagram,
        CONTACT_INFO.tiktok
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '247'
      }
    };

    const scriptId = 'salon-seo-jsonld';
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.setAttribute('type', 'application/ld+json');
      scriptEl.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    // Cleanup when component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Opens booking modal and forces pre-selected treatment title
  const handleOpenBookingWithService = (serviceName: string) => {
    setPrefilledService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setPrefilledService('');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 font-sans selection:bg-gold-200 selection:text-charcoal-900 pb-20 md:pb-0" id="salon-app-root">
      
      {/* 1. Transparent/Sticky Header Navigation bar */}
      <Header onOpenBooking={handleOpenGeneralBooking} />

      {/* 2. Structured Sections layout */}
      <main>
        {/* Section A: Hero Area */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Section B: Experience Trust statistics indicator Bar */}
        <TrustBar />

        {/* Section C: Hair Treatments list & selection */}
        <Services onSelectService={handleOpenBookingWithService} />

        {/* Section D: Before After drag slider */}
        <BeforeAfter />

        {/* Section E: Modern price brochure table catalog */}
        <Pricing onOpenBooking={handleOpenGeneralBooking} />

        {/* Section F: Works Photo Gallery Masonry grid + Lightbox */}
        <Gallery onOpenBooking={handleOpenGeneralBooking} />

        {/* Section G: Story & Team Member highlights */}
        <AboutUs />

        {/* Section H: Google reviews widget and verified testaments */}
        <Reviews />

        {/* Section I: Opening timing schedule details & Contact Form */}
        <Contact />
      </main>

      {/* 3. Footer info panel */}
      <Footer 
        onOpenBooking={handleOpenGeneralBooking}
        onOpenImprint={() => setIsImprintOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* 4. Instant Sticky Converters on mobile touch viewport */}
      <MobileCTA onOpenBooking={handleOpenGeneralBooking} />

      {/* 5. Floating WhatsApp conversation dot */}
      <WhatsAppBubble />

      {/* 6. Step-by-Step interactive appointments planner wizard */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={prefilledService}
      />

      {/* 7. Regulatory Imprint / Impressum drawer and dialog */}
      <LegalNoticeModal 
        isOpen={isImprintOpen} 
        onClose={() => setIsImprintOpen(false)} 
      />

      {/* 8. Regulatory EU GDPR Privacy rules dialog */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />

    </div>
  );
}
