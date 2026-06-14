'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, UtensilsCrossed } from 'lucide-react';
import Button from '../ui/Button';
import FloatingLeaf from '../decorations/FloatingLeaf';
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

      {/* Peacock Watercolor Art Background (Soft and elegant mural vibe) */}
      <div className="absolute inset-0 z-0 opacity-[0.08] md:opacity-[0.12] pointer-events-none select-none mix-blend-multiply">
        <Image
          src="/images/peacock_watercolor_art.jpg"
          alt="Peacock Art Background"
          fill
          className="object-cover object-left lg:object-center"
          priority
        />
      </div>

      {/* Background Floating Leaves (very soft) */}
      <FloatingLeaf size="lg" rotation={15} opacity={0.2} delay={0} duration={8} className="top-12 left-8 text-primary-300" />
      <FloatingLeaf size="md" rotation={45} opacity={0.15} delay={2} duration={6} className="bottom-20 left-1/4 text-primary-200" />
      <FloatingLeaf size="sm" rotation={-30} opacity={0.25} delay={4} duration={7} className="top-24 right-1/3 text-primary-300" />
      <FloatingLeaf size="md" rotation={-75} opacity={0.18} delay={1} duration={9} className="bottom-12 right-12 text-primary-200" />

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Column: Typographic presentation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start gap-5 text-left max-w-xl"
        >
          {/* Botanical Line Art Ornament above heading */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <svg className="w-12 h-6 text-primary-750/70" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4,10 L36,10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <path d="M20,2 C21,2 23,5 21,7 C19,9 18,9 17,7 C16,5 19,2 20,2 Z" fill="currentColor" opacity="0.6"/>
              <path d="M11,6 C12,6 14,9 12,11 C10,13 9,13 8,11 C7,9 10,6 11,6 Z" fill="currentColor" opacity="0.4"/>
              <path d="M29,6 C30,6 32,9 30,11 C28,13 27,13 26,11 C25,9 28,6 29,6 Z" fill="currentColor" opacity="0.4"/>
            </svg>
          </motion.div>

          {/* Pure Veg Capsule */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-50/80 border border-green-200/50 text-green-700 font-body text-[11px] font-extrabold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            100% Pure Vegetarian Fine Dining
          </motion.div>

          {/* Majestic Heading */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-950 leading-[1.15] tracking-tight">
              Where Taste Meets
              <span className="font-serif italic font-normal text-accent-orange block mt-2 text-5xl md:text-6xl lg:text-7xl">
                Indian Hospitality
              </span>
            </h1>
            {/* Elegant Divider Line */}
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-primary-600 to-accent-orange rounded-full mt-4" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm md:text-base leading-relaxed font-body"
          >
            Welcome to <span className="font-bold text-primary-900">Pankhuri Reloaded</span>. Located near the iconic Taj Mahal, we craft authentic Indian delicacies in a strictly vegetarian kitchen, delivering premium dining and culinary excellence to Agra.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link href="/menu">
              <Button
                variant="primary"
                size="md"
                className="flex items-center gap-2 group shadow-md"
                iconLeft={<UtensilsCrossed className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />}
              >
                Explore Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="md"
                className="flex items-center gap-2 hover:bg-primary-500 hover:text-white border-2 border-primary-500 transition-colors"
                iconLeft={<Calendar className="w-4 h-4" />}
              >
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Culinary Collage with Parallax */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[400px] md:h-[500px] overflow-visible select-none">
          {/* Radial soft lighting background */}
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-primary-100/20 rounded-full blur-[70px] -z-20 scale-95" />

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
                transition={{ repeat: Infinity, duration: 36, ease: 'linear' }}
                style={{ originX: '100px', originY: '100px' }}
              >
                <text fill="currentColor" fontSize="7" letterSpacing="5" className="font-heading font-extrabold uppercase">
                  <textPath href="#circlePath">
                    ✦ PURE VEGETARIAN ✦ FINE DINING AGRA ✦ PANKHURI RELOADED ✦
                  </textPath>
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Platter Layer 1: Main grand thali */}
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
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800"
                alt="Pankhuri Grand Thali Platter"
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
                alt="Creamy Dal Makhani"
                fill
                sizes="(max-width: 768px) 110px, 155px"
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Platter Layer 3: Paneer Tikka (Foreground, right) */}
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
                src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400"
                alt="Tandoori Paneer Tikka"
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
