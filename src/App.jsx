// src/App.jsx
// Root component: assembles all page sections and global UI elements.
// The site is a single-page scroll layout — each "page" is a <section> stacked vertically.
//
// SCHEDULE PAGE:
//   The full schedule calendar lives in SchedulePage.jsx. It renders as a
//   full-screen overlay when window.location.hash === '#full-schedule'.
//   The main Schedule section shows only the "Up Next" widget + a button to open it.

import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Interest from './pages/Interest.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Schedule from './pages/Schedule.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import Team from './pages/Team.jsx';
import FAQ from './pages/FAQ.jsx';
import Tracks from './pages/Tracks.jsx';
import Connect from './pages/Connect.jsx';
import RegistrationPopup from './components/RegistrationPopup.jsx';
import FloatingRegistration from './components/FloatingRegistration.jsx';
import './styles/shared.css';

// ─── Site Visibility Config ───────────────────────────────────────────────────
const SITE_HIDDEN = false;
// ─────────────────────────────────────────────────────────────────────────────

const App = () => {
  const [isSiteRevealed, setIsSiteRevealed] = useState(!SITE_HIDDEN);
  const [showSchedulePage, setShowSchedulePage] = useState(false);

  // On mount: check if an admin has previously revealed the site via localStorage
  useEffect(() => {
    const adminRevealed = localStorage.getItem('hackaturi-site-revealed');
    if (adminRevealed === 'true') {
      setIsSiteRevealed(true);
    } else {
      setIsSiteRevealed(!SITE_HIDDEN);
    }
  }, []);

  // Hash-based routing: listen for #full-schedule to open/close the overlay
  useEffect(() => {
    const handleHash = () => {
      setShowSchedulePage(window.location.hash === '#full-schedule');
    };
    handleHash(); // check on first load too
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Close the schedule overlay and restore the hash
  const handleCloseSchedulePage = () => {
    window.location.hash = '';
    setShowSchedulePage(false);
  };

  const handleRevealSite = () => {
    const code = prompt('Enter access code:');
    if (code === 'hackaturi-secret') {
      setIsSiteRevealed(true);
      localStorage.setItem('hackaturi-site-revealed', 'true');
    } else {
      alert('Incorrect code.');
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

  return (
    <div className="app">

      {/* ── Full Schedule Page Overlay ───────────────────────────────────── */}
      {showSchedulePage && (
        <SchedulePage onClose={handleCloseSchedulePage} />
      )}

      {/* ── Global UI Elements ────────────────────────────────────────────── */}
      <RegistrationPopup />
      <FloatingRegistration />

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

      {/* ── Page Sections ─────────────────────────────────────────────────── */}
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        {/* Schedule section: shows Up Next widget + link to full calendar overlay */}
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