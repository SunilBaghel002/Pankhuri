'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '@/data/gallery';
import Lightbox from './Lightbox';

const filterCategories: Array<{ id: 'all' | 'food' | 'interior' | 'ambiance'; label: string }> = [
  { id: 'all', label: 'All Photos' },
  { id: 'food', label: 'Dishes' },
  { id: 'interior', label: 'Interior' },
  { id: 'ambiance', label: 'Ambiance' },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'interior' | 'ambiance'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items
  const filteredItems = galleryData.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Category filter buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        {filterCategories.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                isActive
                  ? 'text-white bg-primary-500'
                  : 'text-primary-900 bg-white/70 border border-primary-100 hover:bg-primary-50/50 hover:border-primary-200'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter} // Re-animate grid when filter changes
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layout
              onClick={() => openLightbox(index)}
              className="relative h-72 rounded-2xl overflow-hidden group shadow-card border border-primary-100/20 cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-10">
                <span className="text-[9px] font-bold text-accent-orange uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
