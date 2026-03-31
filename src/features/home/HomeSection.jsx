// src/pages/Home.jsx
// Hero/landing section of the site.
// Shows the event title, sponsor logos, event date, and a countdown timer.

import React from 'react';
import pirateLogo from '../../assets/pirate_ram.svg';
import starsSvg from '../../assets/stars-bg.svg';
import yconicLogo from '/images/sponsors/yconic-transparent.png';
import monsterLogo from '/images/sponsors/monster.png';
import themoveappLogo from '/images/sponsors/themoveapp.png';
import CountdownTimer from './components/Countdown';
import { ARCHIVE_NAV_ITEMS } from '../archive/data/events/index.js';
import '../../shared/styles/shared.css';
import './HomeSection.css';

const EVENT_DATE_DISPLAY = 'February 21-22, 2026';
const EVENT_TITLE = 'Set Sail for Innovation: Hack@URI 2026';
const SHOW_REGISTRATION_BUTTON = false;
const REGISTRATION_LINK = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';
const SHOW_PROJECT_GALLERY = true;
const PROJECT_GALLERY_HREF = ARCHIVE_NAV_ITEMS.find(item => item.id === `#archive-${2026}`).id;

const HERO_SPONSORS = [
  { label: 'Powered by', name: 'Yconic', logo: yconicLogo, url: 'https://yconic.ai/', className: 'yconic-logo' },
  { label: 'Fueled by', name: 'Monster Energy', logo: monsterLogo, url: 'https://www.monsterenergy.com/en-us/', className: 'monster-logo' },
  { label: 'Catered by', name: 'The Move App', logo: themoveappLogo, url: 'https://www.themoveapp.io/', className: 'themoveapp-logo' },
];

const HomeSection = () => {
  return (
    <div className="pirate-hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="pirate-logo-wrap">
            <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
          </div>
        </div>

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

          {/* Replace the existing SHOW_PROJECT_GALLERY block with this: */}
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

      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
      ))}
    </div>
  );
};

export default HomeSection;

