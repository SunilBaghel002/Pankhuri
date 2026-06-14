'use client';

import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import Button from '@/components/ui/Button';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';

export default function NotFound() {
  return (
    <BackgroundTexture variant="cream" className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      {/* Decorative floating background leaves */}
      <FloatingLeaf size="lg" rotation={25} opacity={0.3} delay={0.2} duration={7} className="top-12 left-10 text-primary-400" />
      <FloatingLeaf size="md" rotation={-45} opacity={0.2} delay={1.5} duration={6} className="bottom-20 right-10 text-primary-400" />
      <FloatingLeaf size="sm" rotation={60} opacity={0.4} delay={3.5} duration={5} className="top-24 right-1/4 text-primary-400" />

      <div className="text-center relative z-10 flex flex-col items-center max-w-md">
        <h1 className="font-heading italic text-8xl font-bold text-primary-950 tracking-wider">
          404
        </h1>
        <div className="w-16 h-[2px] bg-accent-orange my-5 rounded-full" />
        <h2 className="font-heading text-2xl font-bold text-primary-900 mb-3">
          Oops! Table Not Found
        </h2>
        <p className="font-body text-sm text-gray-600 mb-8 leading-relaxed">
          The page you are looking for has been cleared from our table, or is temporarily unavailable. Let us guide you back to our feast.
        </p>
        <Link href="/">
          <Button variant="primary" size="md" className="flex items-center gap-2" iconLeft={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </BackgroundTexture>
  );
}
