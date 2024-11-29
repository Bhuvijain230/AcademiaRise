import React from 'react';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeatureSection from './FeatureSection';
import MentorshipSection from './MentorshipSection';
import CommunitySection from './CommunitySection';
import HowItWorks from './HowItWorks';
import MissionSection from './MissionSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import '../styles.css';





const AcademiaRise = () => {
  return (
    <main className="main">

      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <MentorshipSection />
      <CommunitySection />
      <HowItWorks />
      <MissionSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default AcademiaRise;