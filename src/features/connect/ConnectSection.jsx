// src/features/connect/ConnectSection.jsx
// Social hub section with outbound links to Hack@URI community channels.

import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../../shared/styles/shared.css';
import './ConnectSection.css';

// ─── Social Links ─────────────────────────────────────────────────────────────
// Add or remove entries to update which platforms are shown.
const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/hack-uri/',
    icon: <FaLinkedin />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hack.at.uri/',
    icon: <FaInstagram />,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const ConnectSection = () => {
  return (
    <div className="connect-page">
      <div className="connect-content">
        <h1 className="connect-title">Connect With Us!</h1>

        {/* ── Social Intro + Link Grid ──────────────────────────────────── */}
        <div className="connect-section">
          <p>
            Follow us on social media for updates, announcements, and to connect with the
            Hack@URI community!
          </p>

          <div className="social-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;

