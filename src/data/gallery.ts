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
    title: 'Taj Mahal Sunrise View',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    description: 'Breathtaking view of the Taj Mahal at sunrise from our 360° rooftop terrace.',
  },
  {
    id: 'g2',
    title: 'Rooftop Dining Setup',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'Panoramic outdoor tables offering cozy seating with Taj Mahal in the backdrop.',
  },
  {
    id: 'g3',
    title: 'Taj Mahal Sunset Glow',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
    description: 'Magical golden hours with clear views of the Taj from our rooftop seating.',
  },
  {
    id: 'g4',
    title: 'Creamy Dal Makhani',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    description: 'Our signature slow-cooked black lentils, cooked with mineral water and topped with fresh cream.',
  },
  {
    id: 'g5',
    title: 'Shankara Special Thali',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    description: 'A lavish assortment of authentic vegetarian curries, flatbreads, rice, and desserts.',
  },
  {
    id: 'g6',
    title: 'Authentic Masala Dosa',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
    description: 'Crispy rice and lentil crepe stuffed with spiced potato filling, served with coconut chutney and sambar.',
  },
  {
    id: 'g7',
    title: 'Rooftop at Night',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    description: 'Beautifully illuminated rooftop terrace, perfect for stargazing and viewing the monument.',
  },
  {
    id: 'g8',
    title: 'Fresh Palak Paneer',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    description: 'Soft cottage cheese cubes simmered in a vibrant creamy spinach gravy with traditional spices.',
  },
  {
    id: 'g9',
    title: 'Cozy Indoor Seating',
    category: 'interior',
    imageUrl: '/images/interior_arches.jpg',
    description: 'Clean and welcoming ground floor dining room reflecting warm family hospitality.',
  },
];
