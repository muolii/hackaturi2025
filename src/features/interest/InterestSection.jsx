import React from 'react';
import '../../shared/styles/shared.css';
import './InterestSection.css';

const SPONSOR_INFO = {
  email: 'hackaturi25@gmail.com',
  donateUrl: 'https://hcb.hackclub.com/donations/start/hack-uri',
};

const INTEREST_FORMS = [
  { id: 'volunteer', title: 'Volunteering', description: 'Help us with check-in, meals, and logistics on event day. Great for seeing the energy behind the scenes!', url: 'https://forms.gle/FHgVZC41vPXodK2U9', linkLabel: 'Apply to Volunteer →' },
  { id: 'speaker', title: 'Guest Speaker', description: 'Share your technical expertise or industry insights with our hackers and inspire the next generation.', url: 'https://forms.gle/vKetcjUPVGvTFqxa6', linkLabel: 'Apply to Speak →' },
  { id: 'mentor', title: 'Mentor', description: 'Guide participants through technical hurdles and support creativity throughout the event.', url: 'https://forms.gle/yhsRPP5YzMw9B1sg6', linkLabel: 'Become a Mentor →' },
  { id: 'judge', title: 'Judge', description: 'Evaluate projects and celebrate the standout work and innovation created during Hack@URI.', url: 'https://forms.gle/EBsaQn6kX8ws2mb57', linkLabel: 'Become a Judge →' },
];

const InterestSection = () => {
  return (
    <div className="interest-page">
      <div className="interest-content">
        <h1>Help Support Hack@URI!</h1>
        <div id="sponsor" className="become-sponsor">
          <h3>Interested in Becoming a Sponsor?</h3>
          <p>
            Join us in supporting the next generation of innovators! Contact us at {SPONSOR_INFO.email} or{' '}
            <a href={SPONSOR_INFO.donateUrl} target="_blank" rel="noopener noreferrer" className="donate-link">
              donate here
            </a>.
          </p>
        </div>
        <div className="interest-forms-container">
          {INTEREST_FORMS.map((form) => (
            <div key={form.id} id={form.id} className="interest-form">
              <h3>{form.title}</h3>
              <p>{form.description}</p>
              <a href={form.url} target="_blank" rel="noopener noreferrer" className="interest-form-link">
                {form.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestSection;

