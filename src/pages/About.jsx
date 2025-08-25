// src/pages/About.jsx
import React from 'react';

const About = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <h1>About Our Hackathon</h1>
      <p>[Insert description of the hackathon, goals, and who it's for.]</p>
      <a onClick={() => setCurrentPage('home')} className="back-link">
        Back to Home
      </a>
    </div>
  );
};

export default About;
