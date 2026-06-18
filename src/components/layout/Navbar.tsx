'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
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
          <Link href="/" className="flex items-center gap-3 group">
            {/* SV Monogram Circular Badge */}
            <div className="w-10 h-10 rounded-full border-2 border-accent-saffron/80 flex items-center justify-center bg-white shadow-sm group-hover:border-accent-saffron transition-colors">
              <span className="font-heading font-black text-base text-accent-saffron leading-none tracking-tighter">
                SV
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-heading italic text-xl md:text-2xl font-extrabold text-primary-950 leading-none tracking-wide group-hover:text-primary-800 transition-colors">
                Shankara Vegis
              </span>
              <span className="font-body text-[8px] font-extrabold uppercase tracking-[0.2em] text-accent-maroon leading-none mt-1">
                Since 1992
              </span>
            </div>
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
            <Link href="/contact#reserve">
              <Button
                size="sm"
                className="flex items-center gap-2 text-xs bg-[#7B1818] hover:bg-[#B22222] active:bg-[#601212] text-white hover:text-white border-0 shadow-md"
              >
                📞 Reserve
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
