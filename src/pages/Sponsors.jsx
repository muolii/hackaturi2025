// src/pages/Sponsors.jsx
// Displays sponsor logos organized by tier, plus a donors section.
// On desktop: logos appear inside a decorative scroll SVG.
// On mobile: falls back to a simple stacked layout.
//
// TO UPDATE SPONSORS:
//   1. Add/remove sponsor logo images to /public/images/sponsors/
//   2. Update the SPONSOR_TIERS object below with the new entry.
//   3. Each sponsor can have: name, logo path, url, and optional `large: true`
//      to use the larger CSS size variant.
// TO UPDATE DONORS: Edit the DONORS array below.

import React, { useState, useEffect } from 'react';
import starsSvg from '../assets/stars-bg.svg';
import sponsorScrollSvg from '../assets/sponsor-scroll.svg';
import '../styles/shared.css';
import './Sponsors.css';

// ─── Sponsor Tiers ────────────────────────────────────────────────────────────
const SPONSOR_TIERS = {
  lead: [
    { name: 'yconic', logo: '/images/sponsors/yconic-transparent.png', url: 'https://yconic.ai/', large: true },
  ],
  gold: [
    { name: 'RiseUp', logo: '/images/sponsors/riseup.png', url: 'https://rise-upinnovation.org/' },
    { name: 'RI Hub', logo: '/images/sponsors/RIHub.png', url: 'https://rihub.org/', large: true },
    { name: 'URI Library Innovation Lab', logo: '/images/sponsors/library_innovation_lab.png', url: 'https://web.uri.edu/innovate/', large: true },
    { name: 'URI Department of Computer Science and Statistics', logo: '/images/sponsors/uri_CSaS.png', url: 'https://web.uri.edu/cs/', large: true },
    { name: 'URI College of Business', logo: '/images/sponsors/uri_CoB.png', url: 'https://web.uri.edu/business/', large: true },
  ],
  silver: [
    { name: 'Brightstar', logo: '/images/sponsors/brightstar.png', url: 'https://www.brightstarlottery.com/', large: true },
    { name: 'URI Research Foundation', logo: '/images/sponsors/urirf-transparent.png', url: 'https://web.uri.edu/research/', large: true },
  ],
  bronze: [
    { name: 'MergeFund', logo: '/images/sponsors/mergefund-transparent.png', url: 'https://www.mergefund.org/' },
    { name: 'Factset', logo: '/images/sponsors/factset.png', url: 'https://www.factset.com/', large: true },
    { name: 'Microway', logo: '/images/sponsors/microway.png', url: 'https://www.microway.com/', large: true },
    { name: 'URI College of Engineering', logo: '/images/sponsors/uri_CoE.png', url: 'https://web.uri.edu/engineering/', large: true },
    { name: 'URI Digital Forensics and Cyber Security Center', logo: '/images/sponsors/uri_CSF.png', url: 'https://web.uri.edu/cs/dfcsc/', large: true },
    { name: 'URI Cyber Club', logo: '/images/sponsors/cyberclub.png', url: 'https://www.instagram.com/uricyberclub/', large: true },
    { name: 'Major League Hacking', logo: '/images/sponsors/mlh-logo-color.png', url: 'https://mlh.io/' },
  ],
  partners: [
    { name: 'Monster', logo: '/images/sponsors/monster.png', url: 'https://www.monsterenergy.com/en-us/', large: true },
    { name: 'The Move App', logo: '/images/sponsors/themoveapp.png', url: 'https://www.themoveapp.io/', large: true },
    { name: 'URI AI Lab', logo: '/images/sponsors/uri_ailab.png', url: 'https://web.uri.edu/iacr/iacr-workshops-outreach/', large: true },
    { name: 'CCRI', logo: '/images/sponsors/ccri.png', url: 'https://www.ccri.edu/' },
    { name: 'Pure Buttons', logo: '/images/sponsors/Pure-Buttons-Logo.png', url: 'https://mlh.link/MLH-PureButtons-hackathons', large: true },
    { name: 'URI Institute for AI and Computational Research', logo: '/images/sponsors/uri_IACR.png', url: 'https://events.uri.edu/group/center_for_computational_research', large: true },
  ],
};

// ─── Donors ───────────────────────────────────────────────────────────────────
// Individual donors listed by name. Add or remove names here.
const DONORS = [
  'Stacey Azevedo',
  'Erin Butera',
  'Joseph Graf',
  'Tara Rugg',
  'Anne Totoro',
  'Joel Totoro',
];
// ─────────────────────────────────────────────────────────────────────────────

// Tier display configuration: controls the heading text for each tier.
// The key must match a key in SPONSOR_TIERS.
const TIER_LABELS = {
  lead:     'Lead Sponsor',
  gold:     'Gold Sponsors',
  silver:   'Silver Sponsors',
  bronze:   'Bronze Sponsors',
  partners: 'Partners',
};

// Renders a single sponsor logo, wrapped in an <a> tag if a URL is provided.
// `sizeClass` is a CSS class that controls the image size (e.g. 'img-lead', 'img-standard').
const SponsorLogo = ({ sponsor, sizeClass }) => {
  // Append '-large' to the size class if the sponsor requests a larger display
  const imgClass = `sponsor-img ${sponsor.large ? `${sizeClass}-large` : sizeClass}`;

  const image = (
    <>
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className={imgClass}
        onError={(e) => {
          // If the image fails to load, show the sponsor name as plain text fallback
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="sponsor-fallback" style={{ display: 'none' }}>{sponsor.name}</div>
    </>
  );

  return (
    <div className="sponsor-logo-wrapper">
      {sponsor.url ? (
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
};

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen width to switch between desktop scroll and mobile stack layout
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="pirate-sponsors">

      {/* Decorative stars */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`sponsor-star star-${n}`} />
      ))}

      <div className="sponsors-content">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p>We're grateful to our amazing sponsors who make Hack@URI 2026 possible!</p>

        {/* ── Desktop: Scroll Layout ───────────────────────────────────── */}
        {!isMobile ? (
          <div className="scroll-container">
            <img src={sponsorScrollSvg} alt="Sponsor Scroll" className="sponsor-scroll-bg" />

            <div className="sponsors-inside-scroll">

              {/* Lead sponsor gets special full-width treatment */}
              {SPONSOR_TIERS.lead.length > 0 && (
                <div className="tier-section">
                  <h2 className="tier-title lead-title">{TIER_LABELS.lead}</h2>
                  <div className="lead-sponsor-container">
                    {SPONSOR_TIERS.lead.map((s) => (
                      <SponsorLogo key={s.name} sponsor={s} sizeClass="img-lead" />
                    ))}
                  </div>
                </div>
              )}

              {/* All remaining tiers use the standard 3-column grid */}
              {(['gold', 'silver', 'bronze', 'partners']).map((tier) =>
                SPONSOR_TIERS[tier]?.length > 0 ? (
                  <div key={tier} className="tier-section">
                    <h3 className="tier-title">{TIER_LABELS[tier]}</h3>
                    <div className="grid-3-col">
                      {SPONSOR_TIERS[tier].map((s) => (
                        <SponsorLogo
                          key={s.name}
                          sponsor={s}
                          sizeClass={tier === 'partners' ? 'img-partner' : 'img-standard'}
                        />
                      ))}
                    </div>
                  </div>
                ) : null
              )}

              {/* Donors section */}
              <div className="donors-section-inside">
                <h3 className="donors-title-inside">Our Generous Donors</h3>
                <div className="donors-list-inside">
                  {DONORS.map((donor) => (
                    <span key={donor} className="donor-name-inside">{donor}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        ) : (
          // ── Mobile: Simple Stacked Layout ──────────────────────────────
          <div className="mobile-sponsors-container">

            {SPONSOR_TIERS.lead.map((s) => (
              <div key={s.name} className="mobile-tier-block">
                <h2>{TIER_LABELS.lead}</h2>
                <SponsorLogo sponsor={s} sizeClass="mobile-img-lead" />
              </div>
            ))}

            {(['gold', 'silver', 'bronze', 'partners']).map((tier) =>
              SPONSOR_TIERS[tier]?.length > 0 ? (
                <div key={tier} className="mobile-tier-block">
                  <h3>{TIER_LABELS[tier]}</h3>
                  {SPONSOR_TIERS[tier].map((s) => (
                    <SponsorLogo
                      key={s.name}
                      sponsor={s}
                      sizeClass={tier === 'partners' ? 'mobile-img-partner' : 'mobile-img-std'}
                    />
                  ))}
                </div>
              ) : null
            )}

            <div className="mobile-donors">
              <h3>Donors</h3>
              {DONORS.map((d) => <div key={d}>{d}</div>)}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Sponsors;