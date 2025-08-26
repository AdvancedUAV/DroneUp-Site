# DroneUp Website

**你想做些改变吗?**
- 请先阅读 `docs/SECTIONS.md` 以了解如何进行更改
- 如果你需要帮助 -> https://nooz.boredom.dev/

## 🚀 Features

- **Modern Design**: Sleek, aesthetic design with bold choices and smooth animations
- **Responsive**: Mobile-first responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Accessible**: WCAG 2.1 AA compliant with proper semantic HTML
- **Performance**: Optimized for Core Web Vitals and fast loading
- **TypeScript**: Full TypeScript support for better development experience

## 🎯 Sections

1. **Hero Section**: Compelling landing area with main headline, date display, and CTA buttons
2. **About Section**: Information about DroneUp and the two competition categories with key features
3. **Competition Details**: Rules, format, scoring, and equipment specifications
4. **Schedule Section**: Two-day event agenda with detailed timeline
5. **Gallery Section**: Photo and video showcase with lightbox functionality
6. **Registration Section**: Comprehensive registration form (Google Form) with FAQ
7. **Footer**: Contact information, social links

## 🛠️ Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Intersection Observer**: React Intersection Observer

## 🤝 Contributing

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd droneup-website
   git checkout develop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

5. Commit your changes: `git commit -am 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request into `main` branch

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

- On every contribution to the `main` branch, Github Actions will automatically build for production in the `dist` branch. A webhook informs Hostinger to automatically deploy the build to the domain `https://drone-up.org`.


## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero section with main content
│   ├── AboutSection.tsx # About section with features
│   ├── CompetitionSection.tsx # Competition details
│   ├── ScheduleSection.tsx    # Event schedule
│   ├── GallerySection.tsx     # Photo/video gallery
│   ├── RegistrationSection.tsx # Registration form & FAQ
│   └── Footer.tsx       # Footer with links
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Electric Blue**: `#00D4FF`
- **Neon Green**: `#00FF88`
- **Deep Space**: `#0A0A0A`
- **Cyber Purple**: `#8B5CF6`
- **Hot Pink**: `#EC4899`
- **Pure White**: `#FFFFFF`
- **Light Gray**: `#F3F4F6`

### Typography
- **Headings**: Orbitron (Google Fonts)
- **Body Text**: Inter (Google Fonts)

### Spacing
- **Base Unit**: 8px
- **Section Padding**: 96px (desktop), 64px (tablet), 48px (mobile)

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🎭 Animations

- **Page Load**: Staggered animations for elements
- **Scroll**: Intersection Observer for scroll-triggered animations
- **Hover**: Interactive hover effects and micro-interactions
- **Transitions**: Smooth transitions between sections

## 🔧 Customization

### Updating Content
1. **Hero Section**: Update headlines and date in `HeroSection.tsx`
2. **About Section**: Modify features and statistics in `AboutSection.tsx`
3. **Competition Details**: Update rules and equipment in `CompetitionSection.tsx`
4. **Schedule**: Modify event timeline in `ScheduleSection.tsx`
5. **Gallery**: Replace sample images with actual content in `GallerySection.tsx`
6. **Registration**: Update form fields and FAQ in `RegistrationSection.tsx`
7. **Footer**: Update social links in `Footer.tsx`

8. **Google Form**: Update the Google Form URL in `RegistrationSection.tsx`
9. **Competition Details**: Update the competition details in `data/competitionData.ts`

### Styling
- **Colors**: Update color variables in `tailwind.config.js`
- **Typography**: Modify font families in `index.css`
- **Components**: Edit component-specific styles in individual component files