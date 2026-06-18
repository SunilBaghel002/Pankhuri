'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { restaurantInfo } from '@/data/restaurant-info';
import Container from '../ui/Container';
import OmSymbol from '../decorations/OmSymbol';
import LotusFlower from '../decorations/LotusFlower';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="relative bg-[#7B1818] text-pink-100/90 overflow-hidden pt-16 pb-8 border-t border-[#601212]">
      {/* Mahadev Trishul Background (Premium blending) */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
        <Image
          src="/images/mahadev_trishul.png"
          alt="Mahadev Trishul Background"
          fill
          className="object-contain object-left md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Decorative leaf border pattern at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-saffron via-accent-orange to-accent-saffron opacity-80" />

      {/* Background spiritual symbols */}
      <OmSymbol size={160} className="absolute -bottom-10 -left-10 text-white/5 opacity-5 animate-pulse-slow" />
      <LotusFlower size="md" opacity={0.06} className="top-12 right-12 text-white" />

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 relative z-10">
        {/* About Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            {/* SV Monogram Circular Badge */}
            <div className="w-12 h-12 rounded-full border-2 border-accent-saffron/80 flex items-center justify-center bg-white shadow-sm">
              <span className="font-heading font-black text-xl text-accent-saffron leading-none tracking-tighter">
                SV
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-heading italic text-2xl font-bold text-white tracking-wide">
                Shankara Vegis
              </span>
              <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-accent-saffron leading-none mt-1">
                Since 1992
              </span>
            </div>
          </Link>
          <p className="text-accent-saffron font-body text-xs font-extrabold italic mt-1 leading-relaxed">
            हमारे यहाँ शुद्ध शाकाहारी भोजन मिलता है
          </p>
          <p className="text-pink-100/80 text-sm leading-relaxed font-body">
            A family-owned pure vegetarian & vegan restaurant in Agra since 1992, featuring a stunning 360° rooftop view of the Taj Mahal.
          </p>
          {/* Recognition Badges */}
          <div className="mt-2 flex flex-col gap-2">
            <span className="text-[9px] uppercase font-bold tracking-widest text-accent-saffron">Recognition</span>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-white/95">
              <span className="bg-[#B22222] px-2 py-0.5 rounded border border-white/10">🏆 Lonely Planet Recommended</span>
              <span className="bg-green-700 px-2 py-0.5 rounded border border-white/10">⭐ TripAdvisor Excellence 2025</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-[#8C2020] pb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-pink-100/80">
            <li>
              <Link href="/" className="hover:text-accent-saffron transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-accent-saffron transition-colors">Our Menu</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-saffron transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-accent-saffron transition-colors">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-saffron transition-colors">Contact & Booking</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-[#8C2020] pb-2">
            Visit Us
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-pink-100/80">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-5 h-5 text-accent-saffron flex-shrink-0 mt-0.5" />
              <span>
                {restaurantInfo.address.street},<br />
                Near Taj Mahal South Gate, {restaurantInfo.address.city}, {restaurantInfo.address.state} - {restaurantInfo.address.pincode}
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-accent-saffron flex-shrink-0" />
              <a href={`tel:${restaurantInfo.phone}`} className="hover:text-accent-saffron transition-colors">
                {restaurantInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-accent-saffron flex-shrink-0" />
              <a href={`mailto:${restaurantInfo.email}`} className="hover:text-accent-saffron transition-colors">
                {restaurantInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours & Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold text-white border-b border-[#8C2020] pb-2">
            Newsletter
          </h3>
          <p className="text-pink-100/80 text-sm">
            Subscribe to receive special offers, recipe secrets, and events updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex rounded-full overflow-hidden border border-[#8C2020] bg-[#601212] p-1">
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
              className="bg-accent-saffron hover:bg-yellow-600 text-white p-2 rounded-full transition-colors flex items-center justify-center focus:outline-none"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Container>

      {/* Footer Bottom */}
      <div className="border-t border-[#8C2020]/50 pt-8 text-center text-xs text-pink-100/60">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Shankara Vegis Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
