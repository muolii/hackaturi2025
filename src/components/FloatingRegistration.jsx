// src/components/FloatingRegistration.jsx
// A dismissible floating banner linking to the registration form.
// Automatically hides after the registration deadline passes.
//
// TO UPDATE:
//   - REGISTRATION_DEADLINE: Set to the last day registrations are accepted.
//   - REGISTRATION_URL: The Google Form or registration link.
//   - BANNER_TEXT: The headline and call-to-action text shown on the banner.

import React, { useState, useEffect } from 'react';
import '../styles/shared.css';
import './FloatingRegistration.css';

// ─── Config ───────────────────────────────────────────────────────────────────
const REGISTRATION_DEADLINE = '2026-02-07T23:59:59'; // Last day to register
const REGISTRATION_URL      = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';

const BANNER_TEXT = {
  headline: 'Registration EXTENDED!', // Main label
  cta:      'Join the Crew →',         // Call-to-action link text
};
// ─────────────────────────────────────────────────────────────────────────────

const FloatingRegistration = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [daysLeft, setDaysLeft]   = useState(null);

  useEffect(() => {
    const deadline = new Date(REGISTRATION_DEADLINE);
    const diffDays = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  const handleClose = (e) => {
    // Prevent the click from also triggering the link navigation
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
  };

  // Don't render if dismissed or if the deadline has already passed
  if (!isVisible || daysLeft === null || daysLeft < 0) return null;

  return (
    <a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-reg-card"
    >
      {/* Close button — stops propagation so it doesn't open the link */}
      <button className="floating-close" onClick={handleClose} aria-label="Dismiss">
        &times;
      </button>

      <div className="floating-content">
        <span className="floating-sub">{BANNER_TEXT.headline}</span>
        <span className="floating-days">{daysLeft} Days Left</span>
        <span className="floating-cta">{BANNER_TEXT.cta}</span>
      </div>
    </a>
  );
};

export default FloatingRegistration;