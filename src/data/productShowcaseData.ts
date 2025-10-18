export interface ProductVariantData {
  size: string;
  price: number;
  originalPrice: number;
  discount: string;
}

export interface ProductShowcaseData {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: Array<{ icon: string; text: string }>;
  price: number;
  originalPrice: number;
  discount: string;
  size: string;
  image: string;
  badge: string;
  badgeType: string;
}

export const productVariants: Record<string, ProductVariantData[]> = {
  'sensitive-care': [
    { size: '100g', price: 120, originalPrice: 135, discount: '11%' },
    { size: '40g', price: 50, originalPrice: 55, discount: '9%' },
    { size: '140g', price: 150, originalPrice: 170, discount: '12%' }
  ],
  'gum-care': [
    { size: '100g', price: 120, originalPrice: 135, discount: '11%' },
    { size: '40g', price: 50, originalPrice: 55, discount: '9%' },
    { size: '140g', price: 150, originalPrice: 170, discount: '12%' }
  ]
};

export const productImageGalleries: Record<string, string[]> = {
  'sensitive-care': [
    '/assets/medident-4.png',
    '/assets/medident-sensetive-care.jpeg',
    '/assets/medident-4.png'
  ],
  'gum-care': [
    '/assets/medident-5.png',
    '/assets/medident-g.jpeg',
    '/assets/medident-5.png'
  ]
};

export const showcaseProducts: ProductShowcaseData[] = [
  {
    id: 'sensitive-care',
    name: 'Medident Sensitive Care',
    category: 'Sensitivity Relief',
    description: 'Advanced formula for immediate and lasting relief from tooth sensitivity',
    benefits: [
      { icon: 'fas fa-shield-alt', text: '24/7 Protection' },
      { icon: 'fas fa-check-circle', text: 'Clinically Proven' },
      { icon: 'fas fa-leaf', text: 'Fresh Mint Flavor' },
      { icon: 'fas fa-tooth', text: 'Strengthens Enamel' }
    ],
    price: 120,
    originalPrice: 135,
    discount: '11%',
    size: '100g tube',
    image: '/assets/medident-4.png',
    badge: 'Most Popular',
    badgeType: 'featured'
  },
  {
    id: 'gum-care',
    name: 'Medident-G Gum Care',
    category: 'Gum Health',
    description: 'Advanced gum protection formula for healthy gums and fresh breath',
    benefits: [
      { icon: 'fas fa-heart', text: 'Gum Protection' },
      { icon: 'fas fa-shield-alt', text: 'Anti-bacterial' },
      { icon: 'fas fa-droplet', text: 'Prevents Bleeding' },
      { icon: 'fas fa-leaf', text: 'Natural Extracts' }
    ],
    price: 120,
    originalPrice: 135,
    discount: '11%',
    size: '100g tube',
    image: '/assets/medident-5.png',
    badge: 'New Formula',
    badgeType: 'new'
  }
];