// src/pages/Sponsors.jsx
import React from 'react';
import starsSvg from '../assets/stars-bg.svg';
import sponsorScrollSvg from '../assets/sponsor-scroll.svg';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'RiseUp',
      logo: '/images/sponsors/riseup.png',
    },
    {
      name: 'URI Research Foundation',
      logo: '/images/sponsors/urirf-transparent.png',
    }
  ];

  const donors = [
    'Joel Totoro',
    'Anne Totoro',
    'Stacey Azevedo',
  ];

  return (
    <div className="pirate-sponsors">
      {/* Animated stars */}
      <img src={starsSvg} alt="" className="sponsor-star star-1" />
      <img src={starsSvg} alt="" className="sponsor-star star-2" />
      <img src={starsSvg} alt="" className="sponsor-star star-3" />
      <img src={starsSvg} alt="" className="sponsor-star star-4" />
      <img src={starsSvg} alt="" className="sponsor-star star-5" />

      <div className="sponsors-content">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p>We're grateful to our amazing sponsors who make Hack@URI 2026 possible!</p>
        
        <div className="scroll-container">
          <img src={sponsorScrollSvg} alt="Sponsor Scroll" className="sponsor-scroll" />
          
          <div className="sponsors-inside-scroll">
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="sponsor-logo-container">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="sponsor-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="sponsor-fallback" style={{ display: 'none' }}>
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="donors-section-inside">
              <h3 className="donors-title-inside">Our Generous Donors</h3>
              <div className="donors-list-inside">
                {donors.map((donor, index) => (
                  <div key={index} className="donor-name-inside">
                    {donor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="become-sponsor">
          <h3>Interested in Becoming a Sponsor?</h3>
          <p>Join us in supporting the next generation of innovators! Contact us at sponsors@hackaturi.com or <a href="https://donate.hackaturi.com" target="_blank" rel="noopener noreferrer" className="donate-link">donate here</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;