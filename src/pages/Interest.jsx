// src/pages/Interest.jsx
import React from 'react';
import './Interest.css';

const Interest = () => {
  return (
    <div className="interest-page">
      <div className="interest-content">
        <h1>Help Support Hack@URI!</h1>

        {/* Sponsor stays full-width at the top as a featured section */}
        <div id="sponsor" className="become-sponsor">
          <h3>Interested in Becoming a Sponsor?</h3>
          <p>Join us in supporting the next generation of innovators! Contact us at hackaturi25@gmail.com or <a href="https://hcb.hackclub.com/donations/start/hack-uri" target="_blank" rel="noopener noreferrer" className="donate-link">donate here</a>.</p>
        </div>

        <div className="interest-forms-container">
          
          <div id="volunteer" className="interest-form">
            <h3>Volunteering</h3>
            <p>Help us with check-in, meals, and logistics on event day. Great for seeing the energy behind the scenes!</p>
            <a href="https://forms.gle/FHgVZC41vPXodK2U9" target="_blank" rel="noopener noreferrer" className="interest-form-link">
              Apply to Volunteer →
            </a>
          </div>

          <div id="speaker" className="interest-form">
            <h3>Guest Speaker</h3>
            <p>Share your technical expertise or industry insights with our hackers and inspire the next generation.</p>
            <a href="https://forms.gle/vKetcjUPVGvTFqxa6" target="_blank" rel="noopener noreferrer" className="interest-form-link">
              Apply to Speak →
            </a>
          </div>

          <div id="mentor" className="interest-form">
            <h3>Mentor</h3>
            <p>Guide participants through technical hurdles and support creativity throughout the 24-hour event.</p>
            <a href="https://forms.gle/yhsRPP5YzMw9B1sg6" target="_blank" rel="noopener noreferrer" className="interest-form-link">
              Become a Mentor →
            </a>
          </div>

          <div id="judge" className="interest-form">
            <h3>Judge</h3>
            <p>Evaluate projects and celebrate the standout work and innovation created during Hack@URI.</p>
            <a href="https://forms.gle/EBsaQn6kX8ws2mb57" target="_blank" rel="noopener noreferrer" className="interest-form-link">
              Become a Judge →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Interest;