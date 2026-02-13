// src/pages/About.jsx
import React from 'react';
import starsSvg from '../assets/stars-bg.svg';
import '../styles/shared.css';
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

      <div className="about-content">
        <h1>About Hack@URI</h1>
        <p>
          Hack@URI is the University of Rhode Island's first-ever hackathon – a
          celebration of creativity, technology, and collaboration coming this
          Spring! We're a community of students passionate about creating spaces
          where others can learn by building – whether it's coding, design,
          business, or exploring bold new ideas.
        </p>
        <p>
          Our mission is to bridge the gap between classroom learning and
          real-world experience. By bringing together students from all majors,
          we aim to spark innovation, inspire problem-solving, and connect
          participants with Rhode Island's growing tech and creative community.
        </p>
        <p>
          Whether you're a first-time hacker or a seasoned builder, Hack@URI is
          your chance to learn something new, meet amazing people, and make
          something you're proud of.
        </p>
      </div>
    </div>
  );
};

export default About;