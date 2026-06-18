'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant-info';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FloatingLeaf from '../decorations/FloatingLeaf';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#7B1818] to-[#450C0C] text-white overflow-hidden">
      {/* Mahadev Shiva Background (Premium blending) */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
        <Image
          src="/images/mahadev_shiva.png"
          alt="Meditating Lord Shiva Background"
          fill
          className="object-contain object-right md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Background decoration leaves */}
      <FloatingLeaf size="lg" rotation={45} opacity={0.15} delay={0.5} duration={9} className="top-10 -left-10 text-primary-200" />
      <FloatingLeaf size="md" rotation={-60} opacity={0.12} delay={2} duration={7} className="bottom-10 right-10 text-primary-200" />

      <Container className="relative z-10 text-center max-w-3xl flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-orange font-body font-semibold tracking-widest text-xs uppercase"
        >
          Special Dining Experience
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Reserve Your Table and Share <br />
          <span className="italic font-normal text-primary-200">the Joy of Flavorful Food</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-primary-200 text-sm md:text-base leading-relaxed max-w-xl"
        >
          Planning a family dinner, celebration, or a cozy evening? Book your table today and experience the finest pure vegetarian dining in Agra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mt-4"
        >
          <Link href="/contact">
            <Button
              variant="accent"
              size="lg"
              className="flex items-center gap-2 bg-accent-orange hover:bg-orange-600 text-white font-semibold rounded-full border border-transparent"
              iconLeft={<Calendar className="w-5 h-5" />}
            >
              Book Online
            </Button>
          </Link>
          <a href={`tel:${restaurantInfo.phone}`}>
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center gap-2 border-white/60 text-white hover:bg-white/10 active:bg-white/20 rounded-full"
              iconLeft={<Phone className="w-5 h-5" />}
            >
              Call {restaurantInfo.phone}
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
