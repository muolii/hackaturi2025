// src/pages/Schedule.jsx
// Schedule section on the MAIN PAGE.
// Shows only the "Up Next" live widget + a button to open the full schedule page.
// The full calendar lives in SchedulePage.jsx (opened via hash routing in App.jsx).

import React from 'react';
import UpNext from '../components/UpNext';
import starsSvg from '../assets/stars-bg.svg';
import '../styles/shared.css';
import './Schedule.css';

const Schedule = () => {
  const openFullSchedule = () => {
    // Uses the hash-based route that App.jsx listens to
    window.location.hash = 'full-schedule';
  };

  return (
    <div className="content schedule-section-slim">

      {/* Decorative stars */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`about-star star-${n}`} />
      ))}

      <h1>Event Schedule</h1>

      {/* Live "Up Next" widget */}
      <UpNext />

      {/* CTA to the full schedule page */}
      <div className="toggle-container" style={{ marginTop: '30px' }}>
        <button className="schedule-toggle-btn" onClick={openFullSchedule}>
          📅 View Full Schedule
        </button>
      </div>

    </div>
  );
};

export default Schedule;