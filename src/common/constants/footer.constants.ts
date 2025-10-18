export const FOOTER = {
  BRANDING: {
    ALT_TEXT: 'VERTEX International Logo',
    BRAND_NAME: 'VERTEX International',
    TAGLINE: 'Leading manufacturer of quality oral care products. Made in Bangladesh with pride.',
  },
  SECTIONS: {
    PRODUCTS: {
      TITLE: 'Products',
      LINKS: {
        MEDIDENT_SENSITIVE_CARE: 'Medident Sensitive Care',
        PRODUCT_BENEFITS: 'Product Benefits',
        USAGE_INSTRUCTIONS: 'Usage Instructions',
        BUY_ONLINE: 'Buy Online',
      },
    },
    ORAL_HEALTH: {
      TITLE: 'Oral Health',
      LINKS: {
        UNDERSTANDING_SENSITIVITY: 'Understanding Sensitivity',
        DENTAL_CARE_TIPS: 'Dental Care Tips',
        FAQ: 'FAQ',
        EDUCATIONAL_RESOURCES: 'Educational Resources',
      },
    },
    COMPANY: {
      TITLE: 'Company',
      LINKS: {
        ABOUT_US: 'About Us',
        CONTACT: 'Contact',
        QUALITY_STANDARDS: 'Quality Standards',
        MANUFACTURING: 'Manufacturing',
      },
    },
  },
  SOCIAL: {
    ARIA_LABELS: {
      FACEBOOK: 'Follow us on Facebook',
      INSTAGRAM: 'Follow us on Instagram',
      YOUTUBE: 'Subscribe to our YouTube channel',
      LINKEDIN: 'Connect with us on LinkedIn',
    },
    URLS: {
      FACEBOOK: 'https://facebook.com/medident',
      INSTAGRAM: 'https://instagram.com/medident',
      YOUTUBE: 'https://youtube.com/medident',
      LINKEDIN: 'https://linkedin.com/company/medident',
    },
  },
  BOTTOM: {
    COPYRIGHT: (year: number) => `© ${year} Vertex International. All rights reserved.`,
    LINKS: {
      PRIVACY_POLICY: 'Privacy Policy',
      TERMS_OF_SERVICE: 'Terms of Service',
      SITEMAP: 'Sitemap',
    },
  },
} as const;
