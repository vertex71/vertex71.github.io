export const TESTIMONIALS_SECTION = {
  HEADER: {
    TITLE: 'What Our Customers Say',
    SUBTITLE: 'Real stories from people who found relief with Medident',
  },
  TESTIMONIALS: [
    {
      NAME: 'Sarah Johnson',
      AGE: 34,
      LOCATION: 'New York, NY',
      IMAGE: '/assets/testimonial-1.svg',
      RATING: 5,
      TEXT: 'I\'ve suffered from sensitive teeth for years. Medident has been a game-changer! I can finally enjoy ice cream again without pain.',
      CONDITION: 'Severe Sensitivity',
    },
    {
      NAME: 'Michael Chen',
      AGE: 28,
      LOCATION: 'Los Angeles, CA',
      IMAGE: '/assets/testimonial-2.svg',
      RATING: 5,
      TEXT: 'As a coffee lover, I was constantly experiencing sensitivity. Medident allows me to enjoy my morning coffee without worry.',
      CONDITION: 'Temperature Sensitivity',
    },
    {
      NAME: 'Emily Rodriguez',
      AGE: 42,
      LOCATION: 'Chicago, IL',
      IMAGE: '/assets/testimonial-3.svg',
      RATING: 5,
      TEXT: 'My dentist recommended Medident and I couldn\'t be happier. The relief was noticeable within just a few days.',
      CONDITION: 'General Sensitivity',
    },
    {
      NAME: 'David Thompson',
      AGE: 51,
      LOCATION: 'Houston, TX',
      IMAGE: '/assets/testimonial-4.svg',
      RATING: 5,
      TEXT: 'I was skeptical at first, but Medident truly works. I can eat normally again without constant tooth pain.',
      CONDITION: 'Chronic Sensitivity',
    },
  ],
  NAVIGATION: {
    ARIA_PREVIOUS: 'Previous testimonial',
    ARIA_NEXT: 'Next testimonial',
    ARIA_GO_TO: (index: number) => `Go to testimonial ${index + 1}`,
  },
  STATISTICS: {
    CUSTOMER_SATISFACTION: {
      VALUE: '94%',
      LABEL: 'Customer Satisfaction',
    },
    HAPPY_CUSTOMERS: {
      VALUE: '50k+',
      LABEL: 'Happy Customers',
    },
    AVERAGE_RELIEF_TIME: {
      VALUE: '7 Days',
      LABEL: 'Average Relief Time',
    },
    YEARS_OF_TRUST: {
      VALUE: '15+',
      LABEL: 'Years of Trust',
    },
  },
} as const;
