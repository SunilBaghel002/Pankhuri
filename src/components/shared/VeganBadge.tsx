'use client';

import React from 'react';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VeganBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  showText?: boolean;
}

export default function VeganBadge({ className, showText = true, ...props }: VeganBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded bg-green-50 border border-green-200 text-green-700 text-[9px] font-extrabold uppercase tracking-widest select-none',
        className
      )}
      title="100% Pure Vegan"
      {...props}
    >
      <Leaf className="w-2.5 h-2.5 fill-green-600 stroke-green-700" />
      {showText && <span>Vegan</span>}
    </span>
  );
}
