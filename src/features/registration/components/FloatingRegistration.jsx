// src/features/registration/components/FloatingRegistration.jsx
// Dismissible floating registration card with optional deadline gating.

import React, { useState, useEffect } from 'react';
import '../../../shared/styles/shared.css';
import './FloatingRegistration.css';

// ─── Floating Card Config ─────────────────────────────────────────────────────
const SHOW_DEADLINE_INFO   = true; // Set false to hide deadline copy and ignore cutoff gating
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

  // Compute remaining days once on mount for deadline-gated display logic.
  useEffect(() => {
    if (SHOW_DEADLINE_INFO) {
      const deadline = new Date(REGISTRATION_DEADLINE);
      const diffDays = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    }
  }, []);

  // Dismiss only the floating card; do not follow the surrounding link.
  const handleClose = (e) => {
    // Prevent the click from also triggering the link navigation
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
  };

  // Don't render if dismissed or, in deadline mode, if the deadline has passed
  if (!isVisible) return null;
  if (SHOW_DEADLINE_INFO && (daysLeft === null || daysLeft < 0)) return null;

  return (
    <a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-reg-card"
    >
      {/* ── Dismiss Action ──────────────────────────────────────────────── */}
      <button className="floating-close" onClick={handleClose} aria-label="Dismiss">
        &times;
      </button>

      {/* ── Banner Content ──────────────────────────────────────────────── */}
      <div className="floating-content">
        <span className="floating-sub">{BANNER_TEXT.headline}</span>
        {SHOW_DEADLINE_INFO && <span className="floating-days">{daysLeft} Days Left</span>}
        <span className="floating-cta">{BANNER_TEXT.cta}</span>
      </div>
    </a>
  );
};

export default FloatingRegistration;