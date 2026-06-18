'use client';

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function BilvaLeafIcon({ size = '100%', className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="bilvaLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2D5016" />
          <stop offset="100%" stopColor="#7BA05B" />
        </linearGradient>
      </defs>

      {/* Main stem */}
      <path
        d="M 50,75 L 50,55"
        stroke="url(#bilvaLeafGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Top Leaf */}
      <path
        d="M 50,55 C 38,40 44,15 50,10 C 56,15 62,40 50,55 Z"
        fill="url(#bilvaLeafGrad)"
        stroke="#2D5016"
        strokeWidth="1"
      />
      {/* Top leaf midrib */}
      <path
        d="M 50,55 L 50,15"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Left Leaf */}
      <path
        d="M 50,55 C 32,53 14,42 16,33 C 18,24 38,38 50,55 Z"
        fill="url(#bilvaLeafGrad)"
        stroke="#2D5016"
        strokeWidth="1"
      />
      {/* Left leaf midrib */}
      <path
        d="M 50,55 L 23,38"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Right Leaf */}
      <path
        d="M 50,55 C 68,53 86,42 84,33 C 82,24 62,38 50,55 Z"
        fill="url(#bilvaLeafGrad)"
        stroke="#2D5016"
        strokeWidth="1"
      />
      {/* Right leaf midrib */}
      <path
        d="M 50,55 L 77,38"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
