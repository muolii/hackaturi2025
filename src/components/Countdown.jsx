// src/components/Countdown.jsx
// Multi-phase countdown timer that automatically transitions through states:
//
//   Phase 1 — "calm"    (> 24h before EVENT_START):  classic wood style
//   Phase 2 — "active"  (≤ 24h before start OR during event before deadline):
//                        nautical urgent style with time-based color:
//                          blue  — 24h–11h remaining
//                          yellow — 10h–2h remaining
//                          red    — under 2h remaining
//   Phase 3 — "done"    (after SUBMISSION_DUE): celebration message
//
// ─── TO UPDATE DATES ─────────────────────────────────────────────────────────
//   EVENT_START    — when hacking begins
//   SUBMISSION_DUE — when DevPost submissions close
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from 'react';
import '../styles/shared.css';
import './Countdown.css';

const EVENT_START    = '2026-02-21T08:00:00';
const SUBMISSION_DUE = '2026-02-22T09:00:00';

// ─────────────────────────────────────────────────────────────────────────────

const msUntil = (iso) => Math.max(0, new Date(iso).getTime() - Date.now());

const breakdown = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds      = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes      = totalMinutes % 60;
  const totalHours   = Math.floor(totalMinutes / 60);
  const hours        = totalHours % 24;
  const days         = Math.floor(totalHours / 24);
  return { days, hours, minutes, seconds };
};

// Returns phase, ms remaining, banner label, and sublabel
const getState = () => {
  const now        = Date.now();
  const msToStart  = new Date(EVENT_START).getTime()    - now;
  const msToSubmit = new Date(SUBMISSION_DUE).getTime() - now;

  if (msToStart  > 24 * 60 * 60 * 1000) return { phase: 'calm',   remaining: msToStart,  label: 'UNTIL HACK@URI 2026',     sublabel: null };
  if (msToStart  > 0)                    return { phase: 'active', remaining: msToStart,  label: 'ALL HANDS ON DECK!',       sublabel: 'HACK@URI STARTS SOON!' };
  if (msToSubmit > 0)                    return { phase: 'active', remaining: msToSubmit, label: 'GOOD LUCK HACKERS!',         sublabel: 'SUBMISSIONS DUE SUNDAY @ 9AM' };
  return { phase: 'done', remaining: 0, label: '', sublabel: null };
};

// Maps total hours remaining → CSS color modifier
const colorClass = (totalHours) => {
  if (totalHours >= 11) return 'cd-active--blue';
  if (totalHours >= 2)  return 'cd-active--yellow';
  return 'cd-active--red';
};

// ─────────────────────────────────────────────────────────────────────────────

const Countdown = () => {
  const [state, setState]             = useState(getState);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const tick = () => setState(getState());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth <= 480);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Done ───────────────────────────────────────────────────────────────────
  if (state.phase === 'done') {
    return (
      <div className="countdown-wrap cd-done" aria-live="polite">
        <span className="cd-done-emoji">🏆</span>
        <span className="cd-done-text">Submissions closed — good luck, hackers!</span>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = breakdown(state.remaining);
  const totalHours = days * 24 + hours;

  // ── Calm ───────────────────────────────────────────────────────────────────
  if (state.phase === 'calm') {
    return (
      <div className="countdown-wrap" role="timer" aria-live="polite">
        <Segment value={String(days)}                     label="Days"    />
        <Colon />
        <Segment value={String(hours).padStart(2, '0')}   label="Hours"   />
        <Colon />
        <Segment value={String(minutes).padStart(2, '0')} label="Minutes" />
        {!isSmallScreen && (
          <>
            <Colon />
            <Segment value={String(seconds).padStart(2, '0')} label="Sec" />
          </>
        )}
      </div>
    );
  }

  // ── Active (unified urgent + submission phase) ─────────────────────────────
  const color = colorClass(totalHours);

  return (
    <div className={`countdown-wrap cd-active ${color}`} role="timer" aria-live="assertive">
      <div className="cd-active-text">
        <div className="cd-active-banner">
          <span className="cd-anchor">⚓</span>
          {state.label}
          <span className="cd-anchor">⚓</span>
        </div>
        {state.sublabel && (
          <div className="cd-active-sublabel">{state.sublabel}</div>
        )}
      </div>
      <div className="cd-active-segs">
        {totalHours >= 1 && (
          <>
            <ActiveSegment value={String(totalHours).padStart(2, '0')} label="Hours" />
            <ActiveColon />
          </>
        )}
        <ActiveSegment value={String(minutes).padStart(2, '0')} label="Minutes" />
        <ActiveColon />
        <ActiveSegment value={String(seconds).padStart(2, '0')} label="Seconds" />
      </div>
    </div>
  );
};

// ── Segment components ────────────────────────────────────────────────────────

const Segment = ({ value, label }) => (
  <div className="cd-seg">
    <div className="cd-num">{value}</div>
    <div className="cd-label">{label}</div>
  </div>
);
const Colon = () => <div className="cd-sepcolon">:</div>;

const ActiveSegment = ({ value, label }) => (
  <div className="cd-seg cd-active-seg">
    <div className="cd-active-num">{value}</div>
    <div className="cd-active-label">{label}</div>
  </div>
);
const ActiveColon = () => <div className="cd-active-colon">:</div>;

export default Countdown;