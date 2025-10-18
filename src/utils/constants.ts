// App Constants
export const APP_NAME = 'Medident';
export const APP_TAGLINE = 'Advanced Sensitivity Protection for Every Smile';
export const COMPANY_NAME = 'VERTEX International';

// Contact Information
export const CONTACT_INFO = {
  address: {
    street: 'House-10, Road-5, Block-B',
    area: 'Rampura, Banasree',
    city: 'Dhaka-1219',
    country: 'Bangladesh'
  },
  phone: '+880 1328990900',
  email: 'sales.vertex23@gmail.com'
};

// Currency
export const CURRENCY = '৳';

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'medident_cart',
  WISHLIST: 'medident_wishlist',
  THEME: 'medident_theme',
  QUIZ_RESULTS: 'medident_quiz_results'
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
};

// Breakpoints (should match CSS)
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1200
};

// Form Validation
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+880|880|0)?1[3-9]\d{8}$/,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 500
};

// Quiz Configuration
export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 3,
  MIN_SCORE_HIGH: 2,
  MIN_SCORE_MODERATE: 1
};

// Product Configuration
export const PRODUCT_CONFIG = {
  MAX_QUANTITY: 10,
  MIN_QUANTITY: 1,
  DEFAULT_QUANTITY: 1
};

// Notification Types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  REVIEWS: '/api/reviews',
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter'
};

// Image Paths
export const IMAGE_PATHS = {
  LOGO: '/assets/vi-logo.jpeg',
  HERO_PRODUCT: '/assets/medident-hero-product.svg',
  MANUFACTURING: '/assets/company/about-manufacturing.svg',
  PRODUCTS: '/assets/products/',
  CUSTOMERS: '/assets/customers/',
  COMPANY: '/assets/company/'
};

// Social Media URLs
export const SOCIAL_URLS = {
  FACEBOOK: 'https://facebook.com/medident',
  INSTAGRAM: 'https://instagram.com/medident',
  YOUTUBE: 'https://youtube.com/medident',
  LINKEDIN: 'https://linkedin.com/company/medident'
};

// Feature Flags (for development)
export const FEATURE_FLAGS = {
  ENABLE_CART: true,
  ENABLE_WISHLIST: true,
  ENABLE_REVIEWS: true,
  ENABLE_QUIZ: true,
  ENABLE_NEWSLETTER: true,
  ENABLE_ANALYTICS: false // Set to true in production
};