'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '@/data/menu';
import MenuCategory from './MenuCategory';

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  const activeCategory = menuData.find((cat) => cat.id === activeTab);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Tabs list with horizontal scroll */}
      <div className="flex justify-start md:justify-center overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        <div className="flex gap-2.5 md:gap-3.5 md:flex-wrap justify-start md:justify-center">
          {menuData.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold whitespace-nowrap transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                  isActive
                    ? 'text-white'
                    : 'text-primary-900 bg-white/70 backdrop-blur-sm border border-primary-100/50 hover:bg-primary-50/50 hover:border-primary-200'
                }`}
              >
                {/* Active Background Slide */}
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-primary-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category view */}
      <div className="relative min-h-[350px]">
        <AnimatePresence mode="wait">
          {activeCategory && (
            <MenuCategory key={activeCategory.id} category={activeCategory} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
