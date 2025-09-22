import React, { useState } from 'react';
import image from '../assets/logo.png';
import './LandingPage.css';

const LandingPage = ({ onRevealSite, onBackToLanding }) => {
  const handleRevealSite = () => {
    onRevealSite();
  };

  return (
    <div className="app">
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
          zIndex: '10000'
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

      <div className="landing-page">
        <div className="landing-content">
          {/* Browser window with logo */}
          <div className="leftContent">
            <div className="browser-window">
              <div className="browser-header">
                <div className="browser-controls">
                  <div className="control close"></div>
                  <div className="control minimize"></div>
                  <div className="control maximize"></div>
                </div>
              </div>
              <div className="browser-content">
                <img src={image} width="300" alt="Hack@URI Logo" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="rightContent">
            <div className="landing-info">
              <h1 className="landing-title">Hack@URI 2026</h1>
              <p className="landing-subtitle">Something Amazing is Coming...</p>
              
              <div className="landing-description">
                <p>Get ready for the first ever hackathon at the University of Rhode Island!</p>
                <p>March 15-16, 2026</p>
              </div>

              <div className="preregistration-section">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScj-kyelH84fdkDHsrqZpI4b55SmPW0SJj7JdAI8fT-JhyTbg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preregistration-button"
                >
                  Preregister Now
                </a>
              </div>

              <div className="landing-footer">
                <p>Follow us for updates:</p>
                <div className="social-links">
                  <a href="https://www.instagram.com/hack.at.uri/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Controls - Less Obvious */}
        <div className="admin-controls">
          <button className="admin-button subtle" onClick={handleRevealSite}>
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
