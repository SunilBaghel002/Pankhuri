'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { galleryData } from '@/data/gallery';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function GalleryPreview() {
  const previewItems = galleryData.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          title="Our Ambiance & Dishes"
          subtitle="Captured Moments of Culinary Art"
          align="center"
        />

        {/* Grid Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {previewItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-card border border-primary-100/20 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-10">
                <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Link href="/gallery">
            <Button
              variant="secondary"
              size="md"
              className="flex items-center gap-2 group"
            >
              View Full Gallery <Camera className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
