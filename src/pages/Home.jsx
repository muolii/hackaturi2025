// src/pages/Home.jsx
// Hero/landing section of the site.
// Shows the event title, sponsor logos, event date, and a countdown timer.

import React from 'react';
import pirateLogo from '../assets/pirate_ram.svg';
import starsSvg from '../assets/stars-bg.svg';
import yconicLogo from '/images/sponsors/yconic-transparent.png';
import monsterLogo from '/images/sponsors/monster.png';
import themoveappLogo from '/images/sponsors/themoveapp.png';
import CountdownTimer from '../components/Countdown';
import '../styles/shared.css';
import './Home.css';

// ─── Event Info ───────────────────────────────────────────────────────────────
// Update these values each year when planning the next hackathon.
const EVENT_DATE_DISPLAY = 'February 21-22, 2026';
const EVENT_TITLE = 'Set Sail for Innovation: Hack@URI 2026';

// Update this boolean to show/hide the registration button as it opens/closes.
const SHOW_REGISTRATION_BUTTON = false; 
const REGISTRATION_LINK = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';

// ─────────────────────────────────────────────────────────────────────────────

// ─── Featured Sponsors ───────────────────────────────────────────────────────
// These are the sponsors shown in the hero area (most prominent placement).
// Each entry has a label, logo image, optional URL, and a CSS class for sizing.
// To update: swap out the logo import above and update the url/label here.
const HERO_SPONSORS = [
  {
    label: 'Powered by',
    name: 'Yconic',
    logo: yconicLogo,
    url: 'https://yconic.ai/',
    className: 'yconic-logo',
  },
  {
    label: 'Fueled by',
    name: 'Monster Energy',
    logo: monsterLogo,
    url: 'https://www.monsterenergy.com/en-us/',
    className: 'monster-logo',
  },
  {
    label: 'Catered by',
    name: 'The Move App',
    logo: themoveappLogo,
    url: 'https://www.themoveapp.io/',
    className: 'themoveapp-logo',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <div className="pirate-hero">

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <div className="hero-container">

        {/* Logo */}
        <div className="hero-left">
          <div className="pirate-logo-wrap">
            <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
          </div>
        </div>

        {/* Event info, sponsors, and countdown */}
        <div className="hero-right">
          <header className="hero-copy">
            <h1 className="hero-title">{EVENT_TITLE}</h1>

            {/* Renders each featured sponsor row from the config above */}
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

            <p className="hero-sub">
              Embark on a 48-hour innovation adventure at the University of Rhode Island!
            </p>
          </header>

          {/* Countdown timer — the target date is configured inside the Countdown component */}
          <div className="hero-countdown">
            <div className="countdown-date">{EVENT_DATE_DISPLAY}</div>
            <CountdownTimer />
          </div>

          {/* ── Registration CTA ─ Update the href to the new registration form link each year. */}
          {SHOW_REGISTRATION_BUTTON && (
            <div className="hero-cta">
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn register"
              >
                Register Now →
              </a>
            </div>
          )}
        </div>

      </div>

      {/* ── Decorative Stars ────────────────────────────────────────────── */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
      ))}

    </div>
  );
};

export default Home;