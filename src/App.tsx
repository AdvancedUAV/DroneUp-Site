import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CompetitionSection from './components/CompetitionSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
};

export default App;
