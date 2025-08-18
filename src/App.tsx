import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CompetitionSection from './components/CompetitionSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import RegistrationSection from './components/RegistrationSection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [competitionType, setCompetitionType] = useState<'drone-soccer' | 'autonomous'>('drone-soccer');

  return (
    <div className="bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CompetitionSection 
          competitionType={competitionType}
          setCompetitionType={setCompetitionType}
        />
        <ScheduleSection competitionType={competitionType} />
        <GallerySection />
        <RegistrationSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
