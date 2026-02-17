// src/App.jsx
// Root component: assembles all page sections and global UI elements.
// The site is a single-page scroll layout — each "page" is a <section> stacked vertically.

import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Interest from './pages/Interest.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Schedule from './pages/Schedule.jsx';
import Team from './pages/Team.jsx';
import FAQ from './pages/FAQ.jsx';
import Tracks from './pages/Tracks.jsx';
import Connect from './pages/Connect.jsx';
import RegistrationPopup from './components/RegistrationPopup.jsx';
import FloatingRegistration from './components/FloatingRegistration.jsx';
import './styles/shared.css';

// ─── Site Visibility Config ───────────────────────────────────────────────────
// Set SITE_HIDDEN to `true` to show a landing/teaser page before the full site
// is revealed. Set it to `false` (default) to show the full site immediately.
// Access code for revealing the site early: "hackaturi-secret"
const SITE_HIDDEN = false;
// ─────────────────────────────────────────────────────────────────────────────

const App = () => {
  const [isSiteRevealed, setIsSiteRevealed] = useState(!SITE_HIDDEN);

  // On mount: check if an admin has previously revealed the site via localStorage
  useEffect(() => {
    const adminRevealed = localStorage.getItem('hackaturi-site-revealed');
    if (adminRevealed === 'true') {
      setIsSiteRevealed(true);
    } else {
      setIsSiteRevealed(!SITE_HIDDEN);
    }
  }, []);

  // Prompts for an access code and reveals the full site if correct
  const handleRevealSite = () => {
    const code = prompt('Enter access code:');
    if (code === 'hackaturi-secret') {
      setIsSiteRevealed(true);
      localStorage.setItem('hackaturi-site-revealed', 'true');
    } else {
      alert('Incorrect code.');
    }
  };

  // Resets site visibility back to the landing page (for testing)
  const handleBackToLanding = () => {
    setIsSiteRevealed(false);
    localStorage.removeItem('hackaturi-site-revealed');
  };

  // Smoothly scrolls the page to a section by its HTML element ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">

      {/* ── Global UI Elements ────────────────────────────────────────────── */}
      <RegistrationPopup />
      <FloatingRegistration />

      {/* MLH Trust Badge — required by Major League Hacking for affiliated events.
          Update the href and utm_source if the event name/season changes. */}
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
          zIndex: '10000',
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

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <Header scrollToSection={scrollToSection} />

      {/* ── Page Sections ─────────────────────────────────────────────────── 
          Each section's `id` must match the nav link targets used in Header.
          To reorder sections on the page, simply move the <section> blocks.
          To add a new section: import the page component above, then add a
          new <section id="your-id"> block here and a link in the Header. */}
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="schedule" className="section">
          <Schedule />
        </section>

        <section id="tracks" className="section">
          <Tracks />
        </section>

        <section id="faq" className="section">
          <FAQ />
        </section>

        <section id="interest" className="section">
          <Interest />
        </section>

        <section id="sponsors" className="section">
          <Sponsors />
        </section>

        <section id="team" className="section">
          <Team />
        </section>

        <section id="connect" className="section">
          <Connect />
        </section>
      </main>

      <Footer />

    </div>
  );
};

export default App;