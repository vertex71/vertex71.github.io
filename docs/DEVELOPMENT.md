# Development Guide - Medident React

## Quick Start

### Prerequisites
- **Node.js** 16.x or higher
- **npm** 8.x or higher
- **Git** for version control

### Setup Instructions

1. **Clone and Install**
   ```bash
   git clone https://github.com/your-username/medident-react.git
   cd medident-react
   npm install --legacy-peer-deps
   ```

2. **Start Development**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build Production**
   ```bash
   npm run build
   ```

## Development Workflow

### 1. Code Organization

Follow the Single Responsibility Principle (SRP) architecture:

```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── utils/              # Utility functions (SRP compliant)
├── types/              # TypeScript definitions
├── services/           # Business logic
├── data/               # Static data
├── contexts/           # React contexts
├── hooks/              # Custom hooks
└── styles/             # SCSS architecture
```

### 2. Component Development

#### Component Structure
```typescript
// components/ui/ComponentName/ComponentName.tsx
import React from 'react';
import styles from './ComponentName.module.scss';

interface ComponentNameProps {
  // Props with clear types
}

const ComponentName: React.FC<ComponentNameProps> = ({
  // Destructured props
}) => {
  // Component logic
  
  return (
    <div className={styles.componentName}>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

#### SCSS Module Structure
```scss
// ComponentName.module.scss
@import '../../../styles/variables';
@import '../../../styles/mixins';

.componentName {
  // Component styles using design tokens
}
```

### 3. State Management

#### Local State
```typescript
const [state, setState] = useState<StateType>(initialValue);
```

#### Context for Global State
```typescript
// contexts/ExampleContext.tsx
const ExampleContext = createContext<ExampleContextType | undefined>(undefined);

export const useExample = () => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error('useExample must be used within ExampleProvider');
  }
  return context;
};
```

### 4. TypeScript Guidelines

#### Interface Definitions
```typescript
// types/component.types.ts
export interface ComponentProps {
  id: string;
  title: string;
  isActive?: boolean;
  onClick: (id: string) => void;
}
```

#### Utility Functions
```typescript
// utils/specific-purpose.ts
export const specificFunction = (param: ParamType): ReturnType => {
  // Single responsibility implementation
  return result;
};
```

### 5. SCSS Development

#### Variables Usage
```scss
// Use design tokens
.component {
  color: $primary-color;
  padding: $spacing-md;
  border-radius: $border-radius;
}
```

#### Mixins Usage
```scss
// Use responsive mixins
.component {
  @include container;
  
  @include mobile {
    padding: $spacing-sm;
  }
}
```

## Testing

### Unit Tests
```typescript
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Utility Tests
```typescript
// utils/formatters.test.ts
import { formatCurrency } from './formatters';

describe('formatters', () => {
  it('should format currency correctly', () => {
    expect(formatCurrency(100, '৳')).toBe('৳100');
  });
});
```

### Running Tests
```bash
npm test                 # Watch mode
npm test -- --coverage  # With coverage
npm test -- --ci        # CI mode
```

## Code Quality

### ESLint Configuration
```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "max-lines": ["error", 200],
    "max-lines-per-function": ["error", 50]
  }
}
```

### Pre-commit Hooks
```bash
npm install --save-dev husky lint-staged

# .husky/pre-commit
npm run lint
npm run test:ci
```

### SRP Compliance Checklist

- [ ] Each file has single responsibility
- [ ] Functions are focused and pure
- [ ] Components handle one UI concern
- [ ] Utilities are categorized properly
- [ ] Types are separated from implementation
- [ ] Services handle single business domain

## Performance

### Bundle Analysis
```bash
npm run build
npm install -g serve
serve -s build

# Analyze bundle
npx webpack-bundle-analyzer build/static/js/*.js
```

### Optimization Techniques
- Code splitting with React.lazy()
- Memoization with React.memo()
- useMemo and useCallback for expensive operations
- Image optimization and lazy loading

### Performance Monitoring
```typescript
// utils/performance.ts
export const measurePerformance = (name: string, fn: () => void) => {
  performance.mark(`${name}-start`);
  fn();
  performance.mark(`${name}-end`);
  performance.measure(name, `${name}-start`, `${name}-end`);
};
```

## Environment Configuration

### Development Environment
```env
# .env.development
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true
```

### Production Environment
```env
# .env.production
REACT_APP_API_URL=https://api.medident.com
REACT_APP_ENVIRONMENT=production
REACT_APP_DEBUG=false
```

## Debugging

### React Developer Tools
- Install React DevTools browser extension
- Use Profiler for performance analysis
- Debug state and props in real-time

### VS Code Configuration
```json
// .vscode/launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug React App",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}/src"
}
```

### Common Issues

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm start
```

#### SCSS Import Issues
```scss
// Use relative imports
@import '../../../styles/variables';

// Not absolute imports
@import 'src/styles/variables'; // ❌
```

#### Build Failures
```bash
# Clean build
rm -rf build node_modules
npm install --legacy-peer-deps
npm run build
```

## Git Workflow

### Branch Naming
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `refactor/srp-compliance` - Code refactoring
- `docs/readme-update` - Documentation

### Commit Messages
```
feat: add hero slider component

- Implement auto-play functionality
- Add navigation controls
- Include responsive design
- Follow SRP principles
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing

## SRP Compliance
- [ ] Single responsibility maintained
- [ ] No violations introduced
- [ ] Code is properly organized
```

## Deployment

### Build Process
```bash
npm run build
```

### Deploy to Netlify
```bash
# Drag and drop build folder
# Or connect GitHub repository
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Custom Server
```bash
# Install serve globally
npm install -g serve

# Serve build folder
serve -s build -l 3000
```

## Troubleshooting

### Common Development Issues

#### 1. Legacy Peer Dependencies
**Problem:** npm install fails with peer dependency conflicts
**Solution:**
```bash
npm install --legacy-peer-deps
```

#### 2. SCSS Import Errors
**Problem:** Cannot resolve SCSS imports
**Solution:**
```scss
// Use correct relative paths
@import '../../../styles/variables';
```

#### 3. TypeScript Build Errors
**Problem:** TypeScript compilation fails
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

#### 4. Hot Reload Issues
**Problem:** Changes not reflecting in browser
**Solution:**
```bash
# Restart development server
npm start
```

### Performance Issues

#### 1. Large Bundle Size
**Problem:** JavaScript bundle too large
**Solution:**
- Implement code splitting
- Remove unused dependencies
- Use dynamic imports

#### 2. Slow Component Rendering
**Problem:** Components re-render frequently
**Solution:**
- Use React.memo()
- Implement useMemo() and useCallback()
- Check prop drilling

## Contributing Guidelines

### Code Standards
1. Follow Single Responsibility Principle
2. Write comprehensive TypeScript types
3. Add unit tests for new features
4. Follow existing SCSS architecture
5. Update documentation

### Review Process
1. Create feature branch
2. Implement changes following SRP
3. Add tests and documentation
4. Create pull request
5. Address review feedback
6. Merge after approval

### Release Process
1. Update version in package.json
2. Update CHANGELOG.md
3. Create release branch
4. Test thoroughly
5. Merge to main
6. Tag release
7. Deploy to production

Remember: Every piece of code should have a single, well-defined responsibility!