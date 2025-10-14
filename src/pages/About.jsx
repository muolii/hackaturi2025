// src/pages/About.jsx
import React from 'react';
import starsSvg from '../assets/stars-bg.svg';
import './About.css';

const About = () => {
  return (
    <div className="pirate-about">
      {/* Animated stars */}
      <img src={starsSvg} alt="" className="about-star star-1" />
      <img src={starsSvg} alt="" className="about-star star-2" />
      <img src={starsSvg} alt="" className="about-star star-3" />
      <img src={starsSvg} alt="" className="about-star star-4" />
      <img src={starsSvg} alt="" className="about-star star-5" />

      <h1>About Our Hackathon</h1>
      <p>[Insert description of the hackathon, goals, and who it's for.]</p>
    </div>
  );
};

export default About;
