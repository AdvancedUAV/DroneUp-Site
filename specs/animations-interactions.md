# Animations & Interactions Specification

## Overview

The DroneUp website features sophisticated animations and interactions that enhance user experience, create visual interest, and guide user attention. All animations are purposeful, performant, and accessible.

## Animation Principles

### Design Philosophy
- **Purposeful**: Every animation serves a specific purpose
- **Smooth**: 60fps performance for all animations
- **Accessible**: Respect user motion preferences
- **Consistent**: Unified animation language throughout
- **Performance**: Optimized for all devices

### Animation Guidelines
- **Duration**: 200ms - 800ms for most interactions
- **Easing**: Custom cubic-bezier curves for natural feel
- **Stagger**: 50ms - 150ms between elements
- **Scale**: Subtle scaling (0.95 - 1.05) for hover effects
- **Opacity**: Smooth transitions (0 - 1) for fade effects

## Animation Categories

### 1. Page Load Animations

#### Hero Section Entrance
```typescript
const heroAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  title: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  },
  subtitle: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
  },
  ctaButtons: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.6, ease: "easeOut" }
  }
};
```

#### Staggered Content Reveal
```typescript
const staggerReveal = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

### 2. Scroll-Triggered Animations

#### Fade In on Scroll
```typescript
const fadeInScroll = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

#### Parallax Effects
```typescript
const parallaxEffect = {
  initial: { y: 0 },
  whileInView: { y: -50 },
  viewport: { once: false, amount: 0.5 },
  transition: { duration: 1, ease: "linear" }
};
```

#### Scale on Scroll
```typescript
const scaleOnScroll = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: "easeOut" }
};
```

### 3. Interactive Animations

#### Button Interactions
```typescript
const buttonAnimations = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px rgba(0, 212, 255, 0.3)",
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeOut" }
  },
  glow: {
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

#### Card Hover Effects
```typescript
const cardHover = {
  initial: { y: 0, boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -8,
    boxShadow: "0 12px 40px rgba(0, 212, 255, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

#### Image Hover Effects
```typescript
const imageHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

### 4. Navigation Animations

#### Menu Toggle
```typescript
const menuToggle = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" }
  }
};
```

#### Navbar Background
```typescript
const navbarBackground = {
  transparent: {
    backgroundColor: "rgba(10, 10, 10, 0)",
    backdropFilter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  solid: {
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    backdropFilter: "blur(20px)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

### 5. Form Animations

#### Form Field Focus
```typescript
const formFieldFocus = {
  initial: { borderColor: "rgba(255, 255, 255, 0.2)" },
  focus: {
    borderColor: "#00D4FF",
    boxShadow: "0 0 0 3px rgba(0, 212, 255, 0.1)",
    transition: { duration: 0.2, ease: "easeOut" }
  }
};
```

#### Form Validation
```typescript
const formValidation = {
  error: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.4, ease: "easeOut" }
  },
  success: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

## Interaction Patterns

### 1. Hover Interactions

#### Subtle Lift Effect
- **Target**: Cards, buttons, interactive elements
- **Animation**: Y-axis translation (-4px to -8px)
- **Duration**: 200ms
- **Easing**: easeOut

#### Glow Effect
- **Target**: Primary buttons, important elements
- **Animation**: Box shadow with brand color
- **Duration**: 300ms
- **Easing**: easeOut

#### Scale Effect
- **Target**: Images, icons, small elements
- **Animation**: Scale (1.05 to 1.1)
- **Duration**: 200ms
- **Easing**: easeOut

### 2. Click/Tap Interactions

#### Button Press
- **Target**: All buttons
- **Animation**: Scale down (0.95)
- **Duration**: 100ms
- **Easing**: easeOut

#### Card Selection
- **Target**: Selectable cards
- **Animation**: Scale and shadow change
- **Duration**: 200ms
- **Easing**: easeOut

### 3. Scroll Interactions

#### Sticky Navigation
- **Trigger**: Scroll position > 100px
- **Animation**: Background opacity and blur
- **Duration**: 300ms
- **Easing**: easeOut

#### Section Transitions
- **Trigger**: Section enters viewport
- **Animation**: Fade in with slight upward movement
- **Duration**: 600ms
- **Easing**: easeOut

### 4. Loading States

#### Skeleton Loading
```typescript
const skeletonAnimation = {
  initial: { opacity: 0.3 },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
```

#### Progress Indicators
```typescript
const progressAnimation = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 2, ease: "easeOut" }
};
```

## Performance Optimization

### Animation Performance

#### GPU Acceleration
- Use `transform` and `opacity` for animations
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` CSS property sparingly

#### Reduced Motion
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const safeAnimation = prefersReducedMotion ? {
  duration: 0,
  ease: "linear"
} : {
  duration: 0.6,
  ease: "easeOut"
};
```

#### Throttling
```typescript
const useThrottledScroll = (callback: () => void, delay: number) => {
  const [lastRun, setLastRun] = useState(Date.now());
  
  useEffect(() => {
    const handler = () => {
      if (Date.now() - lastRun >= delay) {
        callback();
        setLastRun(Date.now());
      }
    };
    
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [callback, delay, lastRun]);
};
```

## Accessibility Considerations

### Motion Preferences
```typescript
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};
```

### Focus Indicators
```typescript
const focusAnimation = {
  initial: { boxShadow: "0 0 0 0 rgba(0, 212, 255, 0)" },
  focus: {
    boxShadow: "0 0 0 3px rgba(0, 212, 255, 0.5)",
    transition: { duration: 0.2, ease: "easeOut" }
  }
};
```

## Animation Utilities

### Custom Hooks

#### useScrollAnimation
```typescript
const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });
  
  return { ref, inView };
};
```

#### useHoverAnimation
```typescript
const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false)
  };
  
  return { isHovered, hoverProps };
};
```

### Animation Variants

#### Common Variants
```typescript
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  }
};
```

## Implementation Guidelines

### Framer Motion Setup
```typescript
import { motion, AnimatePresence } from 'framer-motion';

// Wrap components with motion
const AnimatedComponent = motion.div;

// Use AnimatePresence for exit animations
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

### CSS Transitions
```css
/* For simple hover effects */
.interactive-element {
  transition: all 0.2s ease-out;
}

.interactive-element:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
}
```

### Performance Monitoring
```typescript
const useAnimationPerformance = () => {
  const [fps, setFps] = useState(60);
  
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
  }, []);
  
  return fps;
};
```
