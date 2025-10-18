export const PRODUCT_BENEFITS_SECTION = {
  HEADER: {
    TITLE: 'Why Choose Medident?',
    SUBTITLE: 'Discover the proven benefits that make our products the trusted choice for oral care',
  },
  BENEFITS: [
    {
      TITLE: 'Round-the-Clock Protection',
      DESCRIPTION: 'Advanced formula provides 24/7 sensitivity protection and pain relief, so you can enjoy your favorite foods anytime.',
      ICON: 'fas fa-shield-alt',
    },
    {
      TITLE: 'Clinically Proven Formula',
      DESCRIPTION: 'Scientifically tested and trusted by dental professionals for effective sensitivity relief and oral health improvement.',
      ICON: 'fas fa-check-circle',
    },
    {
      TITLE: 'Strengthens Enamel',
      DESCRIPTION: 'Actively rebuilds and strengthens weakened tooth enamel while providing comprehensive cavity protection.',
      ICON: 'fas fa-tooth',
    },
    {
      TITLE: 'Gentle & Safe',
      DESCRIPTION: 'Gentle formula safe for daily use and sensitive gums, suitable for the whole family\'s oral care routine.',
      ICON: 'fas fa-heart',
    },
    {
      TITLE: 'Natural Whitening',
      DESCRIPTION: 'Gradual whitening removes surface stains naturally without harsh chemicals or damage to tooth enamel.',
      ICON: 'fas fa-sparkles',
    },
    {
      TITLE: 'Made in Bangladesh',
      DESCRIPTION: 'Proudly manufactured in Bangladesh with international quality standards and rigorous quality control.',
      ICON: 'fas fa-certificate',
    },
  ],
  CTA: {
    TITLE: 'Experience the Medident Difference',
    SUBTITLE: 'Join millions of satisfied customers who trust Medident for their oral care needs',
    BUTTON: 'Shop Now',
  },
} as const;

export const PRODUCT_DETAILS_PAGE = {
  BREADCRUMB: {
    HOME: 'Home',
    PRODUCTS: 'Products',
    SEPARATOR: '›',
  },
  SENSITIVE_CARE: {
    NAME: 'Medident Sensitive Care',
    CATEGORY: 'Sensitivity Relief',
    DESCRIPTION: 'Advanced formula for immediate and lasting relief from tooth sensitivity. Clinically proven to provide 24/7 protection while strengthening enamel and freshening breath.',
    MAIN_IMAGE: '/assets/medident-4.png',
    BENEFITS: [
      { TEXT: '24/7 Protection from sensitivity', ICON: 'fas fa-shield-alt' },
      { TEXT: 'Clinically proven formula', ICON: 'fas fa-check-circle' },
      { TEXT: 'Fresh mint flavor', ICON: 'fas fa-leaf' },
      { TEXT: 'Strengthens tooth enamel', ICON: 'fas fa-tooth' },
      { TEXT: 'Gentle on sensitive teeth', ICON: 'fas fa-heart' },
      { TEXT: 'Dentist recommended', ICON: 'fas fa-star' },
    ],
    INGREDIENTS: [
      'Potassium Nitrate 5%',
      'Sodium Fluoride 0.15%',
      'Hydrated Silica',
      'Glycerin',
      'Natural Mint Extract',
    ],
    DIRECTIONS: [
      'Brush teeth thoroughly with a soft-bristled toothbrush',
      'Use twice daily for best results',
      'Do not swallow',
      'Keep out of reach of children',
      'Consult dentist if sensitivity persists',
    ],
  },
  GUM_CARE: {
    NAME: 'Medident-G Gum Care',
    CATEGORY: 'Gum Health',
    DESCRIPTION: 'Advanced gum protection formula specifically designed for healthy gums and fresh breath. Anti-bacterial formula prevents bleeding and strengthens gums naturally.',
    MAIN_IMAGE: '/assets/medident-5.png',
    BENEFITS: [
      { TEXT: 'Advanced gum protection', ICON: 'fas fa-heart' },
      { TEXT: 'Anti-bacterial formula', ICON: 'fas fa-shield-alt' },
      { TEXT: 'Prevents gum bleeding', ICON: 'fas fa-droplet' },
      { TEXT: 'Natural herbal extracts', ICON: 'fas fa-leaf' },
      { TEXT: 'Long-lasting fresh breath', ICON: 'fas fa-refresh' },
      { TEXT: 'Dentist recommended', ICON: 'fas fa-check-circle' },
    ],
    INGREDIENTS: [
      'Stannous Fluoride 0.454%',
      'Triclosan 0.3%',
      'Zinc Citrate',
      'Aloe Vera Extract',
      'Tea Tree Oil',
    ],
    DIRECTIONS: [
      'Apply to toothbrush and brush gently',
      'Focus on gum line for 2 minutes',
      'Use twice daily after meals',
      'Rinse thoroughly after brushing',
      'Regular dental checkups recommended',
    ],
  },
  VARIANTS: [
    { SIZE: '40g', PRICE: 50, ORIGINAL_PRICE: 55, DISCOUNT: '9%' },
    { SIZE: '100g', PRICE: 120, ORIGINAL_PRICE: 135, DISCOUNT: '11%' },
    { SIZE: '140g', PRICE: 150, ORIGINAL_PRICE: 170, DISCOUNT: '12%' },
  ],
  NOT_FOUND: {
    TITLE: 'Product not found',
    BUTTON: 'Back to Home',
  },
  QUANTITY: {
    LABEL: 'Quantity',
    MIN: 1,
    MAX: 10,
  },
  TABS: {
    BENEFITS: 'Benefits',
    INGREDIENTS: 'Ingredients',
    DIRECTIONS: 'Directions',
  },
  BUTTONS: {
    ADD_TO_CART: 'Add to Cart',
    BUY_NOW: 'Buy Now',
  },
} as const;
