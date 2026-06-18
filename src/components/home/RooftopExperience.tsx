'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Compass, Landmark, Clock } from 'lucide-react';
import Container from '../ui/Container';
import BackgroundTexture from '../decorations/BackgroundTexture';
import Card from '../ui/Card';

const highlights = [
  {
    icon: Landmark,
    title: '0.5 km to South Gate',
    description: 'Walking distance from the entry of the Taj Mahal.',
    color: 'text-[#B22222] bg-[#B22222]/10 border-[#B22222]/20',
  },
  {
    icon: Compass,
    title: '360° Panoramic View',
    description: 'Stunning unblocked views of the Taj Mahal and surrounding Agra.',
    color: 'text-accent-saffron bg-accent-saffron/10 border-accent-saffron/20',
  },
  {
    icon: MapPin,
    title: 'Rooftop Seating',
    description: 'Enjoy fresh air and historical scenery while you dine.',
    color: 'text-green-700 bg-green-50 border-green-200/50',
  },
  {
    icon: Clock,
    title: 'Happy Hour 6-7 PM',
    description: 'Special offers during Agra&apos;s beautiful sunset hours.',
    color: 'text-blue-700 bg-blue-50 border-blue-200/50',
  },
];

export default function RooftopExperience() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background marble pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BackgroundTexture variant="marble" className="w-full h-full" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and highlights */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          <span className="text-[#B22222] font-body font-semibold tracking-widest text-xs uppercase bg-[#B22222]/10 px-3 py-1 rounded-full">
            Signature Experience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight">
            Dine with a Breathtaking <br />
            <span className="italic text-accent-saffron font-normal">View of the Taj Mahal</span>
          </h2>
          <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
            Perched on our rooftop terrace, you can enjoy authentic Indian spices while looking directly at the world&apos;s symbol of love. Watch the changing colors of the Taj Mahal dome during sunrise, sunset, and under the moonlit sky.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Card key={i} className="p-5 flex gap-4 items-start bg-white/80 border border-primary-100/30 hover:border-accent-saffron/50 transition-colors">
                  <div className={`p-2.5 rounded-lg flex-shrink-0 ${h.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary-950 text-base mb-1">{h.title}</h4>
                    <p className="font-body text-xs text-gray-500 leading-relaxed">{h.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Showcase image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800"
            alt="Sunset view of Taj Mahal from rooftop"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="font-heading text-lg font-bold">Panoramic Sunset View</p>
            <p className="font-body text-xs text-white/80">Captured directly from our dining deck</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
