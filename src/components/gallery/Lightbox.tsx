'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 text-white/75 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-10 focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 text-white/75 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-10 focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-5xl w-full h-[65vh] md:h-[75vh]"
          >
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Metadata */}
          <div className="text-center text-white max-w-xl mt-6 flex flex-col gap-1 relative z-10">
            <span className="text-[10px] font-bold text-accent-orange uppercase tracking-widest font-body">
              {currentItem.category}
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-bold">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="font-body text-gray-400 text-xs md:text-sm max-w-md mx-auto">
                {currentItem.description}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
