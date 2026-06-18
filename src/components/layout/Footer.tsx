'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { restaurantInfo } from '@/data/restaurant-info';
import Container from '../ui/Container';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="relative bg-primary-900 text-primary-100 overflow-hidden pt-16 pb-8 border-t border-primary-800">
      {/* Peacock Feather Background (Premium blending) */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay">
        <Image
          src="/images/peacock_feather_left.jpg"
          alt="Peacock Feather Background"
          fill
          className="object-cover object-left md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Decorative leaf border pattern at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 opacity-80" />

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 relative z-10">
        {/* About Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col items-start">
            <span className="font-heading italic text-3xl font-bold text-white tracking-wide">
              Pankhuri
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] text-accent-orange leading-none mt-1 pl-[0.1em]">
              Reloaded
            </span>
            <span className="text-[9px] text-red-400 font-bold italic mt-1 leading-none">
              (Pure Vegetarian)
            </span>
          </Link>
          <p className="text-primary-200 text-sm leading-relaxed mt-2">
            Experience the authentic flavors of India. Crafted with passion, using fresh local ingredients in a pure vegetarian kitchen.
          </p>
          {/* Taj Mahal Silhouette Watermark/Icon */}
          <div className="mt-4 flex items-center gap-3 text-primary-300/40">
            <svg viewBox="0 0 100 50" fill="currentColor" className="w-16 h-8">
              <rect x="15" y="44" width="70" height="2" />
              <rect x="18" y="42" width="64" height="2" />
              <rect x="35" y="26" width="30" height="16" />
              <path d="M42 26 C42 16 58 16 58 26 Z" />
              <rect x="49" y="12" width="2" height="4" />
              <path d="M36 26 C36 21 41 21 41 26 Z" />
              <path d="M59 26 C59 21 64 21 64 26 Z" />
              <rect x="23" y="16" width="2.5" height="26" />
              <path d="M22 16 C22 13 26.5 13 26.5 16 Z" />
              <rect x="21" y="24" width="6.5" height="1" />
              <rect x="21" y="32" width="6.5" height="1" />
              <rect x="74.5" y="16" width="2.5" height="26" />
              <path d="M73.5 16 C73.5 13 78 13 78 16 Z" />
              <rect x="72.5" y="24" width="6.5" height="1" />
              <rect x="72.5" y="32" width="6.5" height="1" />
            </svg>
            <span className="text-xs uppercase font-semibold tracking-widest leading-none">Agra, India</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-primary-800 pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-primary-200">
            <li>
              <Link href="/" className="hover:text-accent-orange transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-accent-orange transition-colors">Our Menu</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-orange transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-accent-orange transition-colors">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-orange transition-colors">Contact & Booking</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-primary-800 pb-2">
            Visit Us
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-primary-200">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
              <span>
                {restaurantInfo.address.street},<br />
                {restaurantInfo.address.city}, {restaurantInfo.address.state} - {restaurantInfo.address.pincode}
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-accent-orange flex-shrink-0" />
              <a href={`tel:${restaurantInfo.phone}`} className="hover:text-accent-orange transition-colors">
                {restaurantInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-accent-orange flex-shrink-0" />
              <a href={`mailto:${restaurantInfo.email}`} className="hover:text-accent-orange transition-colors">
                {restaurantInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours & Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-primary-800 pb-2">
            Newsletter
          </h3>
          <p className="text-primary-200 text-sm">
            Subscribe to receive special offers, recipe secrets, and events updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex rounded-full overflow-hidden border border-primary-800 bg-primary-950 p-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 bg-transparent px-3 text-sm focus:outline-none text-white font-body"
            />
            <button
              type="submit"
              className="bg-accent-orange hover:bg-orange-600 text-white p-2 rounded-full transition-colors flex items-center justify-center focus:outline-none"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Container>

      {/* Footer Bottom */}
      <div className="border-t border-primary-800/80 pt-8 text-center text-xs text-primary-300">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Pankhuri Reloaded. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href={restaurantInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
