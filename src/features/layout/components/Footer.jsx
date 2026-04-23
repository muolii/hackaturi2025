// src/features/layout/components/Footer.jsx
// Global site footer containing legal copy, policy link, and team credit.

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../../../shared/styles/shared.css';
import './Footer.css';

// ─── Footer Config ────────────────────────────────────────────────────────────
const FOOTER_CONFIG = {
  year:       '2026',
  conductUrl: 'https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md',
};
// ─────────────────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="footer">
      {/* ── Footer Content ──────────────────────────────────────────────── */}
      <div className="footer-bottom">
        <p>&copy; {FOOTER_CONFIG.year} Hack@URI. All rights reserved.</p>
        <a
          href={FOOTER_CONFIG.conductUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', margin: '8px 0' }}
        >
          MLH Code of Conduct
        </a>
        <p>
          Made with <FaHeart style={{ color: 'red', verticalAlign: 'middle' }} /> by the Hack@URI Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;