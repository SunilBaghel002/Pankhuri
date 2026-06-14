# 🛠️ TECHNOLOGY DOCUMENTATION — Pankhuri Reloaded Restaurant Website

## 📌 Project Overview
Premium restaurant website for **Pankhuri Reloaded** (Pure Vegetarian, Agra). This document defines the complete tech stack, project architecture, folder structure, third-party integrations, and implementation guidelines for the AI code editor.

---

## 🧱 Core Tech Stack

### Framework
| Technology      | Version   | Purpose                                      |
|-----------------|-----------|----------------------------------------------|
| **Next.js**     | 14.x (App Router) | React framework, SSR/SSG, routing, API routes |
| **React**       | 18.x      | UI component library                          |
| **TypeScript**  | 5.x       | Type safety across the codebase              |

### Styling
| Technology          | Purpose                                          |
|---------------------|--------------------------------------------------|
| **Tailwind CSS**    | Utility-first CSS framework for rapid styling     |
| **tailwind-merge**  | Merge Tailwind classes without conflicts          |
| **clsx / cn utility** | Conditional class name composition              |
| **CSS Modules**     | Component-scoped styles where needed (complex animations) |

### Animation & Motion
| Technology           | Purpose                                          |
|----------------------|--------------------------------------------------|
| **Framer Motion**    | Primary animation library — page transitions, scroll animations, hover effects, layout animations, AnimatePresence |
| **framer-motion** `useScroll`, `useTransform` | Parallax effects for leaves and images |
| **framer-motion** `useInView` | Scroll-triggered reveal animations |

### UI Components & Enhancements
| Technology                   | Purpose                                 |
|------------------------------|------------------------------------------|
| **Embla Carousel**           | Testimonials & featured dishes carousel  |
| **Radix UI Primitives**      | Accessible tabs, dialog, navigation menu |
| **Lucide React**             | Icon library (consistent, clean icons)   |
| **next/image**               | Optimized image loading with blur placeholder |
| **next/font**                | Google Fonts optimization (Playfair Display, DM Sans, Cormorant Garamond) |
| **react-intersection-observer** | Backup scroll detection if needed     |

### Form & Communication
| Technology          | Purpose                                          |
|---------------------|--------------------------------------------------|
| **React Hook Form** | Form handling for contact & reservation forms     |
| **Zod**             | Schema validation for form data                  |
| **Resend** or **EmailJS** | Email delivery for contact form submissions |
| **react-hot-toast** | Toast notifications for form success/error       |

### Maps
| Technology              | Purpose                              |
|-------------------------|---------------------------------------|
| **@react-google-maps/api** or **Leaflet** | Interactive map embed for location |
| Alternative: **Google Maps iframe** | Simple embed if API not needed |

### SEO & Performance
| Technology           | Purpose                                         |
|----------------------|--------------------------------------------------|
| **next/metadata**    | Dynamic meta tags, Open Graph, Twitter cards     |
| **next-sitemap**     | Auto-generate sitemap.xml                        |
| **schema.org JSON-LD** | Structured data for Restaurant schema          |
| **next/image**       | Automatic WebP conversion, lazy loading          |
| **@vercel/analytics** | Performance monitoring (if deployed on Vercel)  |

### Deployment
| Technology      | Purpose                                              |
|-----------------|------------------------------------------------------|
| **Vercel**      | Primary deployment platform (optimized for Next.js)  |
| **GitHub**      | Version control                                      |

---

## 📁 Project Folder Structure
pankhuri-reloaded/
├── public/
│ ├── images/
│ │ ├── hero/
│ │ │ ├── hero-thali.webp
│ │ │ ├── hero-dal-makhani.webp
│ │ │ └── hero-paneer.webp
│ │ ├── food/
│ │ │ ├── dal-makhani.webp
│ │ │ ├── malai-kofta.webp
│ │ │ ├── paneer-pasanda.webp
│ │ │ ├── kaju-curry.webp
│ │ │ ├── special-thali.webp
│ │ │ └── ... (all menu item images)
│ │ ├── gallery/
│ │ │ ├── interior-1.webp
│ │ │ ├── interior-2.webp
│ │ │ ├── food-spread-1.webp
│ │ │ └── ...
│ │ ├── decorations/
│ │ │ ├── leaf-1.svg
│ │ │ ├── leaf-2.svg
│ │ │ ├── leaf-3.svg
│ │ │ ├── leaf-cluster.svg
│ │ │ ├── marble-texture.webp
│ │ │ ├── cream-texture.webp
│ │ │ └── flourish-divider.svg
│ │ ├── logo/
│ │ │ ├── logo-full.svg
│ │ │ ├── logo-icon.svg
│ │ │ └── logo-white.svg
│ │ └── icons/
│ │ ├── veg-indicator.svg
│ │ └── taj-mahal-silhouette.svg
│ ├── fonts/ (if self-hosting)
│ ├── favicon.ico
│ ├── apple-touch-icon.png
│ ├── og-image.jpg
│ └── robots.txt
│
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout with fonts, metadata, navbar, footer
│ │ ├── page.tsx # Home page
│ │ ├── loading.tsx # Global loading UI (leaf spinner)
│ │ ├── not-found.tsx # Custom 404 page
│ │ ├── globals.css # Global styles + Tailwind directives
│ │ │
│ │ ├── menu/
│ │ │ └── page.tsx # Full menu page with tabs
│ │ │
│ │ ├── about/
│ │ │ └── page.tsx # About us page
│ │ │
│ │ ├── gallery/
│ │ │ └── page.tsx # Photo gallery page
│ │ │
│ │ ├── contact/
│ │ │ └── page.tsx # Contact & reservation page
│ │ │
│ │ └── api/
│ │ ├── contact/
│ │ │ └── route.ts # Contact form API endpoint
│ │ └── reservation/
│ │ └── route.ts # Table booking API endpoint
│ │
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Navbar.tsx # Main navigation bar
│ │ │ ├── MobileMenu.tsx # Mobile slide-in menu drawer
│ │ │ ├── Footer.tsx # Site footer
│ │ │ └── PageTransition.tsx # Framer Motion page transition wrapper
│ │ │
│ │ ├── home/
│ │ │ ├── HeroSection.tsx # Hero with food image + CTA
│ │ │ ├── SpecialtiesSection.tsx # Chef's specialties cards
│ │ │ ├── AboutPreview.tsx # Brief about section on home
│ │ │ ├── TestimonialsSection.tsx # Customer reviews carousel
│ │ │ ├── GalleryPreview.tsx # Small gallery grid preview
│ │ │ └── CTASection.tsx # Call-to-action banner
│ │ │
│ │ ├── menu/
│ │ │ ├── MenuTabs.tsx # Tab navigation for menu categories
│ │ │ ├── MenuCategory.tsx # Single category display
│ │ │ ├── MenuItem.tsx # Individual menu item row
│ │ │ └── MenuSearch.tsx # Optional search/filter for menu
│ │ │
│ │ ├── gallery/
│ │ │ ├── GalleryGrid.tsx # Masonry gallery grid
│ │ │ └── Lightbox.tsx # Full-screen image lightbox
│ │ │
│ │ ├── contact/
│ │ │ ├── ContactForm.tsx # Contact form component
│ │ │ ├── ReservationForm.tsx # Table booking form
│ │ │ └── MapEmbed.tsx # Google Maps embed
│ │ │
│ │ ├── ui/
│ │ │ ├── Button.tsx # Reusable button component
│ │ │ ├── Card.tsx # Reusable card component
│ │ │ ├── Badge.tsx # Badge component (Pure Veg, etc.)
│ │ │ ├── SectionHeading.tsx # Consistent section heading styling
│ │ │ ├── Divider.tsx # Decorative divider/flourish
│ │ │ ├── Container.tsx # Max-width container wrapper
│ │ │ ├── Tabs.tsx # Custom tabs built on Radix
│ │ │ └── Toast.tsx # Toast notification component
│ │ │
│ │ ├── decorations/
│ │ │ ├── FloatingLeaf.tsx # Animated floating leaf component
│ │ │ ├── LeafCluster.tsx # Group of leaves with parallax
│ │ │ ├── ParallaxLeaf.tsx # Scroll-responsive parallax leaf
│ │ │ └── BackgroundTexture.tsx # Marble/cream texture overlay
│ │ │
│ │ └── shared/
│ │ ├── WhatsAppButton.tsx # Floating WhatsApp CTA
│ │ ├── ScrollToTop.tsx # Scroll to top button
│ │ ├── Preloader.tsx # Initial page load animation
│ │ └── VegIndicator.tsx # Green dot veg indicator
│ │
│ ├── data/
│ │ ├── menu.ts # Complete menu data (structured)
│ │ ├── testimonials.ts # Customer reviews data
│ │ ├── gallery.ts # Gallery images data
│ │ └── restaurant-info.ts # Restaurant details (address, hours, etc.)
│ │
│ ├── lib/
│ │ ├── utils.ts # Utility functions (cn, formatPrice, etc.)
│ │ ├── constants.ts # Site-wide constants (colors, links)
│ │ ├── fonts.ts # Next.js font configurations
│ │ └── metadata.ts # SEO metadata generator
│ │
│ ├── hooks/
│ │ ├── useScrollDirection.ts # Detect scroll up/down for navbar
│ │ ├── useInViewAnimation.ts # Custom hook for scroll animations
│ │ └── useMediaQuery.ts # Responsive breakpoint detection
│ │
│ ├── styles/
│ │ ├── menu.module.css # Complex menu-specific styles
│ │ └── animations.css # Keyframe animations
│ │
│ └── types/
│ ├── menu.ts # Menu item type definitions
│ └── index.ts # Shared type definitions
│
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

text


---

## 📊 Data Structures

### Menu Data (`src/data/menu.ts`)

```typescript
// src/types/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  isSpecial?: boolean;
  isNew?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  items: MenuItem[];
}

// src/data/menu.ts
export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    slug: 'starters',
    items: [
      {
        id: 'paneer-tikka',
        name: 'Paneer Tikka',
        price: 265,
        description: 'Cottage cheese marinated in spices and grilled in tandoor',
      },
      {
        id: 'hara-bhara-kebab',
        name: 'Hara Bhara Kebab',
        price: 225,
        description: 'Spinach and green pea patties with Indian spices',
      },
      // ... all starters from menu
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    slug: 'main-course',
    items: [
      {
        id: 'dal-makhani',
        name: 'Dal Makhani',
        price: 325,
        description: 'A delicious combination of lentil cooked in butter finished with cream',
        isSpecial: true,
      },
      {
        id: 'yellow-dal-tadka',
        name: 'Yellow Dal Tadka',
        price: 299,
        description: 'Yellow Dal Fried with Traditional Punjabi Style',
      },
      {
        id: 'mix-veg',
        name: 'Mix Veg',
        price: 299,
        description: 'Seasonal Vegetables Roasted in Tandoor Mix in Indian Spices & Onion Tomato Masala',
      },
      {
        id: 'paneer-pasanda',
        name: 'Paneer Pasanda',
        price: 385,
        description: 'Cheese Tossed with Tomatos, Onion, Bell Peppers and Blend of Indian Spices',
        isSpecial: true,
      },
      {
        id: 'mushroom-matar',
        name: 'Mushroom Matar',
        price: 349,
      },
      {
        id: 'malai-kofta',
        name: 'Malai Kofta',
        price: 369,
        description: 'Kofta Made of Potato and Paneer are Deep Fried and Served with a creamy and spiced tomato based curry',
        isSpecial: true,
      },
      {
        id: 'navratan-curry',
        name: 'Navratan Curry',
        price: 369,
        description: 'Nine Types of Vegetables Cooked with Chef\'s Secret Spices',
      },
      {
        id: 'kashmiri-dum-aloo',
        name: 'Kashmiri Dum Aloo',
        price: 329,
        description: 'A delicious yogurt-based potato curry flavored with dry ginger powder and fennel powder',
      },
      {
        id: 'amritsari-stuff-dum-aloo',
        name: 'Amritsari Stuff Dum Aloo',
        price: 329,
        description: 'A delicious combination of lentil cooked in butter finished with cream',
      },
      {
        id: 'punjabi-chana-masala',
        name: 'Punjabi Chana Masala',
        price: 299,
        description: 'Chickpeas Cooked in a Tangy Onion-Tomato Sauce with a Special Blend of Spice Mix',
      },
      {
        id: 'soya-keema-masala',
        name: 'Soya Keema Masala',
        price: 325,
      },
      {
        id: 'jeera-aloo-gobhi',
        name: 'Jeera Aloo Gobhi',
        price: 265,
        description: 'The Indian Subcontinent Made with Potato & Cauliflower and Indian Spices',
      },
      {
        id: 'soya-taka-tak',
        name: 'Soya Taka Tak',
        price: 325,
      },
      {
        id: 'stuffed-chaap-butter-masala',
        name: 'Stuffed Chaap Butter Masala',
        price: 325,
      },
      {
        id: 'veg-kolhapuri',
        name: 'Veg. Kolhapuri',
        price: 295,
      },
      {
        id: 'methi-matar-malai',
        name: 'Methi Matar Malai',
        price: 325,
      },
      {
        id: 'kaju-curry',
        name: 'Kaju Curry',
        price: 369,
        description: 'Kofta Simmered in Rice Cashew Gravy',
        isSpecial: true,
      },
      {
        id: 'chaap-makhani',
        name: 'Chaap Makhani',
        price: 325,
      },
    ],
  },
  {
    id: 'indian-breads',
    name: 'Indian Breads',
    slug: 'indian-breads',
    items: [
      { id: 'tandoori-roti', name: 'Tandoori Roti', price: 35 },
      { id: 'tandoori-masala-roti', name: 'Tandoori Masala Roti', price: 40 },
      { id: 'butter-roti', name: 'Butter Roti', price: 40 },
      { id: 'butter-roti-masala', name: 'Butter Roti Masala', price: 45 },
      { id: 'plain-naan', name: 'Plain Naan', price: 75 },
      { id: 'butter-naan', name: 'Butter Naan', price: 85 },
      { id: 'garlic-naan', name: 'Garlic Naan', price: 90 },
      { id: 'paneer-naan', name: 'Paneer Naan', price: 110 },
      { id: 'lachha-parantha', name: 'Lachha Parantha', price: 95 },
      { id: 'stuff-naan', name: 'Stuff Naan', price: 110 },
      { id: 'missi-roti', name: 'Missi Roti', price: 60 },
      { id: 'missi-masala', name: 'Missi Masala', price: 65 },
      { id: 'kabli-naan', name: 'Kabli Naan', price: 149 },
      { id: 'assorted-bread-basket', name: 'Assorted Bread Basket', price: 295 },
    ],
  },
  {
    id: 'thali',
    name: 'Thali',
    slug: 'thali',
    items: [
      {
        id: 'special-thali',
        name: 'Special Thali',
        price: 359,
        description: 'Complete meal with assorted dishes, breads, rice, and dessert',
        isSpecial: true,
      },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    slug: 'salads',
    items: [
      { id: 'garden-green-salad', name: 'Garden Green Salad', price: 125 },
      { id: 'spicy-onion-salad', name: 'Spicy Onion Salad', price: 99 },
    ],
  },
  {
    id: 'pastas',
    name: "Pasta's",
    slug: 'pastas',
    items: [
      { id: 'white-pasta', name: 'White Pasta', price: 220 },
      { id: 'red-pasta', name: 'Red Pasta', price: 220 },
      { id: 'five-spices-pasta', name: 'Five Spices Pasta', price: 245 },
    ],
  },
  {
    id: 'pizza-world',
    name: 'Pizza World',
    slug: 'pizza-world',
    items: [
      {
        id: 'margherita',
        name: 'Margherita',
        price: 199,
        description: 'Classic pizza with mozzarella and tomato sauce',
      },
      {
        id: 'paneer-tikka-pizza',
        name: 'Paneer Tikka Pizza',
        price: 249,
        description: 'Mushroom, Bell Peppers, Red & Green Pepper, Olives',
      },
      // ... more pizza items from menu
    ],
  },
  {
    id: 'indian-zaika',
    name: 'Indian Zaika',
    slug: 'indian-zaika',
    items: [
      {
        id: 'masala-butter-kulcha',
        name: 'Masala Butter Kulcha',
        price: 265,
      },
      {
        id: 'aloo-parantha',
        name: 'Aloo Parantha',
        price: 145,
      },
      // ... more items from menu
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    slug: 'soups',
    items: [
      { id: 'tomato-soup', name: 'Tomato Soup', price: 149 },
      { id: 'sweet-corn-soup', name: 'Sweet Corn Soup', price: 159 },
      { id: 'veg-cream-cheese-soup', name: 'Veg Cream Cheese Soup', price: 185 },
      { id: 'hot-n-sour-soup', name: 'Hot & Sour Soup', price: 149 },
      { id: 'manchow-soup', name: 'Manchow Soup', price: 165 },
      { id: 'lemon-coriander-soup', name: 'Lemon & Coriander Soup', price: 149 },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    slug: 'beverages',
    items: [
      { id: 'masala-tea', name: 'Masala Tea', price: 49 },
      { id: 'lemon-tea', name: 'Lemon Tea', price: 49 },
      { id: 'coffee', name: 'Coffee', price: 59 },
      { id: 'cold-coffee', name: 'Cold Coffee', price: 99 },
      { id: 'pankhuri-special-lassi', name: 'Pankhuri Special Lassi', price: 129 },
      { id: 'juices', name: 'Juices', price: 99 },
      { id: 'fresh-lime-soda', name: 'Fresh Lime Soda', price: 69 },
      { id: 'soft-drinks', name: 'Soft Drinks', price: 49 },
      { id: 'mineral-water', name: 'Mineral Water', price: 30 },
    ],
  },
  {
    id: 'sweets-desserts',
    name: 'Sweets & Desserts',
    slug: 'sweets-desserts',
    items: [
      { id: 'matka-kulfi', name: 'Matka Kulfi', price: 99 },
      { id: 'kesar-kheer', name: 'Kesar Kheer', price: 129 },
      { id: 'amritsari-phirni', name: 'Amritsari Phirni', price: 119 },
      { id: 'gulab-jamun', name: 'Gulab Jamun', price: 89 },
      { id: 'vanilla-ice-cream', name: 'Vanilla Ice Cream', price: 79 },
    ],
  },
];
Restaurant Info (src/data/restaurant-info.ts)
TypeScript

export const restaurantInfo = {
  name: 'Pankhuri Reloaded',
  tagline: 'Pure Vegetarian',
  description: 'Authentic vegetarian dining experience in the heart of Agra',
  address: {
    street: '[Street Address]',
    city: 'Agra',
    state: 'Uttar Pradesh',
    pincode: '[Pincode]',
    country: 'India',
  },
  phone: '+91-XXXXXXXXXX',
  email: 'info@pankhurireloaded.com',
  whatsapp: '+91-XXXXXXXXXX',
  hours: {
    monday: '11:00 AM - 11:00 PM',
    tuesday: '11:00 AM - 11:00 PM',
    wednesday: '11:00 AM - 11:00 PM',
    thursday: '11:00 AM - 11:00 PM',
    friday: '11:00 AM - 11:00 PM',
    saturday: '11:00 AM - 11:00 PM',
    sunday: '11:00 AM - 11:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/pankhurireloaded',
    facebook: 'https://facebook.com/pankhurireloaded',
    youtube: '',
    zomato: '',
    swiggy: '',
  },
  coordinates: {
    lat: 27.1767,
    lng: 78.0081,
  },
};