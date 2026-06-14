import React from 'react';
import { cn } from '@/lib/utils';

interface VegIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export default function VegIndicator({ className, size = 'md', ...props }: VegIndicatorProps) {
  const sizes = {
    sm: 'w-3.5 h-3.5 border-2',
    md: 'w-4 h-4 border-2',
    lg: 'w-5 h-5 border-[3px]',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div
      className={cn(
        'border-green-600 flex items-center justify-center bg-white flex-shrink-0',
        sizes[size],
        className
      )}
      title="Pure Vegetarian"
      {...props}
    >
      <div className={cn('bg-green-600 rounded-full', dotSizes[size])} />
    </div>
  );
}
