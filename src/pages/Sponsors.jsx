// src/pages/Sponsors.jsx
import React from 'react';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'RiseUp',
      logo: '/images/sponsors/riseup.png',
      website: 'https://riseup.com'
    },
    {
      name: 'URI Research Foundation',
      logo: '/images/sponsors/urirf.png',
      website: 'https://urirf.org'
    }
  ];

  return (
    <div className="content">
      <h1>Our Sponsors</h1>
      <p>We're grateful to our amazing sponsors who make Hack@URI 2025 possible!</p>
      
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <div className="sponsor-logo-container">
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
          </a>
        ))}
      </div>
      
      <div className="become-sponsor">
        <h3>Interested in Becoming a Sponsor?</h3>
        <p>Join us in supporting the next generation of innovators! Contact us at sponsors@hackaturi.com</p>
      </div>
    </div>
  );
};

export default Sponsors;