// src/pages/Sponsors.js
import React from 'react';

const Sponsors = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <h1>Our Sponsors</h1>
      <ul>
        <li>[Sponsor 1]</li>
        <li>[Sponsor 2]</li>
        <li>[Sponsor 3]</li>
      </ul>
      <a onClick={() => setCurrentPage('home')} className="back-link">
        Back to Home
      </a>
    </div>
  );
};

export default Sponsors;