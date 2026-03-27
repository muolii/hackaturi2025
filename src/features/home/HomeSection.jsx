// src/pages/Home.jsx
// Hero/landing section of the site.
// Shows the event title, sponsor logos, event date, and a countdown timer.

import React from 'react';
import pirateLogo from '../../assets/pirate_ram.svg';
import starsSvg from '../../assets/stars-bg.svg';
import yconicLogo from '/images/sponsors/yconic-transparent.png';
import monsterLogo from '/images/sponsors/monster.png';
import themoveappLogo from '/images/sponsors/themoveapp.png';
import CountdownTimer from './Countdown';
import '../../shared/styles/shared.css';
import './HomeSection.css';

const EVENT_DATE_DISPLAY = 'February 21-22, 2026';
const EVENT_TITLE = 'Set Sail for Innovation: Hack@URI 2026';
const SHOW_REGISTRATION_BUTTON = false;
const REGISTRATION_LINK = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';
const SHOW_PROJECT_GALLERY = true;
const PROJECT_GALLERY_LINK = 'https://hack-uri-2026.devpost.com/project-gallery';

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

          {SHOW_PROJECT_GALLERY ? (
            <div className="hero-cta hero-cta--gallery">
              <p className="gallery-sub">Check out the amazing projects from this year's event!</p>
              <a href={PROJECT_GALLERY_LINK} target="_blank" rel="noopener noreferrer" className="btn view-projects">
                Hack@URI 2026 Project Gallery →
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
              <p className="hero-sub">
                Embark on a 48-hour innovation adventure at the University of Rhode Island!
              </p>
              <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="btn register">
                Register Now →
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

