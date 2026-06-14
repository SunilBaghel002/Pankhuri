'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LeafSvg } from './FloatingLeaf';

interface ParallaxLeafProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  speed?: number; // speed multiplier
  opacity?: number;
  rotation?: number;
}

export default function ParallaxLeaf({
  className,
  size = 'md',
  style,
  speed = 1,
  opacity = 0.3,
  rotation = 0,
}: ParallaxLeafProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Move the leaf relative to scrolling speed
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [rotation - 15, rotation + 15]);

  const sizeClasses = {
    sm: 'w-10 h-5',
    md: 'w-20 h-10',
    lg: 'w-32 h-16',
  };

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none select-none">
      <motion.div
        style={{
          y,
          rotate: rotateTransform,
          opacity,
          ...style,
        }}
        className={cn('text-primary-300 absolute pointer-events-none', sizeClasses[size], className)}
      >
        <LeafSvg className="w-full h-full drop-shadow-sm" />
      </motion.div>
    </div>
  );
}
