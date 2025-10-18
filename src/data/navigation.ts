// Navigation type definitions
export interface NavigationChild {
  id: string;
  label: string;
  path: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  type: 'link' | 'dropdown' | 'cta';
  icon?: string;
  className?: string;
  children?: NavigationChild[];
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    type: 'link'
  },
  {
    id: 'products',
    label: 'Products',
    path: '/products',
    type: 'dropdown',
    icon: 'fas fa-chevron-down',
    children: [
      {
        id: 'medident-sensitive-care',
        label: 'Medident Sensitive Care',
        path: '/products/medident-sensitive-care'
      },
      {
        id: 'product-benefits',
        label: 'Product Benefits',
        path: '/#benefits'
      },
      {
        id: 'usage-instructions',
        label: 'Usage Instructions',
        path: '/#usage'
      }
    ]
  },
  {
    id: 'oral-health',
    label: 'Oral Health',
    path: '#oral-health',
    type: 'dropdown',
    icon: 'fas fa-chevron-down',
    children: [
      {
        id: 'understanding-sensitivity',
        label: 'Understanding Sensitivity',
        path: '/#sensitivity'
      },
      {
        id: 'dental-care-tips',
        label: 'Dental Care Tips',
        path: '/#tips'
      },
      {
        id: 'faq',
        label: 'FAQ',
        path: '/#faq'
      }
    ]
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/#about',
    type: 'link'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    type: 'link'
  },
  {
    id: 'buy-online',
    label: 'Buy Online',
    path: '#buy',
    type: 'cta',
    className: 'cta-btn'
  }
];

export const footerLinks: Record<string, FooterLink[]> = {
  products: [
    { label: 'Medident Sensitive Care', path: '/products/medident-sensitive-care' },
    { label: 'Product Benefits', path: '/#benefits' },
    { label: 'Usage Instructions', path: '/#usage' },
    { label: 'Buy Online', path: '#buy' }
  ],
  oralHealth: [
    { label: 'Understanding Sensitivity', path: '/#sensitivity' },
    { label: 'Dental Care Tips', path: '/#tips' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Educational Resources', path: '/#education' }
  ],
  company: [
    { label: 'About Us', path: '/#about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Quality Standards', path: '/#quality' },
    { label: 'Manufacturing', path: '/#manufacturing' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Sitemap', path: '/sitemap' }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    url: '#',
    icon: 'fab fa-facebook'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: '#',
    icon: 'fab fa-instagram'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: '#',
    icon: 'fab fa-youtube'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: '#',
    icon: 'fab fa-linkedin'
  }
];