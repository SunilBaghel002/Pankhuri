export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    location: 'Agra Local',
    rating: 5,
    text: 'The Dal Makhani here is hands down the best I have ever had! Cooked to perfection, extremely creamy, and authentic. The service is top-notch.',
    date: 'June 2026',
  },
  {
    id: '2',
    name: 'Priya Patel',
    location: 'Gujarat, India',
    rating: 5,
    text: 'Being a pure vegetarian, finding a high-end restaurant with strict veg standards is always a priority. Pankhuri Reloaded exceeded expectations! The Paneer Pasanda was spectacular.',
    date: 'May 2026',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    rating: 5,
    text: 'Visited after exploring the Taj Mahal. The ambiance is lovely and the spices are balanced beautifully. The Sweet Corn Soup and Garlic Naan were delicious. Very welcoming staff!',
    date: 'April 2026',
  },
  {
    id: '4',
    name: 'Amit Verma',
    location: 'New Delhi, India',
    rating: 4,
    text: 'A fantastic culinary experience in Agra. The Special Thali is a massive meal, great value and every dish on the platter had its unique rich flavor. Highly recommended!',
    date: 'June 2026',
  },
  {
    id: '5',
    name: 'Rajesh Gupta',
    location: 'Agra Local',
    rating: 5,
    text: 'Pankhuri has been a household name, but this "Reloaded" version elevates the dining experience. The luxury seating, clean kitchen, and awesome Matka Kulfi are exceptional.',
    date: 'March 2026',
  },
  {
    id: '6',
    name: 'Neha Singh',
    location: 'Agra Local',
    rating: 5,
    text: 'Beautifully decorated interiors. We held a small family gathering here, and they organized it wonderfully. The Paneer Tikka and Amritsari Phirni were the highlights.',
    date: 'May 2026',
  },
  {
    id: '7',
    name: 'David Miller',
    location: 'California, USA',
    rating: 4,
    text: 'The food was fresh, flavorful, and served hot. The decor is premium, and I appreciated the green veg safety standard. The Fresh Lime Soda was very refreshing after a hot day.',
    date: 'February 2026',
  },
];
