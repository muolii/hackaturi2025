// src/pages/SchedulePage.jsx
// Full-screen schedule overlay. Opened by App.jsx when
// window.location.hash === '#full-schedule'.
// Uses the shared ScheduleCalendar component for the calendar + modal logic.

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import ScheduleCalendar from '../components/ScheduleCalendar';
import UpNext from '../components/UpNext';
import '../styles/shared.css';
import './Schedule.css';
import './SchedulePage.css';

const SchedulePage = ({ onClose }) => {
  return (
    <div className="schedule-page-overlay">
      <div className="schedule-page-inner content">

        {/* Back button */}
        <button className="schedule-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        {/* Decorative stars */}
        {[1, 2, 3, 4, 5].map((n) => (
          <img key={n} src={starsSvg} alt="" className={`about-star star-${n}`} />
        ))}

        <h1>Event Schedule</h1>

        {/* Helper tip */}
        <p className="schedule-click-tip">
          Click any <strong>workshop</strong> 👤 session to learn more about the speaker and the event!
        </p>

        {/* Live "Up Next" widget */}
        <UpNext />

        {/* Shared calendar with legend + workshop modals */}
        <ScheduleCalendar />

      </div>
    </div>
  );
};

export default SchedulePage;