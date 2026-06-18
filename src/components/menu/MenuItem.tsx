import React from 'react';
import { MenuItem as MenuItemType } from '@/types/menu';
import VegIndicator from '../shared/VegIndicator';
import Badge from '../ui/Badge';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col gap-1 py-4 group hover:bg-primary-50/10 px-3 rounded-lg transition-colors">
      <div className="flex items-center gap-2.5">
        {/* Veg Indicator */}
        <VegIndicator size="sm" />

        {/* Item Name */}
        <div className="flex-1 flex items-baseline justify-between gap-2 overflow-hidden">
          <span className="font-heading font-extrabold text-base md:text-lg text-brand-brown group-hover:text-primary-800 transition-colors flex items-center gap-2 flex-wrap">
            {item.name}
            {item.isSpecial && <Badge variant="accent" className="py-0 px-2 text-[9px] uppercase tracking-wider scale-95">Special</Badge>}
            {item.isNew && <Badge variant="primary" className="py-0 px-2 text-[9px] uppercase tracking-wider scale-95">New</Badge>}
          </span>
          {/* Dotted Connector */}
          <span className="flex-1 border-b border-dashed border-primary-200/50 mx-1.5 group-hover:border-primary-400/80 transition-colors" />
          {/* Price */}
          <span className="font-body font-bold text-accent-orange text-base md:text-lg flex-shrink-0">
            ₹{item.price}
          </span>
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="font-body text-gray-500 text-xs md:text-sm pl-6.5 leading-relaxed max-w-xl">
          {item.description}
        </p>
      )}
    </div>
  );
}
