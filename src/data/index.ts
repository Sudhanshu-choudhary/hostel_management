import { Room, Occupant, Service, GalleryImage } from '../types';
import { Bed, Wifi, Coffee, Utensils, Tv, Bath, Fan, Flower } from 'lucide-react';

export const roomsData: Room[] = [
  {
    id: 1,
    number: '101',
    type: 'single',
    capacity: 1,
    occupants: [],
    price: 50,
    amenities: ['Wi-Fi', 'Single Bed', 'Desk', 'Wardrobe', 'Bathroom'],
    available: true,
    imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    number: '102',
    type: 'double',
    capacity: 2,
    occupants: [],
    price: 80,
    amenities: ['Wi-Fi', 'Double Bed', 'Desk', 'Wardrobe', 'Bathroom', 'TV'],
    available: false,
    imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    number: '103',
    type: 'double',
    capacity: 2,
    occupants: [],
    price: 80,
    amenities: ['Wi-Fi', 'Two Single Beds', 'Desk', 'Wardrobe', 'Bathroom'],
    available: true,
    imageUrl: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    number: '201',
    type: 'triple',
    capacity: 3,
    occupants: [],
    price: 110,
    amenities: ['Wi-Fi', 'Three Single Beds', 'Desk', 'Wardrobe', 'Bathroom', 'Balcony'],
    available: true,
    imageUrl: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    number: '202',
    type: 'quad',
    capacity: 4,
    occupants: [],
    price: 140,
    amenities: ['Wi-Fi', 'Four Single Beds', 'Desk', 'Wardrobe', 'Bathroom', 'TV', 'Mini Fridge'],
    available: false,
    imageUrl: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    number: '203',
    type: 'single',
    capacity: 1,
    occupants: [],
    price: 55,
    amenities: ['Wi-Fi', 'Single Bed', 'Desk', 'Wardrobe', 'Shared Bathroom'],
    available: true,
    imageUrl: 'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const occupantsData: Occupant[] = [
  {
    id: 1,
    name: 'John Smith',
    roomId: 2,
    checkIn: '2023-10-01',
    checkOut: '2023-10-15',
    present: true,
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Emma Johnson',
    roomId: 2,
    checkIn: '2023-10-01',
    checkOut: '2023-10-15',
    present: false,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 987-6543'
  },
  {
    id: 3,
    name: 'Michael Brown',
    roomId: 5,
    checkIn: '2023-09-28',
    checkOut: '2023-10-12',
    present: true,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 456-7890'
  },
  {
    id: 4,
    name: 'Sophia Garcia',
    roomId: 5,
    checkIn: '2023-09-28',
    checkOut: '2023-10-12',
    present: true,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 234-5678'
  },
  {
    id: 5,
    name: 'James Wilson',
    roomId: 5,
    checkIn: '2023-09-30',
    checkOut: '2023-10-14',
    present: false,
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 789-0123'
  },
  {
    id: 6,
    name: 'Olivia Martinez',
    roomId: 5,
    checkIn: '2023-09-30',
    checkOut: '2023-10-14',
    present: true,
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '+1 (555) 345-6789'
  }
];

// Update room occupants
roomsData.forEach(room => {
  room.occupants = occupantsData.filter(occupant => occupant.roomId === room.id);
  room.available = room.occupants.length < room.capacity;
});

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Comfortable Accommodations',
    description: 'Clean, comfortable rooms with various occupancy options to suit your needs and budget.',
    icon: 'Bed',
    imageUrl: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with friends and family with our complimentary high-speed internet access.',
    icon: 'Wifi',
    imageUrl: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Breakfast Service',
    description: 'Start your day right with our complimentary continental breakfast, served daily from 7:00 AM to 10:00 AM.',
    icon: 'Coffee',
    imageUrl: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Communal Kitchen',
    description: 'Prepare your own meals in our fully equipped communal kitchen, available for all guests.',
    icon: 'Utensils',
    imageUrl: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Entertainment Lounge',
    description: 'Relax and socialize in our entertainment lounge, featuring a large-screen TV, board games, and comfortable seating.',
    icon: 'Tv',
    imageUrl: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Laundry Facilities',
    description: 'Keep your clothes fresh with our on-site laundry facilities, available 24/7.',
    icon: 'Bath',
    imageUrl: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    title: 'Air Conditioning',
    description: 'Stay comfortable year-round with individually controlled air conditioning in all rooms.',
    icon: 'Fan',
    imageUrl: 'https://images.pexels.com/photos/5634662/pexels-photo-5634662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    title: 'Garden Area',
    description: 'Enjoy the outdoors in our peaceful garden area, perfect for relaxation and socializing.',
    icon: 'Flower',
    imageUrl: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Spacious single room with modern furnishings',
    category: 'rooms'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Comfortable double room with large windows',
    category: 'rooms'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Quad room with individual beds',
    category: 'rooms'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Modern bathroom with shower',
    category: 'rooms'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Communal kitchen facility',
    category: 'facilities'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/5061594/pexels-photo-5061594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cozy communal lounge area',
    category: 'facilities'
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/7319171/pexels-photo-7319171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Laundry facilities',
    category: 'facilities'
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Outdoor garden seating area',
    category: 'facilities'
  },
  {
    id: 9,
    url: 'https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Game night event in the common area',
    category: 'events'
  },
  {
    id: 10,
    url: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Community dinner event',
    category: 'events'
  },
  {
    id: 11,
    url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Continental breakfast spread',
    category: 'dining'
  },
  {
    id: 12,
    url: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Dining area with tables and chairs',
    category: 'dining'
  }
];