import React from 'react';
import pirateLogo from '../assets/pirate_ram.svg'; // large circular logo
import starsSvg from '../assets/stars-bg.svg'; // stars for decorations
import yconicLogo from '/images/sponsors/yconic-transparent.png'; // Yconic sponsor logo
import monsterLogo from '/images/sponsors/monster.png'; // Monster Energy sponsor logo
import themoveappLogo from '/images/sponsors/themoveapp.png'; // The Move App sponsor logo
import CountdownTimer from '../components/Countdown';
import '../styles/shared.css';
import './Home.css';

const Home = () => {
  return (
    <div className="pirate-hero">
      {/* Main content centered */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="pirate-logo-wrap">
            <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
          </div>
        </div>

        <div className="hero-right">
          <header className="hero-copy">
            <h1 className="hero-title">Set Sail for Innovation: <span className="accent">Hack@URI 2026</span></h1>
            <div className="powered-by">
              <h4>Powered by</h4>
              <a href="https://yconic.ai/" target="_blank" rel="noopener noreferrer">
                <img src={yconicLogo} alt="Yconic" className="yconic-logo" />
              </a>
            </div>
            <div className="powered-by">
              <h4>Fueled by</h4>
              <img src={monsterLogo} alt="Monster Energy" className="monster-logo" />
            </div>
            <div className="powered-by">
              <h4>Catered by</h4>
              <a href="https://www.themoveapp.io/" target="_blank" rel="noopener noreferrer">
                <img src={themoveappLogo} alt="The Move App" className="themoveapp-logo" />
              </a>
            </div>
            <p className="hero-sub">Embark on a 48-hour innovation adventure at the University of Rhode Island!</p>
          </header>

          <div className="hero-countdown">
            <div className="countdown-date">February 21-22, 2026</div>
            <CountdownTimer />
          </div>

          {/*<div className="hero-cta">
            <a 
              href="https://forms.gle/7q3LSHYr7gqQ2CaZ9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn register"
            >
            Registration closed! Stay tuned for updates on the next hackathon.
            </a>
          </div>*/}
        </div>
      </div>

      {/* Random scattered stars */}
      <img src={starsSvg} alt="" className="decor-star star-1" />
      <img src={starsSvg} alt="" className="decor-star star-2" />
      <img src={starsSvg} alt="" className="decor-star star-3" />
      <img src={starsSvg} alt="" className="decor-star star-4" />
      <img src={starsSvg} alt="" className="decor-star star-5" />
    </div>
  );
};

export default Home;