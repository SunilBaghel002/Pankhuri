'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, UtensilsCrossed } from 'lucide-react';
import Button from '../ui/Button';
import FloatingLeaf from '../decorations/FloatingLeaf';
import LotusFlower from '../decorations/LotusFlower';
import OmSymbol from '../decorations/OmSymbol';
import TajSilhouette from '../decorations/TajSilhouette';
import Container from '../ui/Container';
import BackgroundTexture from '../decorations/BackgroundTexture';

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 22 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  // Parallax transform coefficients for seal background
  const xSeal = useTransform(xSpring, [-1, 1], [-6, 6]);
  const ySeal = useTransform(ySpring, [-1, 1], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1; // scale to [-1, 1]
      const y = (clientY / innerHeight) * 2 - 1; // scale to [-1, 1]
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 16,
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-96px)] flex items-center bg-gradient-to-b from-[#FCFAF7] via-white to-white py-16 md:py-24 overflow-hidden">
      {/* Background Marble Texture overlay (extremely light) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]">
        <BackgroundTexture variant="marble" className="w-full h-full" />
      </div>

      {/* Mahadev Om Symbol Carving Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] lg:w-[750px] lg:h-[750px] z-0 opacity-[0.035] pointer-events-none select-none mix-blend-overlay">
        <Image
          src="/images/mahadev_om.jpg"
          alt="Mahadev Om Stone Carving Background"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 350px, (max-width: 1024px) 550px, 750px"
          priority
        />
      </div>

      {/* Taj Mahal Silhouette Watermark in Hero Background */}
      <div className="absolute -bottom-4 left-0 right-0 h-48 md:h-72 z-0 opacity-[0.05] pointer-events-none">
        <TajSilhouette className="w-full h-full object-cover object-bottom" />
      </div>

      {/* Background Floating Leaves & Lotus Flowers */}
      <FloatingLeaf size="lg" rotation={15} opacity={0.18} delay={0} duration={8} className="top-12 left-8 text-primary-300" />
      <LotusFlower size="md" rotation={10} opacity={0.25} delay={1.5} duration={7} className="top-24 right-1/4" />
      <FloatingLeaf size="md" rotation={45} opacity={0.15} delay={2} duration={6} className="bottom-20 left-1/4 text-primary-200" />
      <LotusFlower size="sm" rotation={-15} opacity={0.2} delay={3.5} duration={6} className="bottom-12 right-1/3" />
      <FloatingLeaf size="sm" rotation={-30} opacity={0.25} delay={4} duration={7} className="top-24 right-12 text-primary-300" />

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Column: Typographic presentation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start gap-5 text-left max-w-xl"
        >
          {/* Om symbol and line art ornament */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <OmSymbol size={36} className="text-accent-saffron opacity-85" />
            <svg className="w-12 h-6 text-primary-750/70" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4,10 L36,10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <path d="M20,2 C21,2 23,5 21,7 C19,9 18,9 17,7 C16,5 19,2 20,2 Z" fill="currentColor" opacity="0.6"/>
            </svg>
          </motion.div>

          {/* Badges Carousel Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 text-[10px] font-extrabold uppercase tracking-wider font-body"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50/90 border border-green-200/50 text-green-700 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              🟢 Pure Veg & Vegan
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#B22222]/10 border border-[#B22222]/20 text-[#B22222] shadow-sm">
              🏆 Lonely Planet Rec.
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50/90 border border-amber-200/50 text-accent-saffron shadow-sm">
              ⭐ TripAdvisor 2025
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/50 text-blue-700 shadow-sm">
              💧 Mineral Water Cooked
            </span>
          </motion.div>

          {/* Majestic Heading */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-950 leading-[1.15] tracking-tight">
              Authentic Vegetarian Cuisine with a
              <span className="font-serif italic font-normal text-accent-orange block mt-2 text-4xl md:text-5xl lg:text-6xl">
                360° Taj Mahal View
              </span>
            </h1>
            {/* Elegant Divider Line */}
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-accent-red via-accent-saffron to-accent-orange rounded-full mt-4" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm md:text-base leading-relaxed font-body"
          >
            Welcome to <span className="font-bold text-[#7B1818]">Shankara Vegis Restaurant</span>. Established in 1992, our family-owned rooftop sanctuary in Tajganj serves delicious pure vegetarian and vegan Indian culinary traditions with spectacular panoramic views.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link href="/contact#reserve">
              <Button
                size="md"
                className="flex items-center gap-2 group bg-[#7B1818] hover:bg-[#B22222] border-0 text-white shadow-md"
                iconLeft={<Calendar className="w-4 h-4" />}
              >
                Reserve a Table
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="secondary"
                size="md"
                className="flex items-center gap-2 hover:bg-primary-500 hover:text-white border-2 border-primary-500 transition-colors"
                iconLeft={<UtensilsCrossed className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />}
              >
                View Menu
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Culinary Collage with Parallax */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[400px] md:h-[500px] overflow-visible select-none">
          {/* Radial soft lighting background */}
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-accent-saffron/10 rounded-full blur-[70px] -z-20 scale-95" />

          {/* SVG Rotating Seal (Very Light Saffron) */}
          <motion.div
            style={{ x: xSeal, y: ySeal }}
            className="absolute -z-10 flex items-center justify-center pointer-events-none"
          >
            <svg className="w-[360px] h-[360px] md:w-[460px] md:h-[460px] opacity-[0.05] text-primary-950" viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                style={{ originX: '100px', originY: '100px' }}
              >
                <text fill="currentColor" fontSize="7.5" letterSpacing="4.5" className="font-heading font-extrabold uppercase">
                  <textPath href="#circlePath">
                    ✦ SHANKARA VEGIS RESTAURANT ✦ 360 TAJ MAHAL VIEW ✦ SINCE 1992 ✦
                  </textPath>
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Platter Layer 1: Main grand thali with Taj view */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7.5,
              ease: 'easeInOut',
            }}
            className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full shadow-xl border-4 border-white z-10"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-primary-900/10">
              <Image
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
                alt="Taj Mahal View from Shankara Rooftop"
                fill
                priority
                sizes="(max-width: 768px) 260px, 350px"
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Platter Layer 2: Dal Makhani (Foreground, left) */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, -4, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
              delay: 0.5
            }}
            className="absolute -bottom-2 left-4 md:bottom-2 md:left-8 w-[110px] h-[110px] md:w-[155px] md:h-[155px] rounded-full shadow-lg border-4 border-white z-20"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-primary-900/10">
              <Image
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400"
                alt="Creamy Dal Makhani cooked with mineral water"
                fill
                sizes="(max-width: 768px) 110px, 155px"
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Platter Layer 3: Masala Dosa (Foreground, right) */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: 'easeInOut',
              delay: 1
            }}
            className="absolute -top-2 right-4 md:top-2 md:right-8 w-[95px] h-[95px] md:w-[130px] md:h-[130px] rounded-full shadow-lg border-4 border-white z-20"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-primary-900/10">
              <Image
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=400"
                alt="Crispy South Indian Masala Dosa"
                fill
                sizes="(max-width: 768px) 95px, 130px"
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
