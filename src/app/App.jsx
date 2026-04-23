// src/app/App.jsx
// Root shell for the site: renders the main single-page section layout, 
// plus conditional full-page overlays (schedule/archive) and landing lock mode.

import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer } from '../features/layout';
import { Home, LandingPage } from '../features/home';
import About from '../features/about';
import Interest from '../features/interest';
import Sponsors from '../features/sponsors';
import Team from '../features/team';
import FAQ from '../features/faq';
import Tracks from '../features/tracks';
import Connect from '../features/connect';
import { RegistrationPopup, FloatingRegistration } from '../features/registration';
import Schedule, { SchedulePage } from '../features/schedule';
import ArchivePage from '../features/archive/ArchivePage.jsx';
import { DEFAULT_ARCHIVE_EVENT_ID } from '../features/archive/data/events/index.js';
import '../shared/styles/shared.css';

// ─── Site Visibility Config ───────────────────────────────────────────────────
const SITE_HIDDEN = true;
// ─────────────────────────────────────────────────────────────────────────────

const App = () => {
  // Gate controls for landing lock, full schedule modal, and selected archive event.
  const [isSiteRevealed, setIsSiteRevealed] = useState(!SITE_HIDDEN);
  const [showSchedulePage, setShowSchedulePage] = useState(false);
  const [archiveEvent, setArchiveEvent] = useState(null);

  // Stores deferred section navigation while archive overlay is closing.
  const scrollAfterArchiveCloseRef = useRef(null);

  // Shared smooth-scroll helper used by the main header navigation.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /** When the archive overlay is open, close it first; scroll runs after unmount (see effect below). */
  const scrollToSectionFromArchive = (sectionId) => {
    scrollAfterArchiveCloseRef.current = sectionId;
    window.location.hash = '';
    setArchiveEvent(null);
  };

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
      const hash = window.location.hash;

      setShowSchedulePage(hash === '#full-schedule');

      if (hash.startsWith('#archive-')) {
        const eventId = hash.replace('#archive-', '');
        setArchiveEvent(eventId || DEFAULT_ARCHIVE_EVENT_ID);
      } else {
        setArchiveEvent(null);
      }
    };
    handleHash(); // check on first load too
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // After archive overlay unmounts, scroll to the section requested from the archive header
  useEffect(() => {
    if (archiveEvent) return;
    const sectionId = scrollAfterArchiveCloseRef.current;
    if (!sectionId) return;
    scrollAfterArchiveCloseRef.current = null;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [archiveEvent]);

  // Close the schedule overlay and restore the hash
  const handleCloseSchedulePage = () => {
    window.location.hash = '';
    setShowSchedulePage(false);
  };

  const handleCloseArchivePage = () => {
    window.location.hash = '';
    setArchiveEvent(null);
  };

  // Simple access-code gate used while the site is hidden pre-launch.
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

  // Hidden mode: render only landing screen (and archive page if hash points to it).
  if (SITE_HIDDEN && !isSiteRevealed) {
    return (
      <div className="app landing-mode">
        {archiveEvent && (
          <ArchivePage
            eventId={archiveEvent}
            onClose={handleCloseArchivePage}
            mode="landing"
            onReturnToLanding={handleBackToLanding}
          />
        )}
        <LandingPage onRevealSite={handleRevealSite} />
      </div>
    );
  }

  return (
    <div className="app main-mode">

      {/* ── Full Schedule Page Overlay ───────────────────────────────────── */}
      {showSchedulePage && (
        <SchedulePage onClose={handleCloseSchedulePage} />
      )}

      {/* ── Archive Page Overlay ─────────────────────────────────────────── */}
      {archiveEvent && (
        <ArchivePage
          eventId={archiveEvent}
          onClose={handleCloseArchivePage}
          scrollToSection={scrollToSectionFromArchive}
          mode="main"
          onReturnToLanding={handleBackToLanding}
        />
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

      {/* ── Navigation (single instance: archive overlay renders its own copy) ─ */}
      {!archiveEvent && <Header scrollToSection={scrollToSection} />}

      {/* ── Page Sections ─────────────────────────────────────────────────── */}
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