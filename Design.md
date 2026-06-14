# 🎨 DESIGN DOCUMENTATION — Pankhuri Reloaded Restaurant Website

## 📌 Project Overview
A premium, visually rich website for **Pankhuri Reloaded**, a Pure Vegetarian restaurant located in **Agra, India**. The website must convey elegance, freshness, and the authenticity of Indian vegetarian cuisine. The design draws heavy inspiration from the provided reference website screenshot (green-themed food website) and the physical menu card design of the restaurant.

---

## 🏷️ Brand Identity

### Restaurant Name
**Pankhuri Reloaded** — (Pure Vegetarian)

### Tagline Suggestions
- "Pure Vegetarian | Authentic Flavors of India"
- "Share the Joy of Flavorful Food"
- "Where Tradition Meets Taste — Agra's Finest Vegetarian Dining"

### Logo Style
- Elegant script/calligraphy-style logo matching the physical menu card font
- Include a small decorative **leaf motif** near the logo (as seen on the physical menu)
- Logo should work on both white and green backgrounds

---

## 🎨 Color Palette

### Primary Colors
| Color Name       | Hex Code   | Usage                                      |
|------------------|------------|---------------------------------------------|
| Forest Green     | `#2D5016`  | Primary brand color, headings, CTAs         |
| Sage Green       | `#7BA05B`  | Secondary green, hover states, accents      |
| Light Sage       | `#E8F0DE`  | Section backgrounds, cards                  |
| Mint Cream       | `#F4F9F0`  | Page background, light sections             |

### Secondary Colors
| Color Name       | Hex Code   | Usage                                      |
|------------------|------------|---------------------------------------------|
| Warm Orange      | `#E8762D`  | Price highlights, accent buttons, badges    |
| Saffron Gold     | `#D4920B`  | Special items, premium indicators           |
| Deep Brown       | `#4A2C1A`  | Body text inspired by menu card color       |
| Cream White      | `#FFF9F0`  | Card backgrounds, menu section backgrounds  |

### Neutral Colors
| Color Name       | Hex Code   | Usage                                      |
|------------------|------------|---------------------------------------------|
| Pure White       | `#FFFFFF`  | Base backgrounds                            |
| Off White        | `#FAFAFA`  | Alternate section backgrounds               |
| Dark Charcoal    | `#2C2C2C`  | Primary body text                           |
| Medium Gray      | `#6B7280`  | Secondary/description text                  |
| Light Gray       | `#E5E7EB`  | Borders, dividers                           |

---

## 🖋️ Typography

### Font Pairings
| Usage              | Font Family                         | Weight        | Fallback         |
|--------------------|--------------------------------------|---------------|------------------|
| Logo / Brand Name  | `Playfair Display` or `Cormorant Garamond` | 600-700 Italic | serif            |
| Section Headings   | `Playfair Display`                   | 600-700       | serif             |
| Menu Category Titles| `Cormorant Garamond`                | 500-600 Italic| serif             |
| Body / Descriptions| `Inter` or `DM Sans`                | 400-500       | sans-serif        |
| Navigation         | `DM Sans`                           | 500           | sans-serif        |
| Prices             | `DM Sans`                           | 600-700       | sans-serif        |
| CTAs / Buttons     | `DM Sans`                           | 600           | sans-serif        |

### Font Sizes (Desktop → Mobile)
| Element            | Desktop   | Tablet    | Mobile    |
|--------------------|-----------|-----------|-----------|
| Hero Heading       | 56-64px   | 42-48px   | 32-36px   |
| Section Heading    | 40-48px   | 32-36px   | 28-32px   |
| Menu Category      | 32-36px   | 28px      | 24px      |
| Card Title         | 20-24px   | 18-20px   | 16-18px   |
| Body Text          | 16-18px   | 16px      | 14-16px   |
| Description Text   | 14-16px   | 14px      | 13-14px   |
| Price              | 18-20px   | 16-18px   | 16px      |
| Navigation Links   | 16px      | 15px      | 14px      |

---

## 🍃 Design Motifs & Decorative Elements

### Leaf Decorations (Critical Design Element)
- **Green leaves** (realistic botanical illustration style) placed at:
  - Top-right and bottom-left corners of sections (asymmetric placement)
  - Along the edges of the menu page
  - Behind food cards as subtle background elements
  - Flanking section headings
- Leaves should be **semi-transparent** (opacity 0.3–0.6) when used as backgrounds
- Use **parallax scrolling** effect on leaf elements for depth
- Mix of dark green and lighter sage green leaves
- Leaf styles: elongated bay/curry leaf shapes as seen in the physical menu

### Background Textures
- Subtle **marble/cream texture** for menu sections (matching physical menu card)
- Light **watercolor wash** effect in cream/sage tones
- Very subtle **grain/noise texture** overlay for premium feel

### Decorative Lines & Borders
- Thin ornamental borders around menu categories (similar to physical menu card borders)
- Delicate **flourish/swirl** separators between sections
- Subtle gold/brown ornamental lines matching the menu card style

---

## 📐 Layout & Page Structure

### Navigation Bar (Sticky)
┌─────────────────────────────────────────────────────────────────┐
│ 🍃 Pankhuri Reloaded Home Menu About Gallery Contact │
│ 📞 Book a Table 🔍 │
└─────────────────────────────────────────────────────────────────┘

text

- **Style**: Glassmorphism (frosted glass effect) on scroll
- **Background**: White with slight transparency → becomes frosted on scroll
- **Logo**: Left-aligned, calligraphy style
- **Nav Links**: Center-aligned, DM Sans 500
- **CTA Button**: "Book a Table" — Green filled button with rounded corners
- **Active state**: Green underline animation
- **Mobile**: Hamburger menu with slide-in drawer (leaf pattern background)

---

### Section 1: Hero Section
┌─────────────────────────────────────────────────────────────────┐
│ │
│ 🍃 (floating leaf, top-left) │
│ │
│ Pure Vegetarian ┌──────────────────┐ │
│ Taste the Authentic │ │ │
│ Flavors of Agra │ HERO IMAGE │ │
│ │ (Dal Makhani │ │
│ Experience the finest vegetarian │ or Thali) │ │
│ cuisine at Pankhuri Reloaded... │ │ │
│ └──────────────────┘ │
│ [Explore Menu] [Book a Table] │
│ │
│ 🍃 (floating leaf) │
└─────────────────────────────────────────────────────────────────┘

text

- **Layout**: Split — Text left (50%), Image right (50%)
- **Background**: Gradient from `#F4F9F0` to `#E8F0DE`
- **Hero Image**: Large, high-quality food photo with subtle floating animation
- **Floating Leaves**: 2-3 leaf elements with parallax + gentle rotation animation
- **Text Animation**: Staggered fade-in from left using Framer Motion
- **Buttons**: Primary (green filled), Secondary (green outline)
- **Badge**: Small "Pure Veg 🟢" badge above heading

---

### Section 2: Our Specialties / Featured Dishes
┌─────────────────────────────────────────────────────────────────┐
│ │
│ ✨ Our Chef's Specialties │
│ Handcrafted with love and tradition │
│ │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ Image │ │ Image │ │ Image │ │ Image │ │
│ │ │ │ │ │ │ │ │ │
│ │ Malai │ │ Paneer │ │ Kaju │ │ Special │ │
│ │ Kofta │ │ Pasanda │ │ Curry │ │ Thali │ │
│ │ ₹369 │ │ ₹385 │ │ ₹369 │ │ ₹359 │ │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│ │
└─────────────────────────────────────────────────────────────────┘

text

- **Background**: White
- **Cards**: Rounded corners (16px), subtle shadow, hover scale effect
- **Card hover**: Lift up + shadow increase + green border glow
- **Image**: Circular or rounded square food images
- **Animation**: Staggered scroll-triggered reveal
- **Scroll**: Horizontal scroll on mobile, grid on desktop

---

### Section 3: About / Story Section
┌─────────────────────────────────────────────────────────────────┐
│ 🍃 │
│ ┌──────────────────┐ │
│ │ │ Our Story │
│ │ RESTAURANT │ │
│ │ INTERIOR │ At Pankhuri Reloaded, we bring the │
│ │ IMAGE │ authentic flavors of India to your │
│ │ │ plate. Located in the heart of Agra, │
│ │ │ our pure vegetarian kitchen crafts │
│ └──────────────────┘ each dish with passion... │
│ │
│ [Know More] 🍃 │
└─────────────────────────────────────────────────────────────────┘

text

- **Layout**: Image left, text right (alternating pattern)
- **Background**: Light sage (`#E8F0DE`) with cream texture overlay
- **Leaf decorations**: Corner positioned, parallax movement
- **Text**: Elegant serif heading, clean sans-serif body
- **Animation**: Image slides in from left, text fades in from right

---

### Section 4: Full Menu Section (Multi-Tab)
┌─────────────────────────────────────────────────────────────────┐
│ │
│ 🍽️ Our Menu │
│ │
│ [Starters] [Main Course] [Breads] [Pasta] [Pizza] [Desserts] │
│ [Beverages] [Thali] [Salads] │
│ │
│ ─── Main Course ─── │
│ │
│ Dal Makhani ............................ ₹325 │
│ A delicious combination of lentil cooked in butter │
│ finished with cream │
│ │
│ Yellow Dal Tadka ........................ ₹299 │
│ Yellow Dal Fried with Traditional Punjabi Style │
│ │
│ (... more items ...) │
│ │
└─────────────────────────────────────────────────────────────────┘

text

- **Background**: Cream white (`#FFF9F0`) with subtle marble texture (matching menu card)
- **Tab Navigation**: Horizontal scrollable tabs, green active indicator
- **Tab Animation**: Smooth underline slide + content fade transition
- **Menu Items**: 
  - Item name (bold, dark brown) + Price (bold, orange/saffron) on same line
  - Description in lighter gray below
  - Dotted line or spaced dots connecting name to price
  - Optional: Small veg indicator (green dot) next to each item
- **Category Headers**: Italic serif font matching physical menu style
- **Decorative**: Leaf illustrations at corners of the menu section
- **Layout**: 2-column grid on desktop, single column on mobile
- **Animation**: Tab content slides in with Framer Motion `AnimatePresence`

---

### Section 5: Customer Testimonials
┌─────────────────────────────────────────────────────────────────┐
│ │
│ What Our Guests Say 💬 │
│ │
│ ┌─────────────────────────────────────────┐ │
│ │ "The Dal Makhani here is the best │ │
│ │ I've ever had! True Agra flavors." │ │
│ │ │ │
│ │ ⭐⭐⭐⭐⭐ — Rahul S. │ │
│ └─────────────────────────────────────────┘ │
│ │
│ ● ○ ○ ○ │
│ │
└─────────────────────────────────────────────────────────────────┘

text

- **Background**: Gradient sage green
- **Card**: White card with quote icon, elevated shadow
- **Carousel**: Auto-play + manual navigation dots
- **Animation**: Slide transition between testimonials
- **Quote icon**: Large green quotation mark

---

### Section 6: Gallery / Ambiance
┌─────────────────────────────────────────────────────────────────┐
│ │
│ 📸 Our Ambiance & Dishes │
│ │
│ ┌─────┐ ┌─────────┐ ┌─────┐ │
│ │ │ │ │ │ │ │
│ │ │ │ │ │ │ │
│ └─────┘ └─────────┘ └─────┘ │
│ ┌─────────┐ ┌─────┐ ┌─────┐ │
│ │ │ │ │ │ │ │
│ │ │ │ │ │ │ │
│ └─────────┘ └─────┘ └─────┘ │
│ │
└─────────────────────────────────────────────────────────────────┘

text

- **Layout**: Masonry grid
- **Hover Effect**: Slight zoom + dark overlay with dish name
- **Lightbox**: Full-screen image view on click
- **Animation**: Staggered scroll reveal

---

### Section 7: Location & Contact
┌─────────────────────────────────────────────────────────────────┐
│ │
│ Visit Us ┌────────────────────┐ │
│ │ │ │
│ 📍 Address in Agra │ GOOGLE MAP │ │
│ 📞 Phone Number │ EMBED │ │
│ 🕐 Open: 11AM - 11PM │ │ │
│ 📧 Email └────────────────────┘ │
│ │
│ [Get Directions] │
│ │
└─────────────────────────────────────────────────────────────────┘

text

- **Background**: White
- **Map**: Embedded Google Maps (styled/dark theme)
- **Contact cards**: Icon + text with hover animations

---

### Section 8: Footer
┌─────────────────────────────────────────────────────────────────┐
│ 🍃 Pankhuri Reloaded │
│ Pure Vegetarian Restaurant, Agra │
│ │
│ Quick Links Menu Follow Us Newsletter │
│ Home Starters 📘 Facebook Enter your email │
│ About Main Course 📷 Instagram [Subscribe] │
│ Menu Breads 🐦 Twitter │
│ Contact Desserts 📺 YouTube │
│ │
│ ───────────────────────────────────────────────────────── │
│ © 2025 Pankhuri Reloaded. All rights reserved. │
│ 🍃 🍃 🍃 (decorative leaf border) │
└─────────────────────────────────────────────────────────────────┘

text

- **Background**: Dark forest green (`#1A3A0A`) or deep charcoal
- **Text**: White/light sage
- **Leaf decorations**: Subtle leaf pattern border at top
- **Social icons**: Circular with hover glow effect

---

## 🎬 Animation Specifications

### Global Animations (Framer Motion)
| Element            | Animation Type              | Trigger        | Duration  | Easing          |
|--------------------|-----------------------------|----------------|-----------|-----------------|
| Page Load          | Fade in + slide up          | Mount          | 0.6s      | easeOut         |
| Section Headings   | Fade in + slide up          | Scroll into view| 0.5s     | easeOut         |
| Food Cards         | Staggered scale in          | Scroll into view| 0.3s each| spring          |
| Menu Items         | Staggered fade in from left | Scroll/Tab     | 0.2s each | easeInOut       |
| Floating Leaves    | Gentle float + rotate       | Continuous     | 6-8s loop | linear          |
| Hero Image         | Subtle float up/down        | Continuous     | 4s loop   | easeInOut       |
| Tab Content        | Slide + fade (AnimatePresence)| Tab change   | 0.3s      | easeInOut       |
| Navbar             | Backdrop blur on scroll     | Scroll > 50px  | 0.3s      | easeOut         |
| Button Hover       | Scale 1.05 + shadow         | Hover          | 0.2s      | easeOut         |
| Card Hover         | Y: -8px + shadow increase   | Hover          | 0.2s      | easeOut         |
| Testimonial Slider | Slide left/right            | Auto / Click   | 0.5s      | easeInOut       |
| Gallery Images     | Staggered reveal + zoom     | Scroll         | 0.4s each | easeOut         |
| Parallax Leaves    | Y-axis movement on scroll   | Scroll         | Continuous| linear          |
| Page Transitions   | Fade + slide                | Route change   | 0.4s      | easeInOut       |

### Micro-interactions
- **Menu tab underline**: Smooth slide to active tab position
- **Price numbers**: Subtle count-up animation on scroll reveal
- **Veg indicator dot**: Gentle pulse animation
- **"Book a Table" button**: Subtle shine/shimmer effect loop
- **Scroll indicator**: Bouncing arrow at bottom of hero
- **Loading state**: Leaf spinning animation

---

## 📱 Responsive Breakpoints
| Breakpoint    | Width       | Layout Changes                                |
|---------------|-------------|------------------------------------------------|
| Desktop XL    | ≥ 1440px    | Max-width container, spacious padding          |
| Desktop       | ≥ 1024px    | Full layout as designed                        |
| Tablet        | ≥ 768px     | 2-column grids, adjusted spacing               |
| Mobile L      | ≥ 425px     | Single column, hamburger menu, stacked layout  |
| Mobile S      | < 425px     | Compact spacing, smaller fonts                 |

---

## 🖼️ Image Requirements
| Image Type          | Dimensions      | Format     | Notes                        |
|---------------------|-----------------|------------|------------------------------|
| Hero Food Image     | 800x800px       | WebP/PNG   | Transparent background       |
| Food Card Images    | 400x400px       | WebP       | Circular crop or rounded     |
| Gallery Images      | 800x600px       | WebP       | High quality, color graded   |
| Restaurant Interior | 1200x800px      | WebP       | Warm lighting preferred      |
| Leaf Decorations    | Various         | SVG/PNG    | Transparent, high-res        |
| Logo                | 200x80px        | SVG        | Vector format                |
| Background Textures | 1920x1080px     | WebP       | Seamless/tileable            |

---

## ✨ Special Design Notes

1. **"Pure Vegetarian" Badge**: Green badge with "🟢 Pure Veg" prominently displayed in hero and header
2. **Agra Identity**: Subtle Taj Mahal silhouette watermark or icon in footer/about section
3. **Menu Card Feel**: The full menu page should visually resemble the physical menu — cream background, ornamental borders, italic serif headers, leaf decorations at corners
4. **Indian Aesthetic**: Incorporate subtle Indian design patterns (paisley, mandala borders) very lightly in backgrounds
5. **WhatsApp Integration**: Floating WhatsApp button for quick table booking
6. **Dark Mode**: Optional — but if included, use dark green (`#0A1F05`) as base
7. **Cursor**: Custom cursor with subtle leaf trail effect on desktop (optional, premium touch)
8. **Preloader**: Animated logo with leaves growing around it

---

## 📄 Pages Required
1. **Home** — Hero, Specialties, About snippet, Testimonials, CTA
2. **Menu** — Full categorized menu with tabs/accordion
3. **About** — Story, Team, Values, Agra connection
4. **Gallery** — Food photography + restaurant ambiance
5. **Contact** — Form, Map, Details, Reservation