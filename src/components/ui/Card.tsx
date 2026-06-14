'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  hoverable?: boolean;
  children?: React.ReactNode;
}

export default function Card({ children, className, hoverable = true, ...props }: CardProps) {
  const hoverAnimation = hoverable ? { whileHover: { y: -8 } } : {};

  return (
    <motion.div
      {...hoverAnimation}
      className={cn(
        'bg-white rounded-2xl overflow-hidden border border-primary-100/50 shadow-card transition-shadow duration-300',
        hoverable && 'hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
