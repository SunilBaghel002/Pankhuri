'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();

  const isHidden = scrollDirection === 'down' && !isAtTop;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full',
          isAtTop
            ? 'bg-transparent py-5'
            : 'bg-white/80 backdrop-blur-md py-3 shadow-nav border-b border-primary-100/30'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo matching menu cover page */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-heading italic text-2xl md:text-3xl font-extrabold text-primary-950 leading-none tracking-wide group-hover:text-primary-800 transition-colors">
              Pankhuri
            </span>
            <span className="font-body text-[9px] font-extrabold uppercase tracking-[0.25em] text-accent-orange leading-none mt-1 pl-[0.1em]">
              Reloaded
            </span>
            <span className="text-[8px] text-red-600 font-bold italic mt-1 leading-none">
              (Pure Vegetarian)
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-body text-sm font-semibold relative py-1.5 transition-colors',
                    isActive ? 'text-primary-600' : 'text-primary-900 hover:text-primary-600'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-2 text-xs"
                iconLeft={<Calendar className="w-3.5 h-3.5" />}
              >
                Book a Table
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-primary-900 hover:text-primary-600 p-1 rounded-md focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
