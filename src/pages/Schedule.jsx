// src/pages/Schedule.jsx
// Schedule section on the MAIN PAGE.
// Shows the live "Up Next" widget, the full inline calendar, and a button
// to open the dedicated full-screen schedule page overlay.

import React from 'react';
import UpNext from '../components/UpNext';
import ScheduleCalendar from '../components/ScheduleCalendar';
import starsSvg from '../assets/stars-bg.svg';
import '../styles/shared.css';
import './Schedule.css';

const Schedule = () => {
  const openFullSchedule = () => {
    window.location.hash = 'full-schedule';
  };

  return (
    <div className="content">

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

      {/* Full inline calendar with legend + modal support */}
      <ScheduleCalendar />

      {/* Link to the dedicated full-screen schedule page */}
      <div className="toggle-container" style={{ marginTop: '40px' }}>
        <button className="schedule-toggle-btn" onClick={openFullSchedule}>
          📅 Open Full Schedule Page
        </button>
      </div>

    </div>
  );
};

export default Schedule;