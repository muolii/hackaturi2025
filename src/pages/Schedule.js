// src/pages/Schedule.js
import React from 'react';

const Schedule = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <h1>Event Schedule</h1>
      <ul>
        <li>[Day 1 - Time - Event]</li>
        <li>[Day 2 - Time - Event]</li>
      </ul>
      <a onClick={() => setCurrentPage('home')} className="back-link">
        Back to Home
      </a>
    </div>
  );
};

export default Schedule;