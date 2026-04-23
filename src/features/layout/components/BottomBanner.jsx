// src/features/layout/components/BottomBanner.jsx
// Dismissible global announcement banner rendered near the bottom of the viewport.

import React from 'react';
import './BottomBanner.css';

// ─── Bottom Banner Config ─────────────────────────────────────────────────────
const SHOW_BANNER = true;

const BANNER_MESSAGE =
  'Thank you for coming to Hack@URI 2026! Stay tuned for information on an Open Claw Mini Hackathon coming soon! 👀';
// ─────────────────────────────────────────────────────────────────────────────

const BottomBanner = ({ onDismiss }) => {
  if (!SHOW_BANNER) return null;

  return (
    <div className="bottom-banner" role="status" aria-live="polite">
      {/* ── Banner Copy ─────────────────────────────────────────────────── */}
      <p className="bottom-banner-message">{BANNER_MESSAGE}</p>
      {/* ── Banner Dismiss Action ───────────────────────────────────────── */}
      <button
        type="button"
        className="bottom-banner-dismiss"
        onClick={onDismiss}
        aria-label="Dismiss announcement banner"
      >
        Dismiss
      </button>
    </div>
  );
};

export default BottomBanner;