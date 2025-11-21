// src/pages/Interest.jsx
import React from 'react';
import './Interest.css';

const Interest = () => {
  return (
    <div className="interest-page">
      <div className="interest-content">
        <h1>Help Support Hack@URI!</h1>
        
        <div id="sponsor" className="become-sponsor">
          <h3>Interested in Becoming a Sponsor?</h3>
          <p>Join us in supporting the next generation of innovators! Contact us at hackaturi25@gmail.com or <a href="https://hcb.hackclub.com/donations/start/hack-uri" target="_blank" rel="noopener noreferrer" className="donate-link">donate here</a>.</p>
        </div>

        <div className="interest-forms-container">
          <div id="speaker" className="interest-form">
            <h3>Interested in being a Guest Speaker?</h3>
            <p>We're looking for industry leaders and innovators to share insights, experiences, and technical expertise with our hackers. If you're passionate about inspiring the next generation, we'd love to hear from you!</p>
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

          <div id="mentor" className="interest-form">
            <h3>Interested in Being a Mentor?</h3> 
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

          <div id="judge" className="interest-form">
            <h3>Interested in Being a Judge?</h3> 
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

export default Interest;