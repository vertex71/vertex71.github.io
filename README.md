# Medident React - Modern Oral Care Website

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-1.69.5-pink.svg)](https://sass-lang.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/user/medident-react)

A modern, responsive React application for Medident oral care products by VERTEX International. Built with TypeScript, SCSS, and following Single Responsibility Principle (SRP) architecture.

## 🌟 Key Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎯 Interactive Elements**: Product carousel, image zoom, sensitivity quiz
- **🛒 E-commerce Ready**: Shopping cart functionality with local storage
- **🔧 TypeScript**: Full type safety and enhanced developer experience
- **🎭 SCSS Architecture**: Modular styling with variables, mixins, and utilities
- **📐 SRP Compliance**: Single Responsibility Principle throughout codebase
- **⚡ Performance Optimized**: Code splitting and optimized bundle size

## 📸 Website Sections

### Hero Slider Section
Dynamic carousel showcasing Medident products with auto-play functionality.

**Features:**
- Auto-rotating slides (5-second intervals)
- Manual navigation with arrows and dots
- Responsive background gradients
- Call-to-action buttons

### Product Showcase
Interactive product cards with detailed information and quick actions.

**Features:**
- Product comparison tools
- Quick add to cart functionality
- Detailed product benefits
- Price and discount display

### Sensitivity Quiz
Interactive assessment to help users find the right product.

**Features:**
- Multi-step questionnaire
- Progress tracking
- Personalized recommendations
- Results with product suggestions

### Education Section
Informative content about oral health and tooth sensitivity.

**Features:**
- Educational cards with icons
- Learn more functionality
- Professional medical information

### Customer Testimonials
Social proof with customer reviews and ratings.

**Features:**
- 5-star rating system
- Customer photos and locations
- Real testimonials from Bangladesh

### About VERTEX International
Company information and values showcase.

**Features:**
- Company statistics
- Core values presentation
- Mission and vision statements
- Certifications and awards

### Contact Section
Customer support and inquiry form.

**Features:**
- Contact form with validation
- Company address and contact details
- Professional layout

## 🏗️ Architecture

### Single Responsibility Principle Implementation

The codebase has been completely refactored to follow SRP, ensuring each file has exactly one responsibility:

```
src/
├── components/
│   ├── layout/                 # Layout components
│   │   ├── Header/
│   │   └── Footer/
│   ├── sections/              # Page sections (NEW - SRP compliant)
│   │   ├── HeroSlider/        # Hero carousel functionality
│   │   └── ProductShowcase/   # Product display logic
│   ├── quiz/                  # Quiz components
│   │   └── SensitivityQuiz/
│   └── ui/                    # Reusable UI components
│       └── Button/
├── pages/                     # Page components
│   ├── HomePage/
│   ├── ProductDetails/
│   └── Cart/
├── utils/                     # Utility functions (SRP refactored)
│   ├── formatters.ts         # Currency, date, file formatting
│   ├── validators.ts         # Form validation utilities
│   ├── text.ts              # Text manipulation
│   ├── dom.ts               # DOM operations & device detection
│   ├── arrays.ts            # Array utilities
│   ├── objects.ts           # Object utilities
│   ├── performance.ts       # Debounce, throttle, ID generation
│   ├── cart.ts              # Cart calculations
│   └── helpers.ts           # Re-exports for backward compatibility
├── types/                    # TypeScript definitions
│   ├── product.types.ts     # Product-related types
│   └── global.d.ts          # Global type definitions
├── services/                 # Business logic services
│   └── productService.ts    # Product data operations
├── data/                    # Data files
│   ├── products.ts          # Product catalog data
│   ├── heroSlides.ts        # Hero slider content
│   ├── productShowcaseData.ts # Showcase configuration
│   ├── testimonials.ts      # Customer testimonials
│   ├── navigation.ts        # Navigation menu items
│   └── quizQuestions.ts     # Quiz configuration
├── contexts/                # React contexts
│   └── CartContext.tsx      # Shopping cart state
├── hooks/                   # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useIntersectionObserver.ts
│   ├── useScrollPosition.ts
│   ├── useDebounce.ts
│   └── useToggle.ts
└── styles/                  # SCSS architecture
    ├── _variables.scss      # Design tokens
    ├── _mixins.scss         # Reusable patterns
    ├── _globals.scss        # Global styles
    ├── _responsive.scss     # Utility classes
    └── index.scss           # Main entry point
```

### Before vs After SRP Refactoring

#### ❌ Before (SRP Violations)
- **HomePage.tsx**: 945 lines, 8+ responsibilities
- **utils/helpers.ts**: 199 lines, 10+ different utility categories
- **data/products.ts**: Mixed data, types, and utilities

#### ✅ After (SRP Compliant)
- **Each component**: Single, focused responsibility
- **Utils**: Categorized by purpose (formatters, validators, etc.)
- **Clean separation**: Data, types, and services in dedicated files

## 🛠️ Technology Stack

### Frontend
- **React 18.2** - Modern React with hooks and context
- **TypeScript 4.9.5** - Type safety and enhanced DX
- **React Router 7.9.3** - Client-side routing
- **SCSS 1.93.2** - Advanced styling with variables and mixins

### Development Tools
- **React Scripts 5.0.1** - Build tooling and development server
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting (configured via ESLint)

### Testing
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing utilities

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/medident-react.git
   cd medident-react
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   > **Note**: The `--legacy-peer-deps` flag resolves TypeScript version compatibility with React Scripts 5.0.1

3. **Start development server**
   ```bash
   npm start
   ```
   
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Starts development server on port 3000 |
| `npm run build` | Creates optimized production build |
| `npm test` | Runs test suite in watch mode |
| `npm run eject` | Ejects from Create React App (irreversible) |

## 🎨 SCSS Architecture

### Design System
- **Variables**: Centralized design tokens for colors, typography, spacing
- **Mixins**: Reusable patterns for responsive design, buttons, forms
- **Utilities**: Helper classes for common layouts and spacing
- **Components**: Modular component-specific styles

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoint mixins
- **Design Tokens**: Consistent colors, spacing, and typography
- **Utility Classes**: Flexbox, grid, and spacing utilities
- **Component Scoping**: CSS Modules for component isolation

## 🛒 E-commerce Features

### Shopping Cart
- Add/remove products with variants (size selection)
- Quantity management
- Local storage persistence
- Real-time total calculations

### Product Management
- Product catalog with variants
- Image galleries with zoom functionality
- Product comparison tools
- Search and filtering capabilities

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://api.yourmedidentapi.com
REACT_APP_ENVIRONMENT=development
REACT_APP_VERSION=1.0.0
```

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px

## 🎯 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Browser caching for static assets

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: 84.82 kB (gzipped)
- **CSS Size**: 9.96 kB (gzipped)

## 🧪 Testing

### Test Coverage
- Component unit tests
- Hook testing
- Utility function tests
- Integration tests for user flows

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in CI mode
npm test -- --ci --coverage --watchAll=false
```

## 🔄 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `build` folder contents

## 📚 Documentation

### Code Documentation
- **TypeScript**: Comprehensive type definitions
- **JSDoc**: Function and component documentation
- **README**: Setup and usage instructions
- **Architecture**: SRP implementation guide

### API Documentation
- Product data structure
- Cart operations
- Local storage schema
- Component prop interfaces

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Guidelines
- Follow Single Responsibility Principle
- Write comprehensive TypeScript types
- Add unit tests for new features
- Follow existing SCSS architecture
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **VERTEX International** - Product data and brand assets
- **React Community** - Amazing ecosystem and tools
- **SCSS/Sass** - Powerful CSS preprocessing
- **TypeScript Team** - Type safety and developer experience

## 📞 Support

For support and questions:
- **Email**: sales.vertex23@gmail.com
- **Phone**: +880 1328990900
- **Address**: House-10, Road-5, Block-B, Rampura, Banasree, Dhaka-1219, Bangladesh

---

**Built with ❤️ by the Medident Development Team**

*Proudly supporting oral health in Bangladesh since 2008*
