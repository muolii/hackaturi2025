import React from 'react';
import pirateLogo from '../assets/pirate_ram.svg'; // large circular logo
import starsSvg from '../assets/stars-bg.svg'; // stars for decorations
import CountdownTimer from '../components/Countdown';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
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
            <p className="hero-sub">Embark on a 48-hour coding adventure at the University of Rhode Island!</p>
          </header>

          <div className="hero-countdown">
            <div className="countdown-date">February 21-22, 2026</div>
            <CountdownTimer />
          </div>

          <div className="hero-cta">
            <a 
              href="https://forms.gle/7q3LSHYr7gqQ2CaZ9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn register"
            >
            Register Now!
            </a>
            
            <a 
              href="https://forms.gle/EBsaQn6kX8ws2mb57" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn mentor"
            >
              Become a Judge!
            </a>
          </div>

          {/* Connect with us section */}
          <div className="connect-section">
            <h3>Connect With Us</h3>
            <p>Follow us on social media for updates, announcements, and to connect with the Hack@URI community!</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/hack-uri/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <span className="social-icon"><FaLinkedin /></span>
                <span className="social-name">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/hack.at.uri/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Instagram"
              >
                <span className="social-icon"><FaInstagram /></span>
                <span className="social-name">Instagram</span>
              </a>
            </div>
          </div>
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
