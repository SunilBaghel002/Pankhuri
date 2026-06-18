import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'green' | 'simple';
}

export default function Divider({ className, variant = 'gold', ...props }: DividerProps) {
  return (
    <div
      className={cn('flex items-center justify-center my-8 w-full', className)}
      {...props}
    >
      {variant === 'simple' && <div className="w-full h-[1px] bg-gray-200" />}
      
      {variant === 'gold' && (
        <div className="flex items-center w-full max-w-[250px] justify-between">
          <div className="h-[1px] bg-accent-saffron/40 flex-1" />
          <svg
            className="w-12 h-6 text-accent-saffron mx-2 opacity-80"
            fill="none"
            viewBox="0 0 24 12"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M2 6h4l2-4 4 8 4-8 2 4h4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="6" r="2" fill="currentColor" />
          </svg>
          <div className="h-[1px] bg-accent-saffron/40 flex-1" />
        </div>
      )}

      {variant === 'green' && (
        <div className="flex items-center w-full max-w-[200px] justify-between">
          <div className="h-[1px] bg-primary-300/60 flex-1" />
          <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 overflow-visible">
            <defs>
              <linearGradient id="miniSacredEyeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2D5016" />
                <stop offset="55%" stopColor="#7BA05B" />
                <stop offset="100%" stopColor="#D4920B" />
              </linearGradient>
              <linearGradient id="miniSacredGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D061" />
                <stop offset="100%" stopColor="#D4920B" />
              </linearGradient>
            </defs>

            {/* Left Leaf */}
            <g transform="translate(24, 10) rotate(-35) translate(-3, -4)">
              <path d="M3,8 C1.2,5.3 1.2,2.7 3,0.7 C4.8,2.7 4.8,5.3 3,8 Z" fill="url(#miniSacredEyeGrad)" stroke="url(#miniSacredGoldGrad)" strokeWidth="0.6" />
            </g>

            {/* Right Leaf */}
            <g transform="translate(36, 10) rotate(35) translate(-3, -4)">
              <path d="M3,8 C1.2,5.3 1.2,2.7 3,0.7 C4.8,2.7 4.8,5.3 3,8 Z" fill="url(#miniSacredEyeGrad)" stroke="url(#miniSacredGoldGrad)" strokeWidth="0.6" />
            </g>

            {/* Center Leaf (raised) */}
            <g transform="translate(30, 7) translate(-3.5, -5)">
              <path d="M3.5,10 C1.4,6.7 1.4,3.3 3.5,0.7 C5.6,3.3 5.6,6.7 3.5,10 Z" fill="url(#miniSacredEyeGrad)" stroke="url(#miniSacredGoldGrad)" strokeWidth="0.8" />
            </g>
          </svg>
          <div className="h-[1px] bg-primary-300/60 flex-1" />
        </div>
      )}
    </div>
  );
}
