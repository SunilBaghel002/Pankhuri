'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-12', alignments[align], className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-accent-orange font-body font-semibold tracking-widest text-xs uppercase mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-900 leading-tight"
      >
        {title}
      </motion.h2>
      
      {/* Improved Underline with Bilva Theme Leaves */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 flex items-center justify-center relative w-36 h-6 select-none"
      >
        <svg width="140" height="24" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="sacredLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212, 146, 11, 0)" />
              <stop offset="20%" stopColor="#2D5016" />
              <stop offset="50%" stopColor="#D4920B" />
              <stop offset="80%" stopColor="#2D5016" />
              <stop offset="100%" stopColor="rgba(212, 146, 11, 0)" />
            </linearGradient>
            <linearGradient id="sacredEyeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2D5016" />    {/* Forest green */}
              <stop offset="60%" stopColor="#7BA05B" />   {/* Sage green */}
              <stop offset="100%" stopColor="#D4920B" />  {/* Saffron gold */}
            </linearGradient>
            <linearGradient id="sacredGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="100%" stopColor="#D4920B" />
            </linearGradient>
          </defs>

          {/* Elegant Horizontal Line */}
          <path d="M 10,14 C 40,14 100,14 130,14" stroke="url(#sacredLineGrad)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Three Sacred Theme Leaves */}
          
          {/* Left Leaf: Tilted left and sitting on the line */}
          <g transform="translate(56, 14) rotate(-35) translate(-6, -6)">
            <path
              d="M6,12 C2,8 2,4 6,1 C10,4 10,8 6,12 Z"
              fill="url(#sacredEyeGrad)"
              stroke="url(#sacredGoldGrad)"
              strokeWidth="0.8"
            />
            <path d="M6,12 L6,1" stroke="url(#sacredGoldGrad)" strokeWidth="0.5" />
          </g>

          {/* Right Leaf: Tilted right and sitting on the line */}
          <g transform="translate(84, 14) rotate(35) translate(-6, -6)">
            <path
              d="M6,12 C2,8 2,4 6,1 C10,4 10,8 6,12 Z"
              fill="url(#sacredEyeGrad)"
              stroke="url(#sacredGoldGrad)"
              strokeWidth="0.8"
            />
            <path d="M6,12 L6,1" stroke="url(#sacredGoldGrad)" strokeWidth="0.5" />
          </g>

          {/* Center Leaf: Straight up and raised slightly */}
          <g transform="translate(70, 9) translate(-7, -9)">
            <path
              d="M7,15 C2,10 2,5 7,1 C12,5 12,10 7,15 Z"
              fill="url(#sacredEyeGrad)"
              stroke="url(#sacredGoldGrad)"
              strokeWidth="1"
            />
            <path d="M7,15 L7,1" stroke="url(#sacredGoldGrad)" strokeWidth="0.6" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
