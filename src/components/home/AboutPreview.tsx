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
            src="/images/interior_peacock.jpg"
            alt="Pankhuri Reloaded Ambiance"
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
            Crafting Culinary Heritage <br />
            <span className="italic text-primary-700 font-normal">in the Heart of Agra</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
            At <span className="font-semibold text-primary-900">Pankhuri Reloaded</span>, we bring Agra&apos;s authentic vegetarian heritage to life. Nestled in the city of the Taj Mahal, our kitchen is a sanctuary of flavors, serving 100% pure vegetarian dishes cooked with traditional spices and modern elegance.
          </p>
          <p className="font-body text-gray-500 leading-relaxed text-xs md:text-sm">
            From overnight slow-simmered Dal Makhani to aromatic tandoori breads, each dish tells a story of Indian hospitality and authentic culinary legacy.
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
