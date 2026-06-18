'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import ParallaxLeaf from '../decorations/ParallaxLeaf';
import BackgroundTexture from '../decorations/BackgroundTexture';

export default function AboutPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background paper texture overlay */}
      <div className="absolute inset-0 z-0">
        <BackgroundTexture variant="marble" className="w-full h-full opacity-90" />
      </div>

      {/* Parallax Leaf decorations for depth */}
      <ParallaxLeaf size="lg" speed={1.2} rotation={45} opacity={0.3} className="top-10 -left-10 text-primary-500" />
      <ParallaxLeaf size="md" speed={0.8} rotation={-35} opacity={0.25} className="bottom-12 -right-8 text-primary-400" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Animated Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="lg:col-span-6 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-card border-4 border-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
            alt="Shankara Vegis Restaurant Taj Mahal Rooftop View"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Side: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, type: 'spring', delay: 0.15 }}
          className="lg:col-span-6 flex flex-col items-start gap-5"
        >
          <span className="text-accent-orange font-body font-semibold tracking-widest text-xs uppercase">
            Our Story
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight">
            Family Owned Heritage <br />
            <span className="italic text-accent-saffron font-normal">Since 1992 in Agra</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
            At <span className="font-semibold text-accent-maroon">Shankara Vegis Restaurant</span>, we have been welcoming families and travelers for over three decades. Located near the Taj Mahal South Gate, our kitchen serves delicious pure vegetarian and vegan options prepared with mineral water for the highest hygiene standards.
          </p>
          <p className="font-body text-gray-500 leading-relaxed text-xs md:text-sm">
            From overnight slow-simmered Dal Makhani to crispy South Indian Masala Dosa, each dish is made with devotion, offering a perfect dining experience with a 360° view.
          </p>
          <Link href="/about" className="mt-2">
            <Button variant="primary" size="md" className="flex items-center gap-2 group">
              Know Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
