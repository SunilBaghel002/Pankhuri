import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundTextureProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cream' | 'marble' | 'grain';
}

export default function BackgroundTexture({
  children,
  className,
  variant = 'cream',
  ...props
}: BackgroundTextureProps) {
  return (
    <div
      className={cn(
        'relative w-full h-full',
        variant === 'cream' && 'bg-[#FFF9F0]',
        variant === 'marble' && 'bg-[#FAF6EE]',
        className
      )}
      {...props}
    >
      {/* SVG overlay for subtle noise/grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay">
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Organic soft vein lines for marble paper feel */}
      {variant === 'marble' && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 45%, rgba(74, 44, 26, 0.4) 49%, rgba(74, 44, 26, 0.6) 50%, rgba(74, 44, 26, 0.4) 51%, transparent 55%),
              linear-gradient(-35deg, transparent 40%, rgba(45, 80, 22, 0.3) 48%, rgba(45, 80, 22, 0.5) 50%, rgba(45, 80, 22, 0.3) 52%, transparent 60%)
            `,
            backgroundSize: '1000px 1000px',
            filter: 'blur(2px)'
          }}
        />
      )}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
