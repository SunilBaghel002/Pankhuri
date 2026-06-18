'use client';

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function TrishulIcon({ size = '100%', className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="trishulGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4920B" />
          <stop offset="100%" stopColor="#B22222" />
        </linearGradient>
      </defs>
      
      {/* Center Spear (Prong) */}
      <path
        d="M 50,15 L 50,85 M 50,15 L 43,30 M 50,15 L 57,30 Z"
        stroke="url(#trishulGold)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#trishulGold)"
      />
      
      {/* Left Curved Prong */}
      <path
        d="M 22,40 C 22,75 48,75 48,75 M 22,40 L 19,45 M 22,40 L 26,45"
        stroke="url(#trishulGold)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right Curved Prong */}
      <path
        d="M 78,40 C 78,75 52,75 52,75 M 78,40 L 75,45 M 78,40 L 81,45"
        stroke="url(#trishulGold)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Decorative Horizontal Bands (crossbar) */}
      <rect x="40" y="73" width="20" height="4" rx="1" fill="url(#trishulGold)" />
      <rect x="42" y="79" width="16" height="3" rx="0.5" fill="url(#trishulGold)" />

      {/* Main Staff (Shaft) */}
      <line
        x1="50"
        y1="82"
        x2="50"
        y2="150"
        stroke="url(#trishulGold)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Damru (Hourglass Drum) in the middle */}
      <path
        d="M 40,105 L 60,105 L 44,125 L 56,125 Z"
        fill="url(#trishulGold)"
        stroke="url(#trishulGold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Damru center binding ring */}
      <ellipse cx="50" cy="115" rx="3.5" ry="1.5" fill="#7B1818" />

      {/* Damru Hanging beads/threads */}
      <path
        d="M 50,115 Q 38,128 35,138"
        stroke="url(#trishulGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="35" cy="138" r="2.5" fill="url(#trishulGold)" />

      <path
        d="M 50,115 Q 62,128 65,138"
        stroke="url(#trishulGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="65" cy="138" r="2.5" fill="url(#trishulGold)" />
    </svg>
  );
}
