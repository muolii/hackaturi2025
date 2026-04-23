// Full-screen schedule overlay. Opened by App.jsx when
// window.location.hash === '#full-schedule'.
// Uses the shared ScheduleCalendar component for the calendar + modal logic.

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import starsSvg from '../../../assets/stars-bg.svg';
import ScheduleCalendar from '../components/ScheduleCalendar.jsx';
import UpNext from '../components/UpNext.jsx';
import '../../../shared/styles/shared.css';
import '../ScheduleSection.css';
import './SchedulePage.css';

const SchedulePage = ({ onClose }) => {
  return (
    <div className="schedule-page-overlay">
      <div className="schedule-page-inner content">
        {/* ── Back Navigation ─────────────────────────────────────────────── */}
        <button className="schedule-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        {/* ── Decorative Star Field ───────────────────────────────────────── */}
        {[1, 2, 3, 4, 5].map((n) => (
          <img key={n} src={starsSvg} alt="" className={`about-star star-${n}`} />
        ))}

        {/* ── Page Heading ────────────────────────────────────────────────── */}
        <h1>Event Schedule</h1>

        {/* ── Calendar Helper Tip ─────────────────────────────────────────── */}
        <p className="schedule-click-tip">
          Click any <strong>workshop</strong> 👤 session to learn more about the speaker and the event!
        </p>

        {/* ── Live Up Next Widget ─────────────────────────────────────────── */}
        <UpNext />

        {/* ── Shared Calendar + Workshop Modals ──────────────────────────── */}
        <ScheduleCalendar />
      </div>
    </div>
  );
};

export default SchedulePage;

