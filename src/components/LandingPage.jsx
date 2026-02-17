// src/components/LandingPage.jsx
// "Coming Soon" teaser page shown before the main site is revealed.
// Displayed when SITE_HIDDEN is set to `true` in App.jsx.
//
// TO UPDATE:
//   - LANDING_CONFIG: Edit event name, dates, pre-registration link, and social URLs.
//   - The "Preview" admin button at the bottom calls `onRevealSite` with the access code.

import React from 'react';
import logo from '../assets/logo.png';
import './LandingPage.css';

// ─── Landing Page Content ─────────────────────────────────────────────────────
// Update these values each year before switching SITE_HIDDEN back to true.
const LANDING_CONFIG = {
  eventName:    'Hack@URI 2026',
  tagline:      'Something Amazing is Coming...',
  description:  'Get ready for the first ever hackathon at the University of Rhode Island!',
  eventDates:   'February 21-22, 2026',
  preregUrl:    'https://docs.google.com/forms/d/e/1FAIpQLScj-kyelH84fdkDHsrqZpI4b55SmPW0SJj7JdAI8fT-JhyTbg/viewform',
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/hack.at.uri/' },
    // { label: 'Discord',   url: 'https://discord.gg/your-invite-link' }, // Uncomment when live
  ],
};

// MLH Trust Badge — update the season year and utm_campaign each year
const MLH_BADGE = {
  href:     'https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white',
  imageUrl: 'https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg',
  alt:      'Major League Hacking 2026 Hackathon Season',
};
// ─────────────────────────────────────────────────────────────────────────────

// Props:
//   onRevealSite   — called when the admin clicks "Preview"; triggers the access code prompt
const LandingPage = ({ onRevealSite }) => {
  return (
    <div className="landing-app">

      {/* MLH Trust Badge (fixed top-right) */}
      <a
        id="mlh-trust-badge"
        href={MLH_BADGE.href}
        target="_blank"
        rel="noopener noreferrer"
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
      >
        <img src={MLH_BADGE.imageUrl} alt={MLH_BADGE.alt} style={{ width: '100%' }} />
      </a>

      <div className="landing-page">
        <div className="landing-content">

          {/* ── Left: Decorative Browser Window with Logo ────────────── */}
          <div className="leftContent">
            <div className="browser-window">
              <div className="browser-header">
                <div className="browser-controls">
                  {/* Decorative macOS-style window buttons */}
                  <div className="control close" />
                  <div className="control minimize" />
                  <div className="control maximize" />
                </div>
              </div>
              <div className="browser-content">
                <img src={logo} width="300" alt="Hack@URI Logo" />
              </div>
            </div>
          </div>

          {/* ── Right: Event Info ────────────────────────────────────── */}
          <div className="rightContent">
            <div className="landing-info">
              <h1 className="landing-title">{LANDING_CONFIG.eventName}</h1>
              <p className="landing-subtitle">{LANDING_CONFIG.tagline}</p>

              <div className="landing-description">
                <p>{LANDING_CONFIG.description}</p>
                <p>{LANDING_CONFIG.eventDates}</p>
              </div>

              {/* Pre-registration button */}
              <div className="preregistration-section">
                <a
                  href={LANDING_CONFIG.preregUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preregistration-button"
                >
                  Preregister Now
                </a>
              </div>

              {/* Social media links */}
              <div className="landing-footer">
                <p>Follow us for updates:</p>
                <div className="social-links">
                  {LANDING_CONFIG.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Admin Controls ───────────────────────────────────────────── 
            Intentionally subtle — lets organizers preview the full site
            without revealing the button to casual visitors.
            Clicking this triggers the access code prompt in App.jsx. */}
        <div className="admin-controls">
          <button className="admin-button subtle" onClick={onRevealSite}>
            Preview
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;