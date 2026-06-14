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
