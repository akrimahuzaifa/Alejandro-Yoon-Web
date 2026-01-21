import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { WaitlistSection } from '../components/WaitlistSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WaitlistSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
