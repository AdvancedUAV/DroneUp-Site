# Layout & Structure Specification

## Overview

The DroneUp website is a single-page application with distinct sections that flow seamlessly into each other. The layout emphasizes visual hierarchy, smooth transitions, and engaging user experience.

## Page Structure

### 1. Navigation Header
- **Position**: Fixed at top, transparent to solid on scroll
- **Height**: 80px (desktop), 60px (mobile)
- **Content**: Logo, navigation menu, CTA button
- **Behavior**: Sticky navigation with backdrop blur effect

### 2. Hero Section
- **Height**: 100vh (full viewport height)
- **Layout**: Centered content with background video/animation
- **Content**: Main headline, date display (prominently positioned below main headline), subheadline, CTA buttons, hero image/video
- **Background**: Animated gradient or drone footage
- **Scroll Indicator**: Animated arrow or scroll text

### 3. About Section
- **Height**: Auto (content-driven)
- **Layout**: Two-column grid (desktop), single column (mobile)
- **Content**: What is DroneUp, mission statement, key features
- **Visual Elements**: Icons, illustrations, statistics
- **Background**: Subtle pattern or gradient

### 4. Competition Details
- **Height**: Auto (content-driven)
- **Layout**: Card-based grid (3 columns desktop, 1 column mobile)
- **Content**: Rules, format, scoring, equipment
- **Visual Elements**: Infographics, diagrams, sample images
- **Background**: Dark section with accent colors

### 5. Schedule Section
- **Height**: Auto (content-driven)
- **Layout**: Timeline layout (desktop), stacked timeline (mobile)
- **Content**: Two-day event agenda with detailed timing
- **Visual Elements**: Timeline graphics, time indicators, day separators
- **Background**: Light section with subtle patterns

### 6. Gallery/Media Section
- **Height**: Auto (content-driven)
- **Layout**: Masonry grid or carousel
- **Content**: Photos, videos, highlights from past competitions
- **Visual Elements**: Hover effects, lightbox functionality
- **Background**: Light section with subtle patterns

### 7. Registration/Contact Section
- **Height**: Auto (content-driven)
- **Layout**: Form and information side-by-side (desktop), stacked (mobile)
- **Content**: Registration form, contact information, social links
- **Visual Elements**: Form validation, success states
- **Background**: Gradient background with CTA focus

### 8. Footer
- **Height**: Auto (content-driven)
- **Layout**: Multi-column grid with social links
- **Content**: Copyright, links, social media, newsletter signup
- **Visual Elements**: Subtle branding elements
- **Background**: Dark section matching header

## Section Spacing

### Vertical Spacing
- **Section Padding**: 96px top/bottom (desktop), 64px (tablet), 48px (mobile)
- **Content Padding**: 32px left/right (desktop), 24px (tablet), 16px (mobile)
- **Element Spacing**: 48px between major elements, 24px between minor elements

### Horizontal Spacing
- **Container Max Width**: 1200px
- **Grid Gutter**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Content Margins**: Auto-centered with max-width constraint

## Grid System

### 12-Column Grid (Desktop)
- **Primary Content**: 8 columns
- **Sidebar/Secondary**: 4 columns
- **Full Width**: 12 columns
- **Gutter**: 32px

### 8-Column Grid (Tablet)
- **Primary Content**: 6 columns
- **Sidebar/Secondary**: 2 columns
- **Full Width**: 8 columns
- **Gutter**: 24px

### 4-Column Grid (Mobile)
- **Primary Content**: 4 columns
- **Sidebar/Secondary**: 4 columns (stacked)
- **Full Width**: 4 columns
- **Gutter**: 16px

## Content Containers

### Main Container
- **Max Width**: 1200px
- **Padding**: 0 32px (desktop), 0 24px (tablet), 0 16px (mobile)
- **Margin**: 0 auto (centered)

### Section Container
- **Width**: 100%
- **Padding**: 96px 0 (desktop), 64px 0 (tablet), 48px 0 (mobile)
- **Background**: Alternating light/dark sections

### Content Wrapper
- **Max Width**: 800px (for text-heavy content)
- **Margin**: 0 auto (centered)
- **Padding**: 0 16px

## Responsive Behavior

### Mobile-First Approach
1. **Base Styles**: Mobile (320px+)
2. **Tablet**: 768px+
3. **Desktop**: 1024px+
4. **Large Desktop**: 1440px+

### Breakpoint Strategy
- **Small Mobile**: 320px - 479px
- **Large Mobile**: 480px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Layout Adaptations
- **Navigation**: Hamburger menu on mobile
- **Hero**: Reduced height and simplified content on mobile
- **Grid**: Single column on mobile, multi-column on larger screens
- **Typography**: Scaled down for mobile readability
- **Spacing**: Reduced padding and margins on mobile

## Visual Hierarchy

### Content Priority
1. **Hero Message** - Primary call-to-action
2. **About Information** - Key value proposition
3. **Competition Details** - Core information
4. **Schedule** - Event timeline and agenda
5. **Gallery** - Social proof and engagement
6. **Registration** - Conversion focus
7. **Footer** - Additional resources

### Typography Hierarchy
- **H1**: Hero titles and main section headings
- **H2**: Subsection headings
- **H3**: Card titles and feature headings
- **H4**: Minor headings and labels
- **Body**: Main content text
- **Caption**: Supporting text and metadata

## Animation & Transitions

### Page Load
- **Staggered Animation**: Elements appear in sequence
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Content slides up from bottom

### Scroll Interactions
- **Parallax**: Subtle background movement
- **Fade In**: Elements appear on scroll
- **Scale**: Elements scale slightly on hover

### Section Transitions
- **Smooth Scrolling**: Between sections
- **Background Transitions**: Color and gradient changes
- **Content Transitions**: Text and image animations

## Accessibility Considerations

### Navigation
- **Skip Links**: Jump to main content
- **Keyboard Navigation**: Full keyboard support
- **Focus Indicators**: Visible focus states

### Content Structure
- **Semantic HTML**: Proper heading hierarchy
- **Landmarks**: ARIA landmarks for screen readers
- **Alt Text**: Descriptive alt text for images

### Visual Design
- **Color Contrast**: WCAG AA compliance
- **Text Size**: Minimum 16px for body text
- **Touch Targets**: Minimum 44px for interactive elements
