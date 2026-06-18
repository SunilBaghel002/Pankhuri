'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MandalaPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export default function MandalaPattern({ className, size = 300, ...props }: MandalaPatternProps) {
  return (
    <div
      className={cn('pointer-events-none select-none animate-rotate-very-slow text-accent-saffron/[0.04] origin-center', className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        className="w-full h-full"
      >
        {/* Outermost ring */}
        <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
        <circle cx="100" cy="100" r="90" />

        {/* Outer spikes/petals */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <path
              key={`petal-${i}`}
              d="M100 10 L104 22 L100 28 L96 22 Z"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}

        {/* Second ring */}
        <circle cx="100" cy="100" r="75" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <g key={`loop-${i}`} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 25 C115 45, 125 45, 100 65" />
              <path d="M100 25 C85 45, 75 45, 100 65" />
            </g>
          );
        })}

        {/* Third ring */}
        <circle cx="100" cy="100" r="55" strokeWidth="0.5" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <path
              key={`star-${i}`}
              d="M100 45 L106 70 L94 70 Z"
              transform={`rotate(${angle} 100 100)`}
              opacity="0.8"
            />
          );
        })}

        {/* Inner rings and flower center */}
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="20" strokeDasharray="2,2" />
        <circle cx="100" cy="100" r="12" />
        <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.3" />

        {/* Rays */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 360) / 48;
          return (
            <line
              key={`ray-${i}`}
              x1="100"
              y1="90"
              x2="100"
              y2="92"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </svg>
    </div>
  );
}
