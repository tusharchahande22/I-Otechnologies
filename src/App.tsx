import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Vision } from './components/Vision';
import { InnovationLab } from './components/InnovationLab';
import { FeaturedWork } from './components/FeaturedWork';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { TechStack } from './components/TechStack';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BuildingNextGen } from './components/BuildingNextGen';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { ServiceItem } from './types';

export default function App() {
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');

  // Handle URL Hash Changes for Routing
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#terms-and-conditions' || hash === '#terms') {
        setCurrentView('terms');
        window.scrollTo(0, 0);
      } else if (hash === '#home' || hash === '#hero' || hash === '') {
        if (currentView !== 'home' && (hash === '#home' || hash === '#hero')) {
          setCurrentView('home');
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [currentView]);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (currentView !== 'home') return; // Only run Lenis on main home page
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [currentView]);

  const handleOpenEstimatorWithService = (service: ServiceItem) => {
    setSelectedServiceTitle(service.title);
    setEstimatorOpen(true);
  };

  const handleOpenEstimator = () => {
    setSelectedServiceTitle(undefined);
    setEstimatorOpen(true);
  };

  const handleViewWork = () => {
    const target = document.querySelector('#work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacy = () => {
    setCurrentView('privacy');
    window.location.hash = '#privacy-policy';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    setCurrentView('terms');
    window.location.hash = '#terms-and-conditions';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Custom Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Render Legal Pages if Active */}
      {currentView === 'privacy' && (
        <PrivacyPolicy
          onBackToHome={navigateToHome}
          onOpenTerms={navigateToTerms}
          onOpenEstimator={handleOpenEstimator}
        />
      )}

      {currentView === 'terms' && (
        <TermsAndConditions
          onBackToHome={navigateToHome}
          onOpenPrivacy={navigateToPrivacy}
          onOpenEstimator={handleOpenEstimator}
        />
      )}

      {/* Render Main Landing Page */}
      {currentView === 'home' && (
        <>
          {/* Floating Glass Navbar */}
          <Navbar onOpenEstimator={handleOpenEstimator} />

          {/* Main Sections */}
          <main>
            {/* Section 1: Fullscreen Hero */}
            <Hero
              onOpenEstimator={handleOpenEstimator}
              onViewWork={handleViewWork}
            />

            {/* Section 2: Storytelling Who We Are (Dual Identity) */}
            <WhoWeAre />

            {/* Section 3: Services Grid & Detail Modal */}
            <Services onSelectService={handleOpenEstimatorWithService} />

            {/* Section 4: Proprietary Products & Ventures */}
            <Products onOpenEstimator={handleOpenEstimator} />

            {/* Section 5: The Vision Behind I&O Technologies */}
            <Vision onOpenEstimator={handleOpenEstimator} />

            {/* Section 6: Innovation Lab */}
            <InnovationLab />

            {/* Section 7: Featured Work Portfolio */}
            <FeaturedWork onOpenEstimator={handleOpenEstimator} />

            {/* Section 8: Development Process Timeline */}
            <DevelopmentProcess />

            {/* Section 9: Tech Stack Cloud */}
            <TechStack />

            {/* Section 10: Statistics Counter */}
            <Statistics />

            {/* Section 11: Testimonials */}
            <Testimonials />

            {/* Section 12: Why Choose Us Matrix */}
            <WhyChooseUs />

            {/* Section 13: Building Next Generation Digital Businesses Vision */}
            <BuildingNextGen onOpenEstimator={handleOpenEstimator} />

            {/* Section 14: Comprehensive Contact & Proposal Section */}
            <Contact onOpenEstimator={handleOpenEstimator} />
          </main>

          {/* Footer */}
          <Footer
            onOpenEstimator={handleOpenEstimator}
            onOpenPrivacy={navigateToPrivacy}
            onOpenTerms={navigateToTerms}
          />
        </>
      )}

      {/* Interactive Project Estimator & Scope Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        initialServiceTitle={selectedServiceTitle}
      />
    </div>
  );
}
