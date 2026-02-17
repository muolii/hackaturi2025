// src/pages/About.jsx
// Describes what Hack@URI is, who it's for, and the mission behind the event.
// Update the text content each year to reflect any changes to the event's scope or mission.

import React from 'react';
import starsSvg from '../assets/stars-bg.svg';
import '../styles/shared.css';
import './About.css';

// ─── About Content ────────────────────────────────────────────────────────────
// Edit these paragraphs each year to keep the about section current.
const ABOUT_PARAGRAPHS = [
  `Hack@URI is the University of Rhode Island's first-ever hackathon — a
  celebration of creativity, technology, and collaboration coming this
  Spring! We're a community of students passionate about creating spaces
  where others can learn by building — whether it's coding, design,
  business, or exploring bold new ideas.`,

  `Our mission is to bridge the gap between classroom learning and
  real-world experience. By bringing together students from all majors,
  we aim to spark innovation, inspire problem-solving, and connect
  participants with Rhode Island's growing tech and creative community.`,

  `Whether you're a first-time hacker or a seasoned builder, Hack@URI is
  your chance to learn something new, meet amazing people, and make
  something you're proud of.`,
];
// ─────────────────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="pirate-about">

      {/* Decorative stars scattered in the background */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`about-star star-${n}`} />
      ))}

      <div className="about-content">
        <h1>About Hack@URI</h1>
        {ABOUT_PARAGRAPHS.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

    </div>
  );
};

export default About;