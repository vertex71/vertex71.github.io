# Medident Website

A modern, responsive website for Medident toothpaste - advanced dental care solutions made in Bangladesh.

## Overview

This website is designed following the comprehensive design plan for Vertex International's Medident toothpaste brand. It features a Sensodyne-inspired design with local Bangladesh market appeal, focusing on trust-building, education, and e-commerce functionality.

## Features

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, 1024px, 1200px+
- **Modern UI**: Clean, professional design with blue/green color scheme
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Performance**: Optimized images, CSS, and JavaScript for fast loading

### 🏠 Homepage
- Hero section with product showcase and local brand messaging
- Interactive product carousel
- Sensitivity quiz with personalized recommendations
- Educational content about tooth sensitivity
- Customer testimonials
- Company information and manufacturing details
- Contact form with validation

### 🛍️ Product Page
- Detailed product information with image gallery
- Product variants (different sizes) with pricing
- Quantity selector and add to cart functionality
- Comprehensive product tabs (ingredients, usage, clinical studies, FAQ)
- Customer reviews with rating system
- Related products section
- Wishlist functionality

### 🔧 Interactive Features
- **Sensitivity Quiz**: 3-question assessment with personalized results
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Product Gallery**: Thumbnail navigation with hover zoom
- **Shopping Cart**: Local storage with quantity management
- **Form Validation**: Real-time validation with error messages
- **Smooth Scrolling**: Enhanced navigation experience

### 📱 Mobile Optimization
- Touch-friendly interface
- Optimized layouts for small screens
- Sticky add-to-cart button on product pages
- Collapsible navigation menu
- Fast loading on mobile networks

## Technology Stack

- **HTML5**: Semantic markup with proper SEO structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Vanilla JS with classes and modern features
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Poppins and Inter for typography

## File Structure

```
medident-website/
├── index.html              # Homepage
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js            # Core functionality
│   └── products.js        # Product page specific features
├── pages/
│   └── products.html      # Product detail page
├── images/               # Product and brand images
└── README.md            # Documentation
```

## Key Components

### CSS Architecture
- **CSS Variables**: Centralized color and spacing system
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Component-based**: Modular CSS for maintainability
- **Animations**: Smooth transitions and hover effects

### JavaScript Modules
- **SensitivityQuiz**: Interactive assessment tool
- **ShoppingCart**: E-commerce functionality
- **ProductGallery**: Image showcase with navigation
- **FormValidation**: User input validation
- **MobileMenu**: Responsive navigation

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load as they come into viewport
- **Optimized Assets**: Compressed images and minified CSS/JS
- **Caching**: Local storage for cart and preferences
- **Async Loading**: Non-blocking JavaScript execution
- **Responsive Images**: Appropriate sizes for different devices

## SEO Optimization

- Semantic HTML structure
- Meta descriptions and title tags
- Open Graph tags for social sharing
- Structured data markup
- XML sitemap ready
- Local SEO optimization for Bangladesh market

## Accessibility Features

- Keyboard navigation support
- Screen reader compatibility
- High contrast color scheme
- Focus indicators
- Alt text for all images
- ARIA labels where needed

## Setup Instructions

1. **Clone or Download**: Get the project files
2. **Web Server**: Serve files through a web server (not file://)
3. **Images**: Add product images to the `/images` folder
4. **Customization**: Update content in HTML files
5. **Testing**: Test across different devices and browsers

## Image Requirements

### Homepage Images
- `medident-logo.png` (200x60px) - Brand logo
- `medident-hero-product.png` (600x400px) - Hero product image
- `medident-sensitive-care.png` (400x300px) - Product showcase
- `customer-1.jpg`, `customer-2.jpg`, `customer-3.jpg` (100x100px) - Testimonials
- `about-manufacturing.jpg` (600x400px) - About section

### Product Page Images
- `medident-sensitive-care-large.png` (800x600px) - Main product image
- `medident-front.png` (200x150px) - Product front view
- `medident-back.png` (200x150px) - Product back view
- `medident-side.png` (200x150px) - Product side view
- `medident-tube.png` (200x150px) - Tube only view

## Customization Guide

### Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2E86C1;    /* Main brand color */
    --secondary-color: #58D68D;  /* Secondary/accent */
    --accent-color: #F39C12;     /* Highlights */
}
```

### Content
- Update product information in HTML files
- Modify testimonials and reviews
- Customize contact information
- Adjust pricing and product variants

### Features
- Enable/disable shopping cart functionality
- Customize quiz questions and logic
- Add new product categories
- Integrate with payment gateways

## Future Enhancements

- **E-commerce Integration**: Connect to payment processors
- **User Accounts**: Registration and login system
- **Inventory Management**: Real-time stock updates
- **Multi-language**: Bengali and English support
- **Admin Panel**: Content management system
- **Analytics**: Google Analytics integration
- **Progressive Web App**: Offline functionality

## Support

For questions or issues:
- Email: sales.vertex23@gmail.com
- Phone: +880 1328990900
- Address: House-10, Road-5, Block-B, Rampura, Banasree, Dhaka-1219

## License

© 2024 Vertex International. All rights reserved.

---

**Made in Bangladesh with Pride** 🇧🇩