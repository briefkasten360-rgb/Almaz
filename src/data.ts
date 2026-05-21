import { SalonService, GalleryItem, Testimonial, TeamMember, DaySchedule } from './types';

export const CONTACT_INFO = {
  phone: '02325 96 41 609',
  phoneFormatted: '+4923259641609',
  whatsapp: '01525 76 19 814',
  whatsappFormatted: '+4915257619814',
  whatsappMessage: 'Hallo Almaz Friseursalon, ich würde gerne einen Termin vereinbaren.',
  email: 'info@almaz-friseursalon.de',
  address: 'Hauptstraße 206',
  zipCity: '44649 Herne',
  instagram: 'https://instagram.com/almaz.friseursalon',
  facebook: 'https://facebook.com/almaz.friseursalon',
  tiktok: 'https://www.tiktok.com/@almaz.friseursalon',
  mapsLink: 'https://maps.google.com/?q=Almaz+Friseursalon+Hauptstrasse+206+Herne',
};

export const OPENING_HOURS: DaySchedule[] = [
  { day: 'Montag', hours: '09:00 - 18:00 Uhr', isClosed: false },
  { day: 'Dienstag', hours: '09:00 - 18:00 Uhr', isClosed: false },
  { day: 'Mittwoch', hours: '09:00 - 18:00 Uhr', isClosed: false },
  { day: 'Donnerstag', hours: '09:00 - 18:00 Uhr', isClosed: false },
  { day: 'Freitag', hours: '10:00 - 20:00 Uhr', isClosed: false },
  { day: 'Samstag', hours: '09:00 - 16:30 Uhr', isClosed: false },
  { day: 'Sonntag', hours: 'Geschlossen', isClosed: true },
];

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'trockenhaarschnitt',
    name: 'Trockenhaarschnitt',
    category: 'damen',
    description: 'Präzisionshaarschnitt im trockenen Zustand für einen akkuraten und alltagstauglichen Fall Ihrer Haare.',
    priceFrom: 18,
    durationMin: 30,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'waschen-foehnen',
    name: 'Waschen - Föhnen o. Legen',
    category: 'styling',
    description: 'Schonende Haarwäsche mit reichhaltiger Pflege und professionelles Föhnstyling oder exquisites Legen für perfektes Volumen.',
    priceFrom: 23,
    durationMin: 45,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 'waschen-schneiden-foehnen',
    name: 'Waschen - Schneiden - Föhnen',
    category: 'damen',
    description: 'Das Rundum-Erlebnis: Wohltuende Reinigung, individueller typgerechter Haarschnitt und ein erstklassiges Föhn-Finish.',
    priceFrom: 30,
    durationMin: 60,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'ansatz',
    name: 'Ansatz färben',
    category: 'farbe',
    description: 'Präziser Ausgleich des Haaransatzes mit schonenden Premiumfarben für eine lückenlose Deckkraft und strahlenden Glanz.',
    priceFrom: 25,
    durationMin: 60,
    image: 'https://images.unsplash.com/photo-1620331702824-b2b0830950b4?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 'komplett-faerben',
    name: 'Komplett Färben',
    category: 'farbe',
    description: 'Ganzheitliche, hochpigmentierte Farbbehandlung für intensive Brillanz, edle Reflexe und maximale Farbbeständigkeit.',
    priceFrom: 30,
    durationMin: 90,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    popular: false,
  },
  {
    id: 'straehnen',
    name: 'Strähnen',
    category: 'farbe',
    description: 'Individuelle Strähnentechniken für wunderschöne, weiche Farbkontraste, Lichtreflexe und lebendige Strukturen.',
    priceFrom: 60,
    durationMin: 120,
    image: 'https://images.unsplash.com/photo-1481501894111-62400af668e8?auto=format&fit=crop&w=600&q=80',
    popular: true,
  },
  {
    id: 'balayage',
    name: 'Balayage',
    category: 'farbe',
    description: 'Verführerische, freihändig gemalte blonde Farbverläufe für den perfekten, sonnengeküssten und natürlichen Custom-Blond-Look.',
    priceFrom: 120,
    durationMin: 180,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    popular: true,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Warm Honey Balayage & Beach Waves',
    category: 'balayage',
    imageBefore: 'https://images.unsplash.com/photo-1620331702824-b2b0830950b4?auto=format&fit=crop&w=600&h=800&q=80', // Slightly flat dark root style
    imageAfter: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&h=800&q=80', // Honey beach waves
    description: 'Sanfter Übergang von tiefem Mokka in schimmerndes Honig-Blond für warmen Glow.'
  },
  {
    id: 'gal-2',
    title: 'Ash Blonde Transformation',
    category: 'color',
    imageBefore: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1605497746444-17d74075199a?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Airtouch Highlights mit kühler Platin-Veredelung & weichem Konturenhaarschnitt.'
  },
  {
    id: 'gal-3',
    title: 'Perfect Bob Haarschnitt & Glossing',
    category: 'cut',
    imageAfter: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Präziser, stumpfer Bob mit strahlendem Nude-Glossing für luxuriösen Glanz.'
  },
  {
    id: 'gal-4',
    title: 'Modern Gentlemen Fade Cut',
    category: 'cut',
    imageAfter: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Präziser Razor Fade an den Seiten, texturiertes Deckhaar und perfekt geformte Bartkonturen.'
  },
  {
    id: 'gal-5',
    title: 'Red Carpet Glamour Braiding',
    category: 'styling',
    imageAfter: 'https://images.unsplash.com/photo-1481501894111-62400af668e8?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Opulentes Hochsteck-Styling für exklusive Events mit echten Blütenelementen.'
  },
  {
    id: 'gal-6',
    title: 'Sunkissed Caramel Highlights',
    category: 'color',
    imageBefore: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&h=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Ultradünne Babylights in Karamell-Tönen für ein natürliches, sanftes Aufhellungsbild.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    author: 'Sarah M.',
    rating: 5,
    date: 'Vor 2 Tagen',
    text: 'Der Salon von Khalil ist eine absolute Klasse für sich! Meine Balayage ist einfach perfekt geworden. Die Beratung war unfassbar professionell und der Salon strahlt Luxus pur aus. Ein absoluter Wellness-Tag.',
    source: 'google',
    serviceReceived: 'Signature Balayage Kunst',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'review-2',
    author: 'Michael T.',
    rating: 5,
    date: 'Vor einer Woche',
    text: 'Hervorragender Schnitt und fantastisches Ambiente. Die Kopfhautmassage beim Waschen ist genial. Man fühlt sich vom ersten Moment an absolut königlich behandelt. Sehr zu empfehlen.',
    source: 'google',
    serviceReceived: 'Herrenhaarschnitt & Massage',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'review-3',
    author: 'Elena G.',
    rating: 5,
    date: 'Vor 2 Wochen',
    text: 'Ich habe dickes, schweres Haar und hatte immer Angst vor neuen Friseuren. Aber die Stufentechnik von Khalil ist überragend. Das Haar fällt herrlich leicht und die Keratin-Behandlung wirkt Wunder!',
    source: 'google',
    serviceReceived: 'Keratin Premium Glättung',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'review-4',
    author: 'Katrin B.',
    rating: 5,
    date: 'Vor 3 Wochen',
    text: 'Sensationell! Es wird sich unglaublich viel Zeit genommen. Die Olaplex Behandlung hat meine blondierten Haare gerettet. Preisleistungsverhältnis ist für dieses Niveau absolut spiit-klasse.',
    source: 'google',
    serviceReceived: 'Olaplex™ Tiefenrekonstruktion',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Khalil',
    role: 'Salon-Inhaber & Master Stylist / Barber',
    description: 'Mit meisterhaftem Handwerk, Leidenschaft und höchster Präzision leitet Khalil den Almaz Friseursalon in Herne. Als Experte für modernste Herren- und Damenschnitte schätzen auch Profisportler wie die Stars von Schalke 04 seine Handwerkskunst.',
    image: '/khalil Almaz.jpg',
    specialties: ['Präzisionshaarschnitte', 'Barbering & Profiling', 'Balayage & Blond', 'Typ- & Stilberatung']
  },
  {
    id: 'team-2',
    name: 'Dilara',
    role: 'Senior Stylistin & Wedding Hair Expert',
    description: 'Dilara ist unsere Expertin für absolut atemberaubende Föhn-Frisuren, Glamour-Wellen und magische Hochsteckszenarien für Hochzeiten und Großevents.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
    specialties: ['Hochzeits-Frisuren', 'Blow Dry Stylings', 'Keratin-Therapie', 'Extensions']
  }
];
