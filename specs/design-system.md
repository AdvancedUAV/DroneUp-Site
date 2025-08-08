# Design System Specification

## Overview

The DroneUp website design system emphasizes modern, sleek aesthetics with bold design choices that capture attention and convey the excitement of drone soccer competition.

## Color Palette

### Primary Colors
- **Electric Blue** `#00D4FF` - Primary brand color, represents technology and innovation
- **Neon Green** `#00FF88` - Secondary accent, represents energy and competition
- **Deep Space** `#0A0A0A` - Primary background, creates depth and sophistication

### Secondary Colors
- **Cyber Purple** `#8A2BE2` - Tertiary accent for highlights and special elements
- **Hot Pink** `#FF0080` - Call-to-action and attention-grabbing elements
- **Pure White** `#FFFFFF` - Text and high-contrast elements
- **Light Gray** `#F5F5F5` - Secondary backgrounds and subtle elements

### Semantic Colors
- **Success** `#00FF88` - Green for positive actions
- **Warning** `#FFB800` - Orange for alerts
- **Error** `#FF4444` - Red for errors
- **Info** `#00D4FF` - Blue for information

## Typography

### Font Family
- **Primary**: 'Inter', sans-serif - Modern, clean, highly readable
- **Secondary**: 'Orbitron', monospace - Futuristic, tech-focused for headings
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-Bold**: 600
- **Bold**: 700
- **Extra Bold**: 800

### Type Scale
- **Hero Title**: 4rem (64px) - Orbitron, Bold
- **Section Headings**: 2.5rem (40px) - Orbitron, Semi-Bold
- **Subheadings**: 1.5rem (24px) - Inter, Medium
- **Body Text**: 1rem (16px) - Inter, Regular
- **Small Text**: 0.875rem (14px) - Inter, Regular
- **Caption**: 0.75rem (12px) - Inter, Light

## Visual Design Elements

### Gradients
- **Primary Gradient**: Linear gradient from Electric Blue to Cyber Purple
- **Secondary Gradient**: Radial gradient from Neon Green to transparent
- **Background Gradient**: Subtle gradient from Deep Space to slightly lighter black

### Shadows & Depth
- **Card Shadow**: `0 8px 32px rgba(0, 212, 255, 0.15)`
- **Button Shadow**: `0 4px 16px rgba(0, 255, 136, 0.3)`
- **Text Shadow**: `0 2px 4px rgba(0, 0, 0, 0.5)` for hero text

### Borders & Dividers
- **Border Radius**: 12px for cards, 8px for buttons, 4px for inputs
- **Border Style**: 1px solid with subtle glow effects
- **Divider Style**: Gradient lines or animated separators

## UI Components

### Buttons
- **Primary Button**: Electric Blue background with white text, hover glow effect
- **Secondary Button**: Transparent with Electric Blue border, hover fill effect
- **CTA Button**: Hot Pink background with white text, pulsing animation
- **Ghost Button**: Transparent with subtle border, hover opacity change

### Cards
- **Standard Card**: Dark background with subtle glow, rounded corners
- **Feature Card**: Gradient background with hover lift effect
- **Testimonial Card**: Light background with shadow, quote styling

### Navigation
- **Navbar**: Transparent to solid on scroll, with glow effects
- **Menu Items**: Hover animations with underline or glow effects
- **Mobile Menu**: Slide-in animation with backdrop blur

## Iconography

### Style
- **Line Icons**: Clean, minimal line style with 2px stroke
- **Filled Icons**: Solid fill for primary actions
- **Animated Icons**: Subtle animations for interactive elements

### Icon Set
- **Heroicons** for general UI icons
- **Custom drone and soccer icons** for sport-specific elements
- **Animated SVG icons** for special features

## Spacing System

### Base Unit
- **8px** as the base spacing unit

### Spacing Scale
- **4px** (0.25rem) - Extra small spacing
- **8px** (0.5rem) - Small spacing
- **16px** (1rem) - Base spacing
- **24px** (1.5rem) - Medium spacing
- **32px** (2rem) - Large spacing
- **48px** (3rem) - Extra large spacing
- **64px** (4rem) - Hero spacing
- **96px** (6rem) - Section spacing

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-First Approach
- Start with mobile design
- Scale up for larger screens
- Maintain touch-friendly interactions
- Optimize typography for readability

## Accessibility

### Color Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- High contrast mode support

### Focus States
- Visible focus indicators
- Keyboard navigation support
- Screen reader compatibility

### Motion
- Respect user's motion preferences
- Provide reduced motion alternatives
- Smooth, purposeful animations
