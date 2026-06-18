'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface LotusFlowerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  opacity?: number;
  rotation?: number;
}

export function LotusSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="lotusGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4920B" stopOpacity="0.8" /> {/* Gold */}
          <stop offset="50%" stopColor="#E8762D" stopOpacity="0.85" /> {/* Orange */}
          <stop offset="100%" stopColor="#B22222" stopOpacity="0.9" /> {/* Red */}
        </linearGradient>
      </defs>
      {/* Outer Back Petals */}
      <path d="M50 70 C25 65, 10 45, 15 35 C20 25, 40 40, 50 70 Z" fill="url(#lotusGradient)" opacity="0.6" />
      <path d="M50 70 C75 65, 90 45, 85 35 C80 25, 60 40, 50 70 Z" fill="url(#lotusGradient)" opacity="0.6" />
      
      {/* Middle Petals */}
      <path d="M50 72 C30 68, 15 50, 22 38 C30 25, 45 45, 50 72 Z" fill="url(#lotusGradient)" opacity="0.8" />
      <path d="M50 72 C70 68, 85 50, 78 38 C70 25, 55 45, 50 72 Z" fill="url(#lotusGradient)" opacity="0.8" />
      
      {/* Inner Petals */}
      <path d="M50 75 C38 70, 28 55, 32 42 C38 28, 48 50, 50 75 Z" fill="url(#lotusGradient)" />
      <path d="M50 75 C62 70, 72 55, 68 42 C62 28, 52 50, 50 75 Z" fill="url(#lotusGradient)" />
      
      {/* Center Petal */}
      <path d="M50 78 C44 70, 42 50, 50 30 C58 50, 56 70, 50 78 Z" fill="url(#lotusGradient)" />
      
      {/* Base Stalk / Filaments */}
      <path d="M40 76 Q50 82 60 76" stroke="url(#lotusGradient)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function LotusFlower({
  className,
  size = 'md',
  style,
  delay = 0,
  duration = 6,
  opacity = 0.3,
  rotation = 0,
}: LotusFlowerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <motion.div
      initial={{ y: 0, rotate: rotation, opacity: 0 }}
      animate={{
        y: [0, -12, 0],
        rotate: [rotation, rotation + 6, rotation - 4, rotation],
        opacity: opacity,
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: duration,
          ease: 'easeInOut',
          delay: delay,
        },
        rotate: {
          repeat: Infinity,
          duration: duration + 1.5,
          ease: 'easeInOut',
          delay: delay,
        },
        opacity: {
          duration: 0.8,
        },
      }}
      className={cn('pointer-events-none select-none absolute', sizeClasses[size], className)}
      style={style}
    >
      <LotusSvg className="w-full h-full drop-shadow-sm" />
    </motion.div>
  );
}
