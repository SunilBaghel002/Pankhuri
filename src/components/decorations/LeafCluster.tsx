'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import FloatingLeaf from './FloatingLeaf';

interface LeafClusterProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function LeafCluster({ className, position = 'top-right' }: LeafClusterProps) {
  return (
    <div
      className={cn(
        'absolute pointer-events-none select-none z-10 w-48 h-48 overflow-hidden',
        position === 'top-left' && 'top-0 left-0',
        position === 'top-right' && 'top-0 right-0',
        position === 'bottom-left' && 'bottom-0 left-0',
        position === 'bottom-right' && 'bottom-0 right-0',
        className
      )}
    >
      {position === 'top-right' && (
        <>
          <FloatingLeaf
            size="lg"
            rotation={-45}
            opacity={0.35}
            delay={0}
            duration={7}
            className="top-2 right-2 text-primary-500"
          />
          <FloatingLeaf
            size="md"
            rotation={-75}
            opacity={0.25}
            delay={1.5}
            duration={6}
            className="top-10 -right-6 text-primary-400"
          />
          <FloatingLeaf
            size="sm"
            rotation={-15}
            opacity={0.45}
            delay={3}
            duration={5}
            className="top-16 right-12 text-primary-300"
          />
        </>
      )}

      {position === 'bottom-left' && (
        <>
          <FloatingLeaf
            size="lg"
            rotation={135}
            opacity={0.35}
            delay={0.5}
            duration={7}
            className="bottom-2 left-2 text-primary-500"
          />
          <FloatingLeaf
            size="md"
            rotation={105}
            opacity={0.25}
            delay={2}
            duration={6}
            className="bottom-10 -left-6 text-primary-400"
          />
          <FloatingLeaf
            size="sm"
            rotation={165}
            opacity={0.45}
            delay={3.5}
            duration={5}
            className="bottom-16 left-12 text-primary-300"
          />
        </>
      )}

      {position === 'top-left' && (
        <>
          <FloatingLeaf
            size="lg"
            rotation={45}
            opacity={0.35}
            delay={1}
            duration={7}
            className="top-2 left-2 text-primary-500"
          />
          <FloatingLeaf
            size="md"
            rotation={15}
            opacity={0.25}
            delay={2.5}
            duration={6}
            className="top-10 -left-6 text-primary-400"
          />
          <FloatingLeaf
            size="sm"
            rotation={75}
            opacity={0.45}
            delay={4}
            duration={5}
            className="top-16 left-12 text-primary-300"
          />
        </>
      )}

      {position === 'bottom-right' && (
        <>
          <FloatingLeaf
            size="lg"
            rotation={-135}
            opacity={0.35}
            delay={1.5}
            duration={7}
            className="bottom-2 right-2 text-primary-500"
          />
          <FloatingLeaf
            size="md"
            rotation={-105}
            opacity={0.25}
            delay={3}
            duration={6}
            className="bottom-10 -right-6 text-primary-400"
          />
          <FloatingLeaf
            size="sm"
            rotation={-165}
            opacity={0.45}
            delay={0.2}
            duration={5}
            className="bottom-16 right-12 text-primary-300"
          />
        </>
      )}
    </div>
  );
}
