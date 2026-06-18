'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Calendar } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant-info';
import Button from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] bg-brand-cream border-l border-primary-100 shadow-2xl p-6 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="text-primary-800 hover:text-accent-orange p-1 rounded-full hover:bg-primary-50 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Logo/Header */}
            <div className="text-center mb-8">
              <span className="font-heading italic text-3xl font-bold text-primary-900 block">
                Pankhuri
              </span>
              <span className="font-body text-[10px] font-bold uppercase tracking-widest text-accent-orange">
                Reloaded
              </span>
              <span className="block text-green-600 text-[10px] font-bold mt-1">🟢 PURE VEG</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`font-body text-base font-semibold block transition-colors ${
                        isActive ? 'text-primary-600' : 'text-primary-900 hover:text-primary-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={itemVariants} className="pt-4 border-t border-primary-100">
                <Link href="/contact" onClick={onClose} className="block w-full">
                  <Button variant="primary" className="w-full flex items-center justify-center gap-2" size="md">
                    <Calendar className="w-4 h-4" /> Book a Table
                  </Button>
                </Link>
              </motion.div>
            </nav>

            {/* Contact / Footer Details */}
            <div className="mt-auto pt-6 border-t border-primary-100 flex flex-col gap-3 text-sm text-primary-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-accent-orange font-semibold">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                Open Daily: 11:00 AM - 11:00 PM
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
