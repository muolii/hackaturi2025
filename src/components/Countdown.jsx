// src/components/Countdown.jsx
// Displays a live countdown timer to the event start date.
// Shows days, hours, minutes, and seconds (seconds hidden on small screens).
//
// TO UPDATE THE EVENT DATE: Change EVENT_ISO below.
// Format: "YYYY-MM-DDTHH:MM:SS" in local time, or append "Z" for UTC.

import React, { useEffect, useState } from 'react';
import '../styles/shared.css';
import './Countdown.css';

// ─── Event Date ───────────────────────────────────────────────────────────────
// Update this each year to the date and time hacking begins.
const EVENT_ISO = '2026-02-21T08:00:00';
// ─────────────────────────────────────────────────────────────────────────────

// Returns milliseconds remaining until a given ISO date string
const msUntil = (iso) => Math.max(0, new Date(iso).getTime() - Date.now());

// Breaks a millisecond duration down into days, hours, minutes, seconds
const breakdown = (ms) => {
  const totalSeconds  = Math.floor(ms / 1000);
  const seconds       = totalSeconds % 60;
  const totalMinutes  = Math.floor(totalSeconds / 60);
  const minutes       = totalMinutes % 60;
  const totalHours    = Math.floor(totalMinutes / 60);
  const hours         = totalHours % 24;
  const days          = Math.floor(totalHours / 24);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [remaining, setRemaining]     = useState(msUntil(EVENT_ISO));
  const [finished, setFinished]       = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Tick the countdown every second
  useEffect(() => {
    const tick = () => {
      const ms = msUntil(EVENT_ISO);
      setRemaining(ms);
      if (ms <= 0) setFinished(true);
    };
    tick(); // Run immediately to avoid a 1-second blank flash
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Hide seconds on very small screens to avoid layout overflow
  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth <= 480);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Shown once the event start time has passed
  if (finished) {
    return (
      <div className="countdown-wrap" aria-live="polite">
        <div style={{ padding: '18px 24px', color: '#F9E9C0', fontWeight: 800 }}>
          🏴‍☠️ The adventure has begun!
        </div>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = breakdown(remaining);

  return (
    <div className="countdown-wrap" role="timer" aria-live="polite">
      <Segment value={String(days)} label="Days" />
      <Colon />
      <Segment value={String(hours).padStart(2, '0')} label="Hours" />
      <Colon />
      <Segment value={String(minutes).padStart(2, '0')} label="Minutes" />

      {/* Seconds are hidden on screens ≤ 480px */}
      {!isSmallScreen && (
        <>
          <Colon />
          <Segment value={String(seconds).padStart(2, '0')} label="Sec" />
        </>
      )}
    </div>
  );
};

// A single time unit (number + label)
const Segment = ({ value, label }) => (
  <div className="cd-seg">
    <div className="cd-num">{value}</div>
    <div className="cd-label">{label}</div>
  </div>
);

// The ":" separator between segments
const Colon = () => <div className="cd-sepcolon">:</div>;

export default Countdown;