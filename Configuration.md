tailwind.config.ts
TypeScript

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F9F0',
          100: '#E8F0DE',
          200: '#C5DBA8',
          300: '#A3C672',
          400: '#7BA05B',
          500: '#2D5016',
          600: '#244012',
          700: '#1A3A0A',
          800: '#132D08',
          900: '#0A1F05',
        },
        accent: {
          orange: '#E8762D',
          saffron: '#D4920B',
          gold: '#B8860B',
        },
        brand: {
          brown: '#4A2C1A',
          cream: '#FFF9F0',
          marble: '#F5F0E8',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'leaf-pattern': "url('/images/decorations/leaf-pattern.svg')",
        'marble-texture': "url('/images/decorations/marble-texture.webp')",
      },
      boxShadow: {
        'card': '0 4px 20px rgba(45, 80, 22, 0.08)',
        'card-hover': '0 8px 30px rgba(45, 80, 22, 0.15)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
next.config.js
JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
Font Configuration (src/lib/fonts.ts)
TypeScript

import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});
🧩 Key Component Implementation Guidelines
1. Navbar Component (Navbar.tsx)
text

Behavior:
- Transparent on top → Frosted glass (backdrop-blur) on scroll
- Sticky position
- Logo left, links center, CTA right
- Mobile: Hamburger with animated drawer
- Active link: green underline with Framer Motion layoutId

Libraries:
- framer-motion for animations
- useScrollDirection hook for hide/show on scroll
- Radix NavigationMenu for accessibility
2. Hero Section (HeroSection.tsx)
text

Implementation:
- Split layout: text 50% | image 50%
- Framer Motion stagger animation for text elements
- FloatingLeaf components positioned absolutely
- Hero image with subtle floating animation
- Two CTA buttons: "Explore Menu" (filled) + "Book a Table" (outline)
- Pure Veg badge with green indicator
- Responsive: stacks vertically on mobile

Animations:
- Text: staggerChildren with y: 30 → 0, opacity: 0 → 1
- Image: scale 0.9 → 1, opacity 0 → 1 with spring
- Leaves: continuous float animation
- Scroll indicator: bounce animation at bottom
3. Menu Section (MenuTabs.tsx)
text

Implementation:
- Horizontal scrollable tab bar for categories
- framer-motion AnimatePresence for tab content transitions
- Each category renders a list of MenuItems
- Menu items show name, price (₹ symbol), and optional description
- Dotted line separator between name and price
- Veg indicator (green dot) on each item
- Category header in italic serif font

Styling:
- Cream/marble texture background
- Ornamental border matching physical menu card
- Leaf decorations at corners via absolute positioned SVGs

Data:
- Import from src/data/menu.ts
- Filter and render based on active tab
4. Floating Leaf Component (FloatingLeaf.tsx)
text

Implementation:
- Accept props: position, size, rotation, delay, parallaxFactor
- Use framer-motion useScroll + useTransform for parallax
- Combine with continuous float animation
- SVG leaf with configurable color/opacity
- Multiple instances placed throughout the page

Props:
interface FloatingLeafProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  parallaxRange?: [number, number];
  delay?: number;
  opacity?: number;
  rotation?: number;
}
5. Page Transitions (PageTransition.tsx)
text

Implementation:
- Wrap each page content with AnimatePresence
- Fade + slide transition between routes
- Use framer-motion layout animations

Animation:
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
exit: { opacity: 0, y: -20 }
transition: { duration: 0.4, ease: 'easeInOut' }
6. Testimonials Carousel (TestimonialsSection.tsx)
text

Implementation:
- Embla Carousel with auto-play
- Cards with quote icon, text, customer name, rating stars
- Dot navigation indicators
- Smooth slide transition
- Pause auto-play on hover

Styling:
- Light green gradient background
- White cards with shadow
- Large decorative quotation mark icon
🔧 Package Dependencies
package.json dependencies
JSON

{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "embla-carousel-react": "^8.0.0",
    "embla-carousel-autoplay": "^8.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-navigation-menu": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "lucide-react": "^0.400.0",
    "react-hook-form": "^7.50.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "react-hot-toast": "^2.4.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.3.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}