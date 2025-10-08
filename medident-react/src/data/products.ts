// Product type definitions
export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  inStock: boolean;
}

export interface ProductImages {
  main: string;
  hero: string;
  thumbnails: string[];
}

export interface ProductBenefit {
  icon: string;
  text: string;
}

export interface Ingredient {
  name: string;
  description: string;
}

export interface ProductIngredients {
  active: Ingredient[];
  full: string;
}

export interface UsageStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductGuarantee {
  icon: string;
  text: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  currency: string;
  inStock: boolean;
  featured: boolean;
  category: string;
  rating: number;
  reviewCount: number;
  images: ProductImages;
  variants: ProductVariant[];
  benefits: ProductBenefit[];
  features: ProductFeature[];
  ingredients: ProductIngredients;
  usage: UsageStep[];
  keyFeatures?: string[];
  clinicallyTested?: boolean;
  dermatologistRecommended?: boolean;
  fdaApproved?: boolean;
  tags?: string[];
  guarantees: ProductGuarantee[];
}

export const products: Product[] = [
  {
    id: 'medident-sensitive-care',
    name: 'Medident Sensitive Care',
    shortDescription: 'Advanced formula for immediate and lasting relief from tooth sensitivity',
    description: 'Advanced formula specifically designed for sensitive teeth. Provides immediate relief from tooth sensitivity while strengthening enamel and promoting overall oral health.',
    price: 85,
    originalPrice: 95,
    discount: 11,
    currency: '৳',
    inStock: true,
    featured: true,
    category: 'sensitive',
    rating: 4.8,
    reviewCount: 234,
    images: {
      main: '/assets/products/medident-sensitive-care-large.svg',
      hero: '/assets/medident-sensitive-care.svg',
      thumbnails: [
        '/assets/products/medident-front.svg',
        '/assets/products/medident-back.svg',
        '/assets/products/medident-side.svg',
        '/assets/products/medident-tube.svg'
      ]
    },
    variants: [
      {
        id: '50g',
        size: '50g',
        price: 85,
        inStock: true
      },
      {
        id: '100g',
        size: '100g',
        price: 150,
        inStock: true
      },
      {
        id: '150g',
        size: '150g',
        price: 210,
        inStock: true
      }
    ],
    benefits: [
      {
        icon: 'fas fa-shield-alt',
        text: '24/7 Protection'
      },
      {
        icon: 'fas fa-check-circle',
        text: 'Clinically Proven'
      },
      {
        icon: 'fas fa-leaf',
        text: 'Fresh Mint Flavor'
      },
      {
        icon: 'fas fa-tooth',
        text: 'Strengthens Enamel'
      }
    ],
    features: [
      {
        icon: 'fas fa-shield-alt',
        title: '24/7 Sensitivity Protection',
        description: 'Continuous protection from tooth sensitivity'
      },
      {
        icon: 'fas fa-tooth',
        title: 'Strengthens Tooth Enamel',
        description: 'Helps rebuild and strengthen weakened enamel'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Fresh Mint Flavor',
        description: 'Long-lasting fresh breath with natural mint'
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Clinically Proven Formula',
        description: 'Tested and proven effective by dental professionals'
      },
      {
        icon: 'fas fa-heart',
        title: 'Gentle on Gums',
        description: 'Safe for daily use with gentle gum care'
      },
      {
        icon: 'fas fa-sparkles',
        title: 'Whitens Teeth Gradually',
        description: 'Removes surface stains for brighter teeth'
      }
    ],
    ingredients: {
      active: [
        {
          name: 'Potassium Nitrate 5%',
          description: 'Clinically proven to reduce tooth sensitivity by blocking pain signals to the nerve.'
        },
        {
          name: 'Sodium Fluoride 1450ppm',
          description: 'Strengthens tooth enamel and provides protection against cavities.'
        },
        {
          name: 'Natural Mint Extract',
          description: 'Provides long-lasting fresh breath and pleasant taste.'
        },
        {
          name: 'Gentle Whitening Agents',
          description: 'Safely removes surface stains without damaging enamel.'
        }
      ],
      full: 'Potassium Nitrate, Sodium Fluoride, Hydrated Silica, Sorbitol, Glycerin, PEG-8, Sodium Lauryl Sulfate, Titanium Dioxide, Carbomer, Sodium Hydroxide, Sodium Saccharin, Menthol, Natural Mint Flavor.'
    },
    usage: [
      {
        step: 1,
        title: 'Apply Proper Amount',
        description: 'Squeeze a pea-sized amount of Medident Sensitive Care onto a soft-bristled toothbrush.'
      },
      {
        step: 2,
        title: 'Brush Gently',
        description: 'Brush your teeth gently for 2 minutes, paying special attention to sensitive areas.'
      },
      {
        step: 3,
        title: 'Rinse Thoroughly',
        description: 'Rinse your mouth thoroughly with water after brushing.'
      },
      {
        step: 4,
        title: 'Use Twice Daily',
        description: 'For best results, use twice daily - morning and before bedtime.'
      }
    ],
    guarantees: [
      {
        icon: 'fas fa-truck',
        text: 'Free Delivery in Dhaka'
      },
      {
        icon: 'fas fa-undo',
        text: '30-Day Money Back'
      },
      {
        icon: 'fas fa-certificate',
        text: 'Quality Guaranteed'
      }
    ]
  },
  {
    id: 'medident-gum-care',
    name: 'Medident-G Gum Care',
    shortDescription: 'Advanced gum protection formula for healthy gums and fresh breath',
    description: 'Specially formulated toothpaste designed to protect gums from bacteria, reduce inflammation, and prevent bleeding. Perfect for maintaining optimal gum health.',
    price: 90,
    originalPrice: 100,
    discount: 10,
    currency: '৳',
    inStock: true,
    featured: true,
    category: 'gum-care',
    rating: 4.7,
    reviewCount: 189,
    images: {
      main: '/assets/products/medident-gum-care-large.svg',
      hero: '/assets/medident-sensitive-care.svg', // Using same placeholder for now
      thumbnails: [
        '/assets/products/medident-front.svg',
        '/assets/products/medident-back.svg',
        '/assets/products/medident-side.svg',
        '/assets/products/medident-tube.svg'
      ]
    },
    variants: [
      {
        id: '50g',
        size: '50g',
        price: 90,
        inStock: true
      },
      {
        id: '100g',
        size: '100g',
        price: 160,
        inStock: true
      },
      {
        id: '150g',
        size: '150g',
        price: 230,
        inStock: true
      }
    ],
    benefits: [
      {
        icon: 'fas fa-heart',
        text: 'Gum Protection'
      },
      {
        icon: 'fas fa-shield-alt',
        text: 'Anti-bacterial'
      },
      {
        icon: 'fas fa-droplet',
        text: 'Prevents Bleeding'
      },
      {
        icon: 'fas fa-leaf',
        text: 'Natural Extracts'
      }
    ],
    features: [
      {
        icon: 'fas fa-heart',
        title: 'Advanced Gum Protection',
        description: 'Specially formulated to protect and strengthen gums'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Anti-bacterial Formula',
        description: 'Fights harmful bacteria that cause gum disease'
      },
      {
        icon: 'fas fa-droplet',
        title: 'Prevents Gum Bleeding',
        description: 'Reduces inflammation and stops gum bleeding'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Natural Herbal Extracts',
        description: 'Contains chamomile and aloe vera for gentle care'
      },
      {
        icon: 'fas fa-tooth',
        title: 'Strengthens Teeth',
        description: 'Provides cavity protection with fluoride'
      },
      {
        icon: 'fas fa-wind',
        title: 'Long-lasting Freshness',
        description: 'Keeps breath fresh for hours'
      }
    ],
    ingredients: {
      active: [
        {
          name: 'Triclosan 0.3%',
          description: 'Clinically proven antibacterial agent that fights gum disease.'
        },
        {
          name: 'Sodium Fluoride 1450ppm',
          description: 'Strengthens tooth enamel and provides protection against cavities.'
        },
        {
          name: 'Chamomile Extract',
          description: 'Natural anti-inflammatory agent that soothes irritated gums.'
        },
        {
          name: 'Aloe Vera Extract',
          description: 'Gentle healing properties for damaged gum tissue.'
        }
      ],
      full: 'Triclosan, Sodium Fluoride, Hydrated Silica, Sorbitol, Glycerin, PEG-8, Sodium Lauryl Sulfate, Titanium Dioxide, Chamomile Extract, Aloe Vera Extract, Carbomer, Sodium Hydroxide, Sodium Saccharin, Menthol.'
    },
    usage: [
      {
        step: 1,
        title: 'Apply Proper Amount',
        description: 'Squeeze a pea-sized amount of Medident-G Gum Care onto a soft-bristled toothbrush.'
      },
      {
        step: 2,
        title: 'Brush Gums Gently',
        description: 'Brush teeth and gums gently for 2 minutes, focusing on the gum line.'
      },
      {
        step: 3,
        title: 'Rinse Thoroughly',
        description: 'Rinse your mouth thoroughly with water after brushing.'
      },
      {
        step: 4,
        title: 'Use Twice Daily',
        description: 'For optimal gum health, use twice daily - morning and before bedtime.'
      }
    ],
    guarantees: [
      {
        icon: 'fas fa-truck',
        text: 'Free Delivery in Dhaka'
      },
      {
        icon: 'fas fa-undo',
        text: '30-Day Money Back'
      },
      {
        icon: 'fas fa-certificate',
        text: 'Quality Guaranteed'
      }
    ]
  }
];

export const relatedProducts = [
  {
    id: 'medident-mouthwash',
    name: 'Medident Sensitive Mouthwash',
    description: 'Alcohol-free formula for sensitive mouths',
    price: 120,
    currency: '৳',
    image: '/assets/products/medident-mouthwash.svg',
    category: 'mouthwash'
  },
  {
    id: 'medident-toothbrush',
    name: 'Medident Soft Toothbrush',
    description: 'Extra soft bristles for sensitive teeth',
    price: 45,
    currency: '৳',
    image: '/assets/products/medident-toothbrush.svg',
    category: 'toothbrush'
  },
  {
    id: 'medident-floss',
    name: 'Medident Dental Floss',
    description: 'Gentle floss for complete cleaning',
    price: 65,
    currency: '৳',
    image: '/assets/products/medident-floss.svg',
    category: 'floss'
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (excludeId = null) => {
  return relatedProducts.filter(product => product.id !== excludeId);
};