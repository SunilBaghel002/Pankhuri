'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, Droplets, Leaf, Eye } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const reasons = [
  {
    icon: Award,
    title: 'Lonely Planet Recommended',
    description: 'Trusted and vetted by the world\'s leading travel guide publisher.',
    color: 'text-[#B22222] bg-[#B22222]/10 border-[#B22222]/20',
  },
  {
    icon: Star,
    title: 'TripAdvisor Excellence 2025',
    description: 'Highly rated by hundreds of travelers for our food and service.',
    color: 'text-accent-saffron bg-accent-saffron/10 border-accent-saffron/20',
  },
  {
    icon: Users,
    title: 'Family Owned Since 1992',
    description: 'Over 30 years of hospitality, serving authentic home-style recipes.',
    color: 'text-amber-700 bg-amber-50 border-amber-200/50',
  },
  {
    icon: Droplets,
    title: 'Cooked with Mineral Water',
    description: '100% committed to hygiene. All cooking uses premium packaged mineral water.',
    color: 'text-blue-700 bg-blue-50 border-blue-200/50',
  },
  {
    icon: Leaf,
    title: 'Pure Veg & Vegan Options',
    description: 'Completely vegetarian kitchen with clear labels for vegan diets.',
    color: 'text-green-700 bg-green-50 border-green-200/50',
  },
  {
    icon: Eye,
    title: '360° Taj Mahal View',
    description: 'Unmatched rooftop dining overlook representing Agra\'s prime location.',
    color: 'text-teal-700 bg-teal-50 border-teal-200/50',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F4F9F0] to-white relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          title="Why Choose Shankara"
          subtitle="Our Commitment to Quality & Heritage"
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full p-6 md:p-8 flex flex-col gap-4 bg-white hover:border-accent-saffron/40 hover:shadow-card-hover transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${r.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-primary-950">
                    {r.title}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                    {r.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
