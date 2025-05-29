export interface Room {
  id: number;
  number: string;
  type: 'single' | 'double' | 'triple' | 'quad';
  capacity: number;
  occupants: Occupant[];
  price: number;
  amenities: string[];
  available: boolean;
  imageUrl: string;
}

export interface Occupant {
  id: number;
  name: string;
  roomId: number;
  checkIn: string;
  checkOut: string;
  present: boolean;
  imageUrl: string;
  contact: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: 'rooms' | 'facilities' | 'events' | 'dining';
}