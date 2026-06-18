export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'ambiance';
  imageUrl: string;
  description?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Creamy Dal Makhani',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    description: 'Our signature slow-cooked black lentils, topped with fresh cream and melting butter.',
  },
  {
    id: 'g2',
    title: 'Tandoori Paneer Tikka',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
    description: 'Succulent cottage cheese cubes marinated in yogurt and tandoori spices, char-grilled.',
  },
  {
    id: 'g3',
    title: 'Pankhuri Grand Thali',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    description: 'A lavish assortment of our finest vegetarian curries, breads, rice, and desserts.',
  },
  {
    id: 'g4',
    title: 'Rich Malai Kofta',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    description: 'Delicate potato and paneer dumplings floating in a sweet, velvety cashew gravy.',
  },
  {
    id: 'g5',
    title: 'Fine Dining Peacock Hall',
    category: 'interior',
    imageUrl: '/images/interior_peacock.jpg',
    description: 'Our luxurious dining space decorated with vibrant peacock artwork and premium blue seating.',
  },
  {
    id: 'g6',
    title: 'Private Archway Dining',
    category: 'interior',
    imageUrl: '/images/interior_arches.jpg',
    description: 'Beautiful traditional archways and warm hanging lanterns creating an intimate dining ambiance.',
  },
  {
    id: 'g10',
    title: 'Fine Dining Main Hall',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    description: 'Elegant seating with warm amber lighting, offering a premium and cozy dining ambiance.',
  },
  {
    id: 'g11',
    title: 'Lounge Seating',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200',
    description: 'Comfortable family seating arrangements, perfect for private dinner parties.',
  },
  {
    id: 'g7',
    title: 'Chef\'s Special Kaju Curry',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    description: 'Crunchy whole cashews simmered in a spiced onion-tomato and cashew cream gravy.',
  },
  {
    id: 'g8',
    title: 'Saffron Matka Kulfi',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    description: 'Traditional slow-reduced ice cream set in clay pots, flavored with saffron and nuts.',
  },
  {
    id: 'g9',
    title: 'Modern Bar & Beverages',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    description: 'Our beverage counter where we prepare fresh lime sodas, juices, and Lassis.',
  },
];
