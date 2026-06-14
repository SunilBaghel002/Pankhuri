'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FloatingLeafProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  opacity?: number;
  rotation?: number;
}

export function LeafSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Leaf Base Body */}
      <path
        d="M5 30C35 5 85 5 115 30C85 55 35 55 5 30Z"
        fill="currentColor"
      />
      {/* Midrib (Stem) */}
      <path
        d="M2 30C38 30 78 30 114 30"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Veins */}
      <path
        d="M25 30C32 23 38 18 42 15M45 30C52 23 58 18 62 15M65 30C72 23 78 18 82 15M85 30C92 23 98 18 102 15"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M25 30C32 37 38 42 42 45M45 30C52 37 58 42 62 45M65 30C72 37 78 42 82 45M85 30C92 37 98 42 102 45"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FloatingLeaf({
  className,
  size = 'md',
  style,
  delay = 0,
  duration = 6,
  opacity = 0.4,
  rotation = 0,
}: FloatingLeafProps) {
  const sizeClasses = {
    sm: 'w-10 h-5',
    md: 'w-20 h-10',
    lg: 'w-32 h-16',
  };

  return (
    <motion.div
      initial={{ y: 0, rotate: rotation, opacity: 0 }}
      animate={{
        y: [0, -15, 0],
        rotate: [rotation, rotation + 8, rotation - 4, rotation],
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
          duration: duration + 1,
          ease: 'easeInOut',
          delay: delay,
        },
        opacity: {
          duration: 0.8,
        },
      }}
      className={cn('pointer-events-none select-none text-primary-400/80 absolute', sizeClasses[size], className)}
      style={style}
    >
      <LeafSvg className="w-full h-full drop-shadow-sm" />
    </motion.div>
  );
}
