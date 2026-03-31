// src/components/RegistrationPopup.jsx
// A modal popup that appears 500ms after first page load, prompting visitors
// to register before the deadline. Only shown once per browser session.
//
// TO UPDATE:
//   - REGISTRATION_DEADLINE: The cutoff date for registration.
//   - REGISTRATION_URL: The link to the registration form.
//   - POPUP_TEXT: All user-facing strings in the popup.

import React, { useState, useEffect } from 'react';
import '../../../shared/styles/shared.css';
import './RegistrationPopup.css';

// ─── Config ───────────────────────────────────────────────────────────────────
const SHOW_DEADLINE_INFO   = false; // Set false to hide deadline copy and ignore cutoff gating
const REGISTRATION_DEADLINE = '2027-02-07T23:59:59'; // Last day to register
const REGISTRATION_URL      = 'https://docs.google.com/forms/d/e/1FAIpQLSfvNrL-fWzOD5FGZ7sW3_Njzdup-KZG4uXOGhuRlPzFjrT4Wg/viewform?usp=publish-editor';

const POPUP_TEXT = {
  title:    'Interested in joining Hack@URI 2027 as an organizer?',
  deadline: 'Check out the interest form below!',           // Human-readable deadline shown in popup body
  cta:      'Organizer Interest Form →',            // Button label
};

// sessionStorage key — changing this resets popup "seen" state for all users
const SESSION_KEY = 'hackaturi-reg-popup-seen';
// ─────────────────────────────────────────────────────────────────────────────

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [daysLeft, setDaysLeft]   = useState(null);

  useEffect(() => {
    let diffDays = null;
    if (SHOW_DEADLINE_INFO) {
      // Calculate days remaining until deadline when deadline mode is enabled
      const deadline = new Date(REGISTRATION_DEADLINE);
      diffDays = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    }

    // Only show the popup if it hasn't been dismissed this session and
    // (optionally) the deadline hasn't passed yet
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (!alreadySeen && (!SHOW_DEADLINE_INFO || diffDays >= 0)) {
      const timer = setTimeout(() => setShowPopup(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Mark as seen so it won't reappear during this browser session
    sessionStorage.setItem(SESSION_KEY, 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="reg-popup-overlay">
      <div className="reg-popup-content">
        <button className="reg-popup-close" onClick={handleClose} aria-label="Close">
          &times;
        </button>

        <h2 className="reg-popup-title">{POPUP_TEXT.title}</h2>

        <div className="reg-popup-body">
          {SHOW_DEADLINE_INFO ? (
            <>
              <p className="reg-urgent-text">
                You're in luck! There are{' '}
                <span className="reg-highlight">{daysLeft} more days</span> to join the crew!
              </p>
              <p className="reg-sub-text">
                New Deadline: <strong>{POPUP_TEXT.deadline}!</strong>
              </p>
            </>
          ) : (
            <p className="reg-sub-text reg-sub-text--no-deadline">{POPUP_TEXT.deadline}</p>
          )}
        </div>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reg-btn"
          onClick={handleClose}
        >
          {POPUP_TEXT.cta}
        </a>
      </div>
    </div>
  );
};

export default RegistrationPopup;