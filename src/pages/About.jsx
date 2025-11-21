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

      <h2 style={{ marginTop: "40px" }}>Help Support Hack@URI!</h2>
      <div className="become-sponsor">
        <h3>Interested in Becoming a Sponsor?</h3>
        <p>Join us in supporting the next generation of innovators! Contact us at hackaturi25@gmail.com or <a href="https://hcb.hackclub.com/donations/start/hack-uri" target="_blank" rel="noopener noreferrer" className="donate-link">donate here</a>.</p>
      </div>

      <div className="side-by-side-container">
        <div className="interest-form">
          <h3>Interested in being a Guest Speaker?</h3>
          <p>We're looking for industry leaders and innovators to share insights, experiences, and technical expertise with our hackers. If you’re passionate about inspiring the next generation, we’d love to hear from you!</p>
          <p>
            <a 
              href="https://forms.gle/vKetcjUPVGvTFqxa6"
              target="_blank" 
              rel="noopener noreferrer" 
              className="interest-form-link"
            >
              Apply to be a Guest Speaker →
            </a>
          </p>
        </div>

        <div className="interest-form">
          <h3> Interested in Being a Mentor?</h3> 
          <p>Mentors guide participants, help solve challenges, and support creativity throughout the event. Whether you're a developer, designer, or tech professional, your expertise can make a big impact!</p>
          <p>
            <a
              href="https://forms.gle/yhsRPP5YzMw9B1sg6"
              target="_blank"
              rel="noopener noreferrer"
              className="interest-form-link"
            >
              Apply to become a Mentor →
            </a>
          </p>
        </div>

        <div className="interest-form">
          <h3> Interested in Being a Judge?</h3> 
          <p>Judges evaluate projects, provide feedback, and help highlight the creativity and standout work at Hack@URI. We're seeking experienced professionals to help celebrate innovation and creativity.</p>
          <p>
            <a
              href="https://forms.gle/EBsaQn6kX8ws2mb57"
              target="_blank"
              rel="noopener noreferrer"
              className="interest-form-link"
            >
              Apply to become a Judge →
            </a>
          </p>
        </div>

      </div>

    </div>
    </div>
  );
};

export default About;
