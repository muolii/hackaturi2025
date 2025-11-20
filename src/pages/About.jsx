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

      <div className="about-content">
      <h1>About Hack@URI</h1>
      <p>
        Hack@URI is the University of Rhode Island’s first-ever hackathon — a
        celebration of creativity, technology, and collaboration coming this
        Spring! We’re a community of students passionate about creating spaces
        where others can learn by building — whether it’s coding, design,
        business, or exploring bold new ideas.
      </p>
      <p>
        Our mission is to bridge the gap between classroom learning and
        real-world experience. By bringing together students from all majors,
        we aim to spark innovation, inspire problem-solving, and connect
        participants with Rhode Island’s growing tech and creative community.
      </p>
      <p>
        Whether you’re a first-time hacker or a seasoned builder, Hack@URI is
        your chance to learn something new, meet amazing people, and make
        something you’re proud of.
      </p>

      <div className="become-sponsor">
        <h3>Interested in Becoming a Sponsor?</h3>
        <p>Join us in supporting the next generation of innovators! Contact us at hackaturi25@gmail.com or <a href="https://hcb.hackclub.com/donations/start/hack-uri" target="_blank" rel="noopener noreferrer" className="donate-link">donate here</a>.</p>
      </div>

      <div className="side-by-side-container">
        <div className="guest-speaker-section">
          <h3>Interested in being a Guest Speaker?</h3>
          <p>We're seeking passionate industry leaders, innovative entrepreneurs, and experienced developers to share their knowledge and inspire our hackers. Whether you have insights on emerging technologies, startup experiences, or technical expertise to share, we'd love to hear from you.</p>
          <p>
            <a 
              href="https://forms.gle/vKetcjUPVGvTFqxa6"
              target="_blank" 
              rel="noopener noreferrer" 
              className="speaker-form-link"
            >
              Apply to be a Guest Speaker →
            </a>
          </p>
        </div>

        <div className="become-mentor">
          <h3> Interested in Being a Mentor?</h3> 
          <p>Share your expertise and guide aspiring hackers at Hack@URI! As a mentor, you'll have the opportunity to support participants, help troubleshoot challenges, and inspire creativity throughout the event. Whether you're a seasoned developer, designer, or industry professional, your insights can make a significant impact on our hackers' experience.
          </p>
          <a
            href="https://forms.gle/yhsRPP5YzMw9B1sg6"
            target="_blank"
            rel="noopener noreferrer"
            className="become-mentor-link"
          >
            Apply to be a Mentor →
          </a>
        </div>
      </div>

    </div>
    </div>
  );
};

export default About;
