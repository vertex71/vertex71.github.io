export const HERO_SLIDES = {
  SLIDE_1: {
    TITLE: 'Say Goodbye to Tooth Sensitivity',
    SUBTITLE: 'Enjoy your favorite hot and cold foods again with Medident Sensitive Care',
    DESCRIPTION: 'Clinically proven formula provides 24/7 protection from tooth sensitivity',
    PRIMARY_CTA: 'Shop Sensitive Care',
    SECONDARY_CTA: 'Learn More',
    BADGE: 'Most Popular',
    BACKGROUND_CLASS: 'slide-sensitivity',
    PRODUCT_IMAGE: '/assets/medident-sensetive-care.jpeg',
  },
  SLIDE_2: {
    TITLE: 'Healthy Gums, Confident Smile',
    SUBTITLE: 'Advanced gum protection with Medident-G Gum Care toothpaste',
    DESCRIPTION: 'Anti-bacterial formula prevents bleeding and strengthens gums naturally',
    PRIMARY_CTA: 'Shop Gum Care',
    SECONDARY_CTA: 'Learn More',
    BADGE: 'New Formula',
    BACKGROUND_CLASS: 'slide-gum-care',
    PRODUCT_IMAGE: '/assets/medident-g.jpeg',
  },
  SLIDE_3: {
    TITLE: 'Complete Oral Care Solutions',
    SUBTITLE: 'From sensitivity relief to gum protection - Made in Bangladesh with pride',
    DESCRIPTION: 'Choose the perfect solution for your oral health needs',
    PRIMARY_CTA: 'Shop All Products',
    SECONDARY_CTA: 'Take Product Quiz',
    BADGE: 'Made in Bangladesh',
    BACKGROUND_CLASS: 'slide-complete',
    PRODUCT_IMAGE: '/assets/medident-sensetive-care.jpeg',
  },
  NAVIGATION: {
    ARIA_PREVIOUS: 'Previous slide',
    ARIA_NEXT: 'Next slide',
    ARIA_GO_TO_SLIDE: (index: number) => `Go to slide ${index + 1}`,
  },
} as const;

export const PRODUCT_SHOWCASE = {
  SECTION: {
    TITLE: 'Our Complete Oral Care Range',
    SUBTITLE: 'Choose the perfect solution for your oral health needs',
  },
  SENSITIVE_CARE: {
    CATEGORY: 'Sensitivity Relief',
    NAME: 'Medident Sensitive Care',
    DESCRIPTION: 'Advanced formula for immediate and lasting relief from tooth sensitivity',
    BADGE: 'Most Popular',
    BENEFITS: {
      PROTECTION_24_7: '24/7 Protection',
      CLINICALLY_PROVEN: 'Clinically Proven',
      FRESH_MINT: 'Fresh Mint Flavor',
      STRENGTHENS_ENAMEL: 'Strengthens Enamel',
    },
    PRICE: {
      CURRENT: '৳120',
      ORIGINAL: 'was ৳135',
      SAVINGS: 'Save 11%',
      SIZE_INFO: '100g tube',
    },
    BUTTONS: {
      ADD_TO_CART: 'Quick Add to Cart',
      VIEW_DETAILS: 'View Details',
    },
    ALT_TEXT: 'Medident Sensitive Care',
    IMAGE: '/assets/medident-4.png',
  },
  GUM_CARE: {
    CATEGORY: 'Gum Health',
    NAME: 'Medident-G Gum Care',
    DESCRIPTION: 'Advanced gum protection formula for healthy gums and fresh breath',
    BADGE: 'New Formula',
    BENEFITS: {
      GUM_PROTECTION: 'Gum Protection',
      ANTI_BACTERIAL: 'Anti-bacterial',
      PREVENTS_BLEEDING: 'Prevents Bleeding',
      NATURAL_EXTRACTS: 'Natural Extracts',
    },
    PRICE: {
      CURRENT: '৳120',
      ORIGINAL: 'was ৳135',
      SAVINGS: 'Save 11%',
      SIZE_INFO: '100g tube',
    },
    BUTTONS: {
      ADD_TO_CART: 'Quick Add to Cart',
      VIEW_DETAILS: 'View Details',
    },
    ALT_TEXT: 'Medident-G Gum Care',
    IMAGE: '/assets/medident-5.png',
  },
  COMPARISON: {
    TITLE: 'Not sure which product is right for you?',
    BUTTONS: {
      COMPARE_PRODUCTS: 'Compare Products',
      TAKE_QUIZ: 'Take Product Quiz',
    },
  },
} as const;

export const SENSITIVITY_QUIZ = {
  HEADER: {
    TITLE: 'Do You Have Sensitive Teeth?',
    SUBTITLE: 'Take our quick assessment to find out if Medident is right for you',
  },
  QUESTIONS: {
    QUESTION_1: {
      TEXT: 'Do you experience sharp pain when eating ice cream or drinking hot beverages?',
      OPTIONS: {
        YES: 'Yes, frequently',
        SOMETIMES: 'Sometimes',
        NO: 'Never',
      },
    },
    QUESTION_2: {
      TEXT: 'Do you avoid certain foods because they cause tooth discomfort?',
      OPTIONS: {
        YES: 'Yes, often',
        SOMETIMES: 'Occasionally',
        NO: 'No, never',
      },
    },
    QUESTION_3: {
      TEXT: 'Does brushing your teeth sometimes cause discomfort?',
      OPTIONS: {
        YES: 'Yes, it\'s painful',
        SOMETIMES: 'Sometimes sensitive',
        NO: 'No discomfort',
      },
    },
  },
  RESULTS: {
    TITLE: 'Your Result',
    HIGH_SENSITIVITY: {
      TITLE: 'High Sensitivity',
      TEXT: 'You likely have moderate to severe tooth sensitivity. Medident Sensitive Care can provide immediate relief and long-term protection.',
      COLOR: '#E74C3C',
    },
    MILD_SENSITIVITY: {
      TITLE: 'Mild Sensitivity',
      TEXT: 'You may experience occasional sensitivity. Medident can help prevent symptoms from worsening.',
      COLOR: '#F39C12',
    },
    LOW_SENSITIVITY: {
      TITLE: 'Low Sensitivity',
      TEXT: 'Great! You have minimal sensitivity, but Medident can help maintain your oral health.',
      COLOR: '#27AE60',
    },
    RECOMMENDATION: {
      TITLE: 'Based on your answers, we recommend:',
      PRODUCT_NAME: 'Medident Sensitive Care',
      PRODUCT_DESCRIPTION: 'Specially formulated for sensitive teeth protection',
      CTA: 'Shop Now',
    },
  },
} as const;

export const HOME_PAGE_TESTIMONIALS = {
  HEADER: {
    TITLE: 'What Our Customers Say',
    SUBTITLE: 'Real experiences from real people',
  },
  TESTIMONIALS_LIST: [
    {
      NAME: 'Rashida Begum',
      LOCATION: 'Dhaka, Bangladesh',
      RATING: 5,
      TEXT: 'I\'ve been using Medident for 6 months now, and my sensitivity issues are completely gone. Great local product!',
      IMAGE: '/assets/customers/customer-1.svg',
      ALT_TEXT: 'Customer',
    },
    {
      NAME: 'Karim Ahmed',
      LOCATION: 'Chittagong, Bangladesh',
      RATING: 5,
      TEXT: 'Finally, a Bangladeshi toothpaste that works as well as international brands. Proud to support local business.',
      IMAGE: '/assets/customers/customer-2.svg',
      ALT_TEXT: 'Customer',
    },
    {
      NAME: 'Dr. Fatima Khan',
      LOCATION: 'Sylhet, Bangladesh',
      RATING: 5,
      TEXT: 'My dentist recommended Medident, and I can now enjoy cold drinks without pain. Excellent value for money.',
      IMAGE: '/assets/customers/customer-3.svg',
      ALT_TEXT: 'Customer',
    },
  ],
} as const;

export const HOME_PAGE_CONTACT = {
  HEADER: {
    TITLE: 'Get in Touch',
    SUBTITLE: 'Have questions about our products? We\'re here to help!',
  },
  CONTACT_DETAILS: {
    ADDRESS: {
      ICON: 'fas fa-map-marker-alt',
      LABEL: 'Address',
      TEXT: 'House-10, Road-5, Block-B\nRampura, Banasree\nDhaka-1219, Bangladesh',
      TEXT_LINE_1: 'House-10, Road-5, Block-B',
      TEXT_LINE_2: 'Rampura, Banasree',
      TEXT_LINE_3: 'Dhaka-1219, Bangladesh',
    },
    PHONE: {
      ICON: 'fas fa-phone',
      LABEL: 'Phone',
      TEXT: '+880 1328990900',
    },
    EMAIL: {
      ICON: 'fas fa-envelope',
      LABEL: 'Email',
      TEXT: 'sales.vertex23@gmail.com',
    },
  },
  CONTACT_FORM: {
    PLACEHOLDERS: {
      NAME: 'Your Name',
      EMAIL: 'Your Email',
      PHONE: 'Phone Number',
      MESSAGE: 'Your Message',
    },
    BUTTON: 'Send Message',
  },
} as const;

export const IMAGE_MODAL = {
  ALT_TEXT: 'Product view',
  BUTTONS: {
    CLOSE: {
      ICON: 'fas fa-times',
      ARIA_LABEL: 'Close modal',
    },
    ZOOM_OUT: {
      ICON: 'fas fa-minus',
      ARIA_LABEL: 'Zoom out',
    },
    ZOOM_RESET: {
      ICON: 'fas fa-expand-arrows-alt',
      ARIA_LABEL: 'Reset zoom',
    },
    ZOOM_IN: {
      ICON: 'fas fa-plus',
      ARIA_LABEL: 'Zoom in',
    },
    PREV_IMAGE: {
      ICON: 'fas fa-chevron-left',
      ARIA_LABEL: 'Previous image',
    },
    NEXT_IMAGE: {
      ICON: 'fas fa-chevron-right',
      ARIA_LABEL: 'Next image',
    },
  },
  IMAGE_COUNTER: (current: number, total: number) => `${current} / ${total}`,
  ZOOM_LIMITS: {
    MIN: 0.5,
    MAX: 3,
  },
} as const;
