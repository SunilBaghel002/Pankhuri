export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  isSpecial?: boolean;
  isNew?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  items: MenuItem[];
}
