// src/features/home/HomeSection.jsx
// Main homepage hero section with event branding, sponsor highlights, and CTA/countdown.

import React from 'react';
import pirateLogo from '../../assets/pirate_ram.svg';
import starsSvg from '../../assets/stars-bg.svg';
import CountdownTimer from './components/Countdown';
import { ARCHIVE_NAV_ITEMS } from '../archive/data/events/index.js';
import '../../shared/styles/shared.css';
import './HomeSection.css';
// Sponsor logo assets used in the hero sponsor strip.
import yconicLogo from '/images/sponsors/yconic-transparent.png';
import monsterLogo from '/images/sponsors/monster.png';
import themoveappLogo from '/images/sponsors/themoveapp.png';

// ─── Home Hero Config ──────────────────────────────────────────────────────────
const EVENT_DATE_DISPLAY = 'February 21-22, 2026';
const EVENT_TITLE = 'Set Sail for Innovation: Hack@URI 2026';

// Toggle between registration button and live countdown card.
const SHOW_REGISTRATION_BUTTON = false;
const REGISTRATION_LINK = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';

// Toggle between archive/projects CTA and live countdown card.
const SHOW_PROJECT_GALLERY = true;
const PROJECT_GALLERY_HREF = ARCHIVE_NAV_ITEMS.find(item => item.id === `#archive-${2026}`).id;

// Hero sponsors shown directly below the event title.
const HERO_SPONSORS = [
  { label: 'Powered by', name: 'Yconic', logo: yconicLogo, url: 'https://yconic.ai/', className: 'yconic-logo' },
  { label: 'Fueled by', name: 'Monster Energy', logo: monsterLogo, url: 'https://www.monsterenergy.com/en-us/', className: 'monster-logo' },
  { label: 'Catered by', name: 'The Move App', logo: themoveappLogo, url: 'https://www.themoveapp.io/', className: 'themoveapp-logo' },
];
// ─────────────────────────────────────────────────────────────────────────────

const HomeSection = () => {
  return (
    <div className="pirate-hero">
      <div className="hero-container">
        {/* ── Left Hero Art ──────────────────────────────────────────────── */}
        <div className="hero-left">
          <div className="pirate-logo-wrap">
            <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
          </div>
        </div>

        {/* ── Right Hero Content ─────────────────────────────────────────── */}
        <div className="hero-right">
          <header className="hero-copy">
            <h1 className="hero-title">{EVENT_TITLE}</h1>
            {HERO_SPONSORS.map((sponsor) => (
              <div key={sponsor.name} className="powered-by">
                <h4>{sponsor.label}</h4>
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.logo} alt={sponsor.name} className={sponsor.className} />
                  </a>
                ) : (
                  <img src={sponsor.logo} alt={sponsor.name} className={sponsor.className} />
                )}
              </div>
            ))}
          </header>

          {/* ── Hero CTA Card (archive OR countdown) ─────────────────────── */}
          {SHOW_PROJECT_GALLERY ? (
            <div className="hero-gallery-card">
              <p className="gallery-sub">
              🎉 Check out the amazing projects from Hack@URI 2026! 🎉
              </p>
              <a href={PROJECT_GALLERY_HREF} className="btn view-projects">
                Hack@URI 2026 Archive & Projects →
              </a>
            </div>
          ) : (
            <div className="hero-countdown">
              <div className="countdown-date">{EVENT_DATE_DISPLAY}</div>
              <CountdownTimer />
            </div>
          )}

          {/* ── Optional Registration CTA ─────────────────────────────────── */}
          {SHOW_REGISTRATION_BUTTON && (
            <div className="hero-cta">
              <a href={REGISTRATION_LINK} target="_blank" 
              rel="noopener noreferrer" 
              className="btn register"
            >
            Register Now!
            </a>
            </div>
          )}
        </div>
      </div>

      {/* ── Decorative Star Field ─────────────────────────────────────────── */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
      ))}
    </div>
  );
};

export default HomeSection;

