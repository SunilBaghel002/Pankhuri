'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
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
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent-saffron/80 flex items-center justify-center bg-white shadow-sm mb-2">
                <span className="font-heading font-black text-xl text-accent-saffron leading-none tracking-tighter">
                  SV
                </span>
              </div>
              <span className="font-heading italic text-2xl font-bold text-primary-900 block leading-tight">
                Shankara Vegis
              </span>
              <span className="font-body text-[8px] font-bold uppercase tracking-widest text-accent-maroon block mt-0.5">
                Since 1992
              </span>
              <span className="block text-green-700 text-[10px] font-extrabold mt-1">🟢 PURE VEG & VEGAN</span>
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
                <Link href="/contact#reserve" onClick={onClose} className="block w-full">
                  <Button className="w-full flex items-center justify-center gap-2 bg-[#7B1818] hover:bg-[#B22222] border-0 text-white shadow-md" size="md">
                    📞 Reserve a Table
                  </Button>
                </Link>
              </motion.div>
            </nav>

            {/* Contact / Footer Details */}
            <div className="mt-auto pt-6 border-t border-primary-100 flex flex-col gap-3 text-sm text-primary-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-600" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-accent-orange font-semibold">
                  {restaurantInfo.phoneDisplay}
                </a>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                Open Daily: 8:00 AM - 10:30 PM
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
