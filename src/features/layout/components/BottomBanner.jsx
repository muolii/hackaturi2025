import React from 'react';
import './BottomBanner.css';

const SHOW_BANNER = true; // Set to false to hide the banner

const BANNER_MESSAGE =
  'Thank you for coming to Hack@URI 2026! Stay tuned for information on an Open Claw Mini Hackathon coming soon! 👀';

const BottomBanner = ({ onDismiss }) => {
  if (!SHOW_BANNER) return null;

  return (
    <div className="bottom-banner" role="status" aria-live="polite">
      <p className="bottom-banner__message">{BANNER_MESSAGE}</p>
      <button
        type="button"
        className="bottom-banner__dismiss"
        onClick={onDismiss}
        aria-label="Dismiss announcement banner"
      >
        Dismiss
      </button>
    </div>
  );
};

export default BottomBanner;