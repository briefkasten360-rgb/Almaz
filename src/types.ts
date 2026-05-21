export type ServiceCategory = 'damen' | 'herren' | 'farbe' | 'pflege' | 'styling';

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  priceFrom: number;
  durationMin: number;
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cut' | 'color' | 'styling' | 'balayage';
  imageBefore?: string; // For before-after comparison
  imageAfter: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number; // e.g. 5
  date: string; // e.g. "Vor 2 Tagen"
  text: string;
  source: 'google' | 'salon' | 'provenexpert';
  avatar?: string;
  serviceReceived?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  specialties: string[];
}

export interface DaySchedule {
  day: string;
  hours: string;
  isClosed: boolean;
}
