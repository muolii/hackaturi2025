// src/components/LandingPage.jsx
// "Coming Soon" teaser page shown before the main site is revealed.
// Displayed when SITE_HIDDEN is set to `true` in App.jsx.
//
// TO UPDATE:
//   - LANDING_CONFIG: Edit event name, dates, pre-registration link, and social URLs.
//   - The "Preview" admin button at the bottom calls `onRevealSite` with the access code.

import React from 'react';
import pirateLogo from '../../../assets/pirate_ram.svg';
import starsSvg from '../../../assets/stars-bg.svg';
import { ARCHIVE_NAV_ITEMS } from '../../archive/data/events/index.js';
import './LandingPage.css';

// ─── Landing Page Content ─────────────────────────────────────────────────────
// Update these values each year before switching SITE_HIDDEN back to true.
const LANDING_CONFIG = {
  eventName:    'Hack@URI 2027',
  tagline:      'Coming Soon!',
  description:  'After a successful Hack@URI 2026, we will be back for another year of hacking!',
  eventDates:   'Check out more from Hack@URI 2026 below!',
  archiveUrl:   ARCHIVE_NAV_ITEMS.find(item => item.id === '#archive-2026')?.id || '#archive-2026',
  organizerFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfvNrL-fWzOD5FGZ7sW3_Njzdup-KZG4uXOGhuRlPzFjrT4Wg/viewform?usp=publish-editor',
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/hack.at.uri/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/hack-uri/posts/?feedView=all' },
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

          {/* ── Left: Pirate Hero Image ───────────────────────────────── */}
          <div className="landing-left">
            <div className="pirate-logo-wrap">
              <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
            </div>
          </div>

          {/* ── Right: Event Info ────────────────────────────────────── */}
          <div className="landing-right">
            <div className="landing-info panel-card">
              <h1 className="landing-title">{LANDING_CONFIG.eventName}</h1>
              <p className="landing-subtitle">{LANDING_CONFIG.tagline}</p>

              <div className="landing-description">
                <p>{LANDING_CONFIG.description}</p>
                <p className="landing-dates">{LANDING_CONFIG.eventDates}</p>
              </div>

              <div className="preregistration-section">
                <a
                  href={LANDING_CONFIG.archiveUrl}
                  className="btn-primary preregistration-button"
                >
                  Hack@URI 2026 Photos, Winners, and Projects →
                </a>
              </div>

              <div className="organizer-cta-section">
                <p className="organizer-cta-copy">
                  Interested in joining the organizing team? Check out the link below!
                </p>
                <a
                  href={LANDING_CONFIG.organizerFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary organizer-cta-button"
                >
                  Hack@URI 2027 Organizer Form →
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

        {[1, 2, 3, 4, 5].map((n) => (
          <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
        ))}

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