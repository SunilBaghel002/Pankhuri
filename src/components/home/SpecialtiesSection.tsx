'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { menuData } from '@/data/menu';
import { MenuItem } from '@/types/menu';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import VegIndicator from '../shared/VegIndicator';
import Button from '../ui/Button';

// Gather 4 specific chef special items
const chefSpecialIds = ['dal-makhani', 'palak-paneer', 'masala-dosa', 'special-thali'];

export default function SpecialtiesSection() {
  // Extract specials with images mapping
  const specials: MenuItem[] = [];
  menuData.forEach((category) => {
    category.items.forEach((item) => {
      if (chefSpecialIds.includes(item.id)) {
        let image = '';
        if (item.id === 'dal-makhani') {
          image = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400';
        } else if (item.id === 'palak-paneer') {
          image = 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400';
        } else if (item.id === 'masala-dosa') {
          image = 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=400';
        } else if (item.id === 'special-thali') {
          image = 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400';
        }
        specials.push({ ...item, image });
      }
    });
  });

  // Re-order to match list
  const orderedSpecials = chefSpecialIds
    .map((id) => specials.find((s) => s.id === id))
    .filter(Boolean) as MenuItem[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="Our Chef's Specialties"
          subtitle="Handcrafted with Love & Tradition"
          align="center"
        />

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {orderedSpecials.map((dish) => (
            <motion.div key={dish.id} variants={cardVariants}>
              <Card className="h-full flex flex-col group hover:border-primary-300 hover:shadow-card-hover duration-300">
                {/* Dish Image Wrapper */}
                <div className="relative h-56 w-full overflow-hidden bg-primary-50">
                  <Image
                    src={dish.image || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400'}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Veg Indicator Badge overlay */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <VegIndicator size="sm" />
                    <span className="text-[9px] font-bold uppercase text-green-700 tracking-wider">Pure Veg</span>
                  </div>
                  {/* Price Tag overlay */}
                  <div className="absolute bottom-4 right-4 z-10 bg-accent-orange text-white font-body font-bold px-3 py-1 rounded-full shadow-md text-sm">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Card details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-xl font-bold text-primary-950 group-hover:text-primary-600 transition-colors">
                      {dish.name}
                    </h3>
                    {dish.description && (
                      <p className="font-body text-gray-500 text-xs leading-relaxed line-clamp-3">
                        {dish.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action menu button */}
        <div className="flex justify-center mt-6">
          <Link href="/menu">
            <Button
              variant="secondary"
              size="md"
              className="flex items-center gap-2 group"
            >
              View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
