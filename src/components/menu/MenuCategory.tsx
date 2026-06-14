'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory as MenuCategoryType } from '@/types/menu';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="relative border border-accent-saffron/25 rounded-2xl p-6 md:p-10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      {/* Corner Decorative Ornaments (Mimicking physical menu) */}
      <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t border-l border-accent-saffron/30 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t border-r border-accent-saffron/30 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b border-l border-accent-saffron/30 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b border-r border-accent-saffron/30 pointer-events-none" />

      {/* Category Heading in italic serif Cormorant Garamond */}
      <div className="text-center mb-8 relative">
        <h3 className="font-accent italic text-3xl md:text-4xl font-extrabold text-brand-brown inline-block relative">
          {category.name}
        </h3>
        <div className="w-16 h-[1.5px] bg-accent-saffron/50 mx-auto mt-2" />
      </div>

      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1 relative z-10">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
