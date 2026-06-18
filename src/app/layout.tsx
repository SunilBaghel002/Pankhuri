import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { playfair, dmSans, cormorant } from '@/lib/fonts';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/shared/Preloader';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import ScrollToTop from '@/components/shared/ScrollToTop';

export const metadata: Metadata = {
  title: {
    default: 'Pankhuri Reloaded | Premium Pure Vegetarian Restaurant in Agra',
    template: '%s | Pankhuri Reloaded',
  },
  description: 'Experience Agra\'s finest premium pure vegetarian dining at Fatehabad Road. Authentically crafted Dal Makhani, Paneer Pasanda, specialties, tandoori breads, desserts and beverages near the Taj Mahal.',
  keywords: [
    'vegetarian restaurant in Agra',
    'best pure veg restaurant Agra',
    'Pankhuri Reloaded Agra',
    'fine dining Fatehabad Road',
    'family restaurant near Taj Mahal',
    'dal makhani Agra',
    'authentic Indian vegetarian food'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://pankhurireloaded.com',
    siteName: 'Pankhuri Reloaded',
    title: 'Pankhuri Reloaded | Premium Pure Veg Restaurant in Agra',
    description: 'Experience Agra\'s finest pure vegetarian dining near the Taj Mahal. Serving rich slow-cooked curries, flatbreads, pasta, and desserts.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Pankhuri Special Thali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankhuri Reloaded | Premium Pure Veg Restaurant in Agra',
    description: 'Experience Agra\'s finest pure vegetarian dining near the Taj Mahal. Serving rich slow-cooked curries, flatbreads, pasta, and desserts.',
    images: ['https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1200'],
  },
  metadataBase: new URL('https://pankhurireloaded.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Restaurant definition
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Pankhuri Reloaded",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
    "@id": "https://pankhurireloaded.com",
    "url": "https://pankhurireloaded.com",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fatehabad Road, Opposite Kalakriti",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.1592,
      "longitude": 78.0468
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "menu": "https://pankhurireloaded.com/menu",
    "servesCuisine": "Indian Vegetarian",
    "priceRange": "₹₹"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} antialiased`}
      >
        <Preloader />
        <Navbar />
        <main className="pt-24 min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
