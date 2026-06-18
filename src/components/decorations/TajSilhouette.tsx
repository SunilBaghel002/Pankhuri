'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TajSilhouetteProps extends React.HTMLAttributes<SVGElement> {
  size?: number | string;
}

export default function TajSilhouette({ className, ...props }: TajSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none select-none text-primary-950/5', className)}
      {...props}
    >
      {/* Ground/Plinth */}
      <rect x="10" y="88" width="180" height="4" rx="1" />
      <rect x="18" y="84" width="164" height="4" rx="1" />

      {/* Main Base Block */}
      <rect x="50" y="52" width="100" height="32" rx="1" />

      {/* Main Central Arch (Iwan) */}
      <path d="M88 84 L88 62 C88 56, 112 56, 112 62 L112 84 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M94 84 L94 65 C94 61, 106 61, 106 65 L106 84 Z" />

      {/* Side Arches (Left/Right Iwans) */}
      {/* Left side arch */}
      <path d="M60 84 L60 70 C60 67, 72 67, 72 70 L72 84 Z" opacity="0.6" />
      <path d="M60 68 L60 58 C60 55, 72 55, 72 58 L72 68 Z" opacity="0.6" />
      {/* Right side arch */}
      <path d="M128 84 L128 70 C128 67, 140 67, 140 70 L140 84 Z" opacity="0.6" />
      <path d="M128 68 L128 58 C128 55, 140 55, 140 58 L140 68 Z" opacity="0.6" />

      {/* Main Central Dome */}
      <path d="M86 52 C86 32, 114 32, 114 52 Z" />
      {/* Main Dome Finial/Spire */}
      <line x1="100" y1="34" x2="100" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="24" r="1.5" />

      {/* Left Minor Dome (Chatri) */}
      <path d="M72 52 C72 44, 82 44, 82 52 Z" />
      <line x1="77" y1="45" x2="77" y2="39" stroke="currentColor" strokeWidth="1" />
      
      {/* Right Minor Dome (Chatri) */}
      <path d="M118 52 C118 44, 128 44, 128 52 Z" />
      <line x1="123" y1="45" x2="123" y2="39" stroke="currentColor" strokeWidth="1" />

      {/* Far Left Minaret */}
      <rect x="25" y="44" width="6" height="40" rx="0.5" />
      <path d="M23 44 L33 44 L31 40 L25 40 Z" />
      <path d="M24 40 C24 34, 32 34, 32 40 Z" />
      <line x1="28" y1="34" x2="28" y2="28" stroke="currentColor" strokeWidth="0.8" />
      
      {/* Far Right Minaret */}
      <rect x="169" y="44" width="6" height="40" rx="0.5" />
      <path d="M167 44 L177 44 L175 40 L169 40 Z" />
      <path d="M168 40 C168 34, 176 34, 176 40 Z" />
      <line x1="172" y1="34" x2="172" y2="28" stroke="currentColor" strokeWidth="0.8" />
      
      {/* Inner Minarets (decorative relief) */}
      <rect x="44" y="48" width="4" height="36" opacity="0.4" />
      <rect x="152" y="48" width="4" height="36" opacity="0.4" />
    </svg>
  );
}
