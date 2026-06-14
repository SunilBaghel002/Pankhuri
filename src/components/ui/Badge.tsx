import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'veg';
  children: React.ReactNode;
}

export default function Badge({ children, className, variant = 'primary', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider font-body';

  const variants = {
    primary: 'bg-primary-100 text-primary-900',
    secondary: 'bg-primary-50 text-primary-700 border border-primary-200',
    accent: 'bg-accent-orange/10 text-accent-orange border border-accent-orange/20',
    veg: 'bg-green-50 text-green-700 border border-green-200',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
