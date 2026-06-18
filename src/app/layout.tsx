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
    default: 'Shankara Vegis Restaurant | Pure Veg & Vegan Restaurant with 360° Taj Mahal View, Agra',
    template: '%s | Shankara Vegis Restaurant',
  },
  description: 'Family owned pure vegetarian & vegan restaurant in Agra since 1992. Enjoy authentic Indian and international cuisine with a stunning 360° rooftop view of the Taj Mahal. Recommended by Lonely Planet. All food cooked with mineral water.',
  keywords: [
    'shankara vegis restaurant',
    'vegetarian restaurant agra',
    'vegan restaurant agra',
    'taj mahal view restaurant',
    'rooftop restaurant agra',
    'pure veg restaurant near taj mahal',
    'lonely planet agra restaurant',
    'family restaurant tajganj',
    'best vegan food agra',
    '360 degree taj view dining',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shankaravegis.com',
    siteName: 'Shankara Vegis Restaurant',
    title: 'Shankara Vegis Restaurant | Pure Veg & Vegan Restaurant with 360° Taj Mahal View, Agra',
    description: 'Enjoy authentic Indian cuisine with a stunning 360° rooftop view of the Taj Mahal. Recommended by Lonely Planet. All food cooked with mineral water.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Taj Mahal View from Shankara Rooftop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shankara Vegis Restaurant | Pure Veg & Vegan Restaurant with 360° Taj Mahal View, Agra',
    description: 'Enjoy authentic Indian cuisine with a stunning 360° rooftop view of the Taj Mahal. Recommended by Lonely Planet. All food cooked with mineral water.',
    images: ['https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200'],
  },
  metadataBase: new URL('https://shankaravegis.com'),
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
    "name": "Shankara Vegis Restaurant",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    "@id": "https://shankaravegis.com",
    "url": "https://shankaravegis.com",
    "telephone": "+919917639035",
    "priceRange": "₹₹",
    "foundingDate": "1992",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chowk Kagziyan, 3/100, South Gate",
      "addressLocality": "Tajganj, Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.1735,
      "longitude": 78.0420
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
      "opens": "08:00",
      "closes": "22:30"
    },
    "menu": "https://shankaravegis.com/menu",
    "servesCuisine": ["Indian", "North Indian", "South Indian", "Chinese", "Italian", "Vegan"],
    "award": "TripAdvisor Certificate of Excellence 2025, Recommended by Lonely Planet"
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
