# Technical Architecture Specification

## Overview

The DroneUp website is built using React.js with modern development practices, focusing on performance, maintainability, and scalability. The architecture supports easy animations, future editability, and optimal user experience.

## Technology Stack

### Frontend Framework
- **React.js 18+**: Latest version with hooks and concurrent features
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library for consistent iconography

### State Management
- **React Context**: For global state management
- **React Query**: For server state management (future API integration)
- **Local Storage**: For user preferences and session data

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Git hooks for code quality
- **Commitlint**: Conventional commit messages

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── sections/        # Page sections (Hero, About, etc.)
│   └── forms/           # Form components
├── hooks/               # Custom React hooks
├── context/             # React context providers
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── styles/              # Global styles and Tailwind config
├── assets/              # Images, fonts, and static files
└── data/                # Static content and configuration
```

## Component Architecture

### Component Hierarchy

#### 1. App Component
```typescript
// Main application component
interface AppProps {
  // Global props
}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <CompetitionSection />
          <ScheduleSection />
          <GallerySection />
          <RegistrationSection />
        </main>
        <Footer />
      </ScrollProvider>
    </ThemeProvider>
  );
};
```

#### 2. Section Components
```typescript
// Example section component structure
interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};
```

#### 3. Reusable Components
```typescript
// Example button component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, onClick, disabled }) => {
  // Component implementation
};
```

## State Management

### Global State Structure

```typescript
// App context for global state
interface AppState {
  theme: 'light' | 'dark';
  isMenuOpen: boolean;
  currentSection: string;
  userPreferences: UserPreferences;
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Actions
type AppAction = 
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_CURRENT_SECTION'; payload: string }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> };
```

### Local State Management

```typescript
// Custom hooks for local state
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

const useIntersectionObserver = (ref: RefObject<Element>, options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};
```

## Animation System

### Framer Motion Integration

```typescript
// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated components
const AnimatedSection: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.section>
  );
};
```

### Scroll-Triggered Animations

```typescript
// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });
  
  return { ref, inView };
};

// Usage in components
const AnimatedCard: React.FC<CardProps> = ({ children }) => {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
```

## Performance Optimization

### Code Splitting

```typescript
// Lazy loading for sections
const HeroSection = lazy(() => import('./sections/HeroSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const CompetitionSection = lazy(() => import('./sections/CompetitionSection'));

// Suspense wrapper
const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeroSection />
      <AboutSection />
      <CompetitionSection />
    </Suspense>
  );
};
```

### Image Optimization

```typescript
// Image component with lazy loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, priority }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};
```

### Memoization

```typescript
// Memoized components for performance
const ExpensiveComponent = memo<ComponentProps>(({ data }) => {
  // Component logic
  return <div>{/* Rendered content */}</div>;
});

// Memoized calculations
const useMemoizedValue = (value: any, dependencies: any[]) => {
  return useMemo(() => {
    // Expensive calculation
    return processedValue;
  }, dependencies);
};
```

## Responsive Design

### Breakpoint System

```typescript
// Tailwind breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Custom hook for responsive design
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('lg');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('sm');
      else if (width < 768) setBreakpoint('md');
      else if (width < 1024) setBreakpoint('lg');
      else if (width < 1280) setBreakpoint('xl');
      else setBreakpoint('2xl');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return breakpoint;
};
```

## Form Handling

### Form Validation

```typescript
// Form validation hook
const useFormValidation = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [touched, setTouched] = useState<Partial<T>>({});
  
  const validate = (field: keyof T, value: any) => {
    // Validation logic
  };
  
  const handleChange = (field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validate(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };
  
  const handleBlur = (field: keyof T) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validate(field, values[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };
  
  return { values, errors, touched, handleChange, handleBlur };
};
```

## Error Handling

### Error Boundaries

```typescript
// Error boundary component
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    
    return this.props.children;
  }
}
```

## Testing Strategy

### Testing Framework

```typescript
// Jest and React Testing Library setup
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Component test example
describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button variant="primary" onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Deployment Configuration

### Build Configuration

```typescript
// Vite configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
```

### Environment Configuration

```typescript
// Environment variables
interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  VITE_API_URL?: string;
  VITE_ANALYTICS_ID?: string;
}

const env: Environment = {
  NODE_ENV: import.meta.env.NODE_ENV,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_ANALYTICS_ID: import.meta.env.VITE_ANALYTICS_ID
};
```

## Future Considerations

### Scalability
- **Component Library**: Build reusable component library
- **Design System**: Implement comprehensive design system
- **Micro-frontends**: Consider micro-frontend architecture for large scale

### Performance
- **Service Workers**: Implement PWA features
- **CDN Integration**: Optimize asset delivery
- **Caching Strategy**: Implement effective caching

### Accessibility
- **ARIA Support**: Comprehensive ARIA implementation
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Optimize for screen readers
