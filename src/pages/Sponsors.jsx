// src/pages/Sponsors.jsx
import React, { useState, useEffect } from 'react';
import starsSvg from '../assets/stars-bg.svg';
import sponsorScrollSvg from '../assets/sponsor-scroll.svg';
import './Sponsors.css';

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Organized data structure with separate tiers
  const tieredSponsors = {
    lead: [
      { name: 'yconic', logo: '/images/sponsors/yconic-transparent.png', large: true, url: 'https://yconic.ai/' },
    ],
    gold: [
      { name: 'RiseUp', logo: '/images/sponsors/riseup.png' },
      { name: 'RI Hub', logo: '/images/sponsors/RIHub.png', large: true },
      { name: 'URI Library Innovation Lab', logo: '/images/sponsors/library_innovation_lab.png', large: true },
      { name: 'URI Department of Computer Science and Statistics', logo: '/images/sponsors/uri_CSaS.png', large: true },
      { name: 'URI College of Business', logo: '/images/sponsors/uri_CoB.png', large: true },
    ],
    silver: [
      { name: 'Brightstar', logo: '/images/sponsors/brightstar.png', large: true },
      { name: 'URI Research Foundation', logo: '/images/sponsors/urirf-transparent.png', large: true },
    ],
    bronze: [
      { name: 'MergeFund', logo: '/images/sponsors/mergefund-transparent.png' },
      { name: 'Factset', logo: '/images/sponsors/factset.png', large: true },
      { name: 'Microway', logo: '/images/sponsors/microway.png', large: true, url: 'https://www.microway.com/' },
      { name: 'URI College of Engineering', logo: '/images/sponsors/uri_CoE.png', large: true },
      { name: 'URI Digital Forensics and Cyber Security Center', logo: '/images/sponsors/uri_CSF.png', large: true },
      { name: 'URI Cyber Club', logo: '/images/sponsors/cyberclub.png', large: true },
      { name: 'Major League Hacking', logo: '/images/sponsors/mlh-logo-color.svg' },
    ],
    partners: [
      { name: 'Monster', logo: '/images/sponsors/monster.png', large: true },
      { name: 'The Move App', logo: '/images/sponsors/themoveapp.png', url: 'https://www.themoveapp.io/', large: true },
      { name: 'URI AI Lab', logo: '/images/sponsors/uri_ailab.png', large: true },
      { name: 'CCRI', logo: '/images/sponsors/ccri.png' },
      { name: 'Pure Buttons', logo: '/images/sponsors/Pure-Buttons-Logo.png', url: 'https://mlh.link/MLH-PureButtons-hackathons', large: true },
      { name: 'URI Institute for AI and Computational Research', logo: '/images/sponsors/uri_IACR.png', large: true },
    ]
  };

  const donors = [
    'Stacey Azevedo', 'Erin Butera', 'Joseph Graf', 'Tara Rugg', 'Anne Totoro', 'Joel Totoro'
  ];

  // Helper to render a logo
  const renderLogo = (sponsor, sizeClass) => {
    // Add '-large' suffix if sponsor has large property
    const finalClass = sponsor.large ? `${sizeClass}-large` : sizeClass;

    return (
      <div key={sponsor.name} className="sponsor-logo-wrapper">
        {sponsor.url ? (
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name}`}
              className={`sponsor-img ${finalClass}`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="sponsor-fallback" style={{ display: 'none' }}>{sponsor.name}</div>
          </a>
        ) : (
          <>
            <img
              src={sponsor.logo}
              alt={`${sponsor.name}`}
              className={`sponsor-img ${finalClass}`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="sponsor-fallback" style={{ display: 'none' }}>{sponsor.name}</div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="pirate-sponsors">
      {/* Animated stars */}
      {[1, 2, 3, 4, 5].map(n => (
        <img key={n} src={starsSvg} alt="" className={`sponsor-star star-${n}`} />
      ))}

      <div className="sponsors-content">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p>We're grateful to our amazing sponsors who make Hack@URI 2026 possible!</p>

        {!isMobile ? (
          <div className="scroll-container">
            <img src={sponsorScrollSvg} alt="Sponsor Scroll" className="sponsor-scroll-bg" />

            <div className="sponsors-inside-scroll">

              {/* LEAD SPONSOR (Single Large Item) */}
              {tieredSponsors.lead.length > 0 && (
                <div className="tier-section">
                  <h2 className="tier-title lead-title">Lead Sponsor</h2>
                  <div className="lead-sponsor-container">
                    {tieredSponsors.lead.map(s => renderLogo(s, 'img-lead'))}
                  </div>
                </div>
              )}

              {/* GOLD SPONSORS */}
              {tieredSponsors.gold.length > 0 && (
                <div className="tier-section">
                  <h3 className="tier-title">Gold Sponsors</h3>
                  <div className="grid-3-col">
                    {tieredSponsors.gold.map(s => renderLogo(s, 'img-standard'))}
                  </div>
                </div>
              )}

              {/* SILVER SPONSORS */}
              {tieredSponsors.silver.length > 0 && (
                <div className="tier-section">
                  <h3 className="tier-title">Silver Sponsors</h3>
                  <div className="grid-3-col">
                    {tieredSponsors.silver.map(s => renderLogo(s, 'img-standard'))}
                  </div>
                </div>
              )}

              {/* BRONZE SPONSORS */}
              {tieredSponsors.bronze.length > 0 && (
                <div className="tier-section">
                  <h3 className="tier-title">Bronze Sponsors</h3>
                  <div className="grid-3-col">
                    {tieredSponsors.bronze.map(s => renderLogo(s, 'img-standard'))}
                  </div>
                </div>
              )}

              {/* PARTNERS */}
              {tieredSponsors.partners.length > 0 && (
                <div className="tier-section">
                  <h3 className="tier-title">Partners</h3>
                  <div className="grid-3-col">
                    {tieredSponsors.partners.map(s => renderLogo(s, 'img-partner'))}
                  </div>
                </div>
              )}

              {/* DONORS */}
              <div className="donors-section-inside">
                <h3 className="donors-title-inside">Our Generous Donors</h3>
                <div className="donors-list-inside">
                  {donors.map((donor, index) => (
                    <span key={index} className="donor-name-inside">{donor}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="mobile-sponsors-container">
            {/* Mobile Render is a simple stack */}
            {tieredSponsors.lead.map(s => (
              <div key={s.name} className="mobile-tier-block">
                <h2>Lead Sponsor</h2>
                {renderLogo(s, 'mobile-img-lead')}
              </div>
            ))}

            {tieredSponsors.gold.length > 0 && (
              <div className="mobile-tier-block">
                <h3>Gold Sponsors</h3>
                {tieredSponsors.gold.map(s => renderLogo(s, 'mobile-img-std'))}
              </div>
            )}

            {tieredSponsors.silver.length > 0 && (
              <div className="mobile-tier-block">
                <h3>Silver Sponsors</h3>
                {tieredSponsors.silver.map(s => renderLogo(s, 'mobile-img-std'))}
              </div>
            )}

            {tieredSponsors.bronze.length > 0 && (
              <div className="mobile-tier-block">
                <h3>Bronze Sponsors</h3>
                {tieredSponsors.bronze.map(s => renderLogo(s, 'mobile-img-std'))}
              </div>
            )}

            <div className="mobile-tier-block">
              <h3>Partners</h3>
              {tieredSponsors.partners.map(s => renderLogo(s, 'mobile-img-partner'))}
            </div>

            <div className="mobile-donors">
              <h3>Donors</h3>
              {donors.map(d => <div key={d}>{d}</div>)}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Sponsors;