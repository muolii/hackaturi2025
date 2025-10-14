// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Schedule from './pages/Schedule.jsx';
import Team from './pages/Team.jsx';
import FAQ from './pages/FAQ.jsx';
import Tracks from './pages/Tracks.jsx';
import './styles/shared.css';

const App = () => {
  // Set this to false when ready to reveal the main site
  const SITE_HIDDEN = true;
  
  const [isSiteRevealed, setIsSiteRevealed] = useState(!SITE_HIDDEN);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if site should be revealed
  useEffect(() => {
    // Check localStorage for admin reveal (for testing purposes)
    const adminRevealed = localStorage.getItem('hackaturi-site-revealed');
    if (adminRevealed === 'true') {
      setIsSiteRevealed(true);
    } else {
      setIsSiteRevealed(!SITE_HIDDEN);
    }
    
    setIsLoading(false);
  }, []);

  // Handle scroll detection for waves - hide immediately when scrolling down
  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      // Hide waves immediately when scrolling down from the top
      if (y > lastY && y > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastY = y;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleRevealSite = () => {
    const code = prompt("Enter access code:");
    if (code === "hackaturi-secret") {
      setIsSiteRevealed(true);
      localStorage.setItem('hackaturi-site-revealed', 'true');
    } else {
      alert("Incorrect code.");
    }
  };

  const handleBackToLanding = () => {
    setIsSiteRevealed(false);
    localStorage.removeItem('hackaturi-site-revealed');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show loading spinner while checking reveal status
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ color: 'white', fontSize: '1.5rem' }}>Loading...</div>
      </div>
    );
  }

  // Show landing page if site is not revealed
  if (!isSiteRevealed) {
    return <LandingPage onRevealSite={handleRevealSite} onBackToLanding={handleBackToLanding} />;
  }

  // Show main site content
  return (
    <div className={`app ${isScrolled ? 'scrolled' : ''}`}>
      {/* MLH Trust Badge */}
      <a 
        id="mlh-trust-badge" 
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: '0',
          width: '10%',
          zIndex: '10000'
        }} 
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg" 
          alt="Major League Hacking 2026 Hackathon Season" 
          style={{ width: '100%' }}
        />
      </a>
      
      <Header scrollToSection={scrollToSection} />
      
      <main className="main-content">

        <section id="home" className="section">
          <Home />
        </section>
        
        <section id="about" className="section">
          <About />
        </section>
        
        <section id="tracks" className="section">
          <Tracks />
        </section>
        
        <section id="schedule" className="section">
          <Schedule />
        </section>
        
        <section id="faq" className="section">
          <FAQ />
        </section>

        <section id="sponsors" className="section">
          <Sponsors />
        </section>

        <section id="team" className="section">
          <Team />
        </section>
      </main>
      
      <Footer />
      
      {/* Admin Controls */}
      <div className="admin-controls">
        <button className="admin-button" onClick={handleBackToLanding}>
          Back to Landing Page
        </button>
      </div>
    </div>
  );
};

export default App;
