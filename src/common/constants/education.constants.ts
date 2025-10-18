export const EDUCATION_SECTION = {
  HEADER: {
    TITLE: 'Understanding Tooth Sensitivity',
    SUBTITLE: 'Learn about causes, prevention, and treatment options',
  },
  EDUCATION_CARDS: [
    {
      TITLE: 'What Causes Sensitivity?',
      DESCRIPTION: 'Tooth sensitivity occurs when the tooth\'s enamel wears down, exposing the underlying dentin and nerve endings.',
      ICON: 'fas fa-search',
      LINK_TEXT: 'Learn More',
      LINK_HREF: '#learn-more',
    },
    {
      TITLE: 'Prevention Tips',
      DESCRIPTION: 'Use a soft-bristled toothbrush, avoid acidic foods, and choose toothpaste specifically designed for sensitive teeth.',
      ICON: 'fas fa-shield-alt',
      LINK_TEXT: 'Learn More',
      LINK_HREF: '#prevention',
    },
    {
      TITLE: 'Treatment Options',
      DESCRIPTION: 'Regular use of sensitivity toothpaste like Medident can provide relief and long-term protection.',
      ICON: 'fas fa-heart',
      LINK_TEXT: 'Learn More',
      LINK_HREF: '#treatment',
    },
  ],
  DETAIL_SECTION: {
    TITLE: 'Why Choose Medident for Sensitivity?',
    DESCRIPTION: 'Medident Sensitive Care is specially formulated with advanced ingredients that provide immediate relief while building long-term protection against sensitivity.',
    BENEFITS: [
      'Clinically proven potassium nitrate formula',
      'Strengthens enamel with fluoride protection',
      'Gentle daily use formula',
      'Fresh mint flavor for lasting freshness',
    ],
    ALT_TEXT: 'Medident Sensitive Care Benefits',
    IMAGE: '/assets/medident-sensitive-care.svg',
  },
  PREVENTION_TIPS: {
    TITLE: 'Daily Care Tips',
    SUBTITLE: 'Simple habits to protect your teeth from sensitivity',
    TIPS: [
      {
        TITLE: 'Use Soft-Bristled Toothbrush',
        DESCRIPTION: 'Gentle brushing prevents enamel wear and gum recession',
      },
      {
        TITLE: 'Avoid Acidic Foods',
        DESCRIPTION: 'Limit citrus fruits, sodas, and vinegar-based foods',
      },
      {
        TITLE: 'Don\'t Brush Immediately After Eating',
        DESCRIPTION: 'Wait 30-60 minutes after meals before brushing',
      },
      {
        TITLE: 'Use Fluoride Toothpaste',
        DESCRIPTION: 'Strengthens enamel and prevents decay',
      },
    ],
  },
} as const;
