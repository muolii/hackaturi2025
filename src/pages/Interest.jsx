// src/pages/Interest.jsx
// "Help Support Hack@URI" section — links for sponsoring, volunteering,
// speaking, mentoring, and judging at the event.
//
// TO UPDATE LINKS: Edit the INTEREST_FORMS array and SPONSOR_INFO below.
// TO ADD A NEW ROLE: Add a new object to INTEREST_FORMS.

import React from 'react';
import '../styles/shared.css';
import './Interest.css';

// ─── Sponsor Info ─────────────────────────────────────────────────────────────
const SPONSOR_INFO = {
  email: 'hackaturi25@gmail.com',
  donateUrl: 'https://hcb.hackclub.com/donations/start/hack-uri',
};
// ─────────────────────────────────────────────────────────────────────────────

// ─── Interest Forms ───────────────────────────────────────────────────────────
// Each object represents a role card. Update `url` each year with the new form link.
// `id` is used for anchor links (e.g. scrolling to #volunteer from another section).
const INTEREST_FORMS = [
  {
    id: 'volunteer',
    title: 'Volunteering',
    description: 'Help us with check-in, meals, and logistics on event day. Great for seeing the energy behind the scenes!',
    url: 'https://forms.gle/FHgVZC41vPXodK2U9',
    linkLabel: 'Apply to Volunteer →',
  },
  {
    id: 'speaker',
    title: 'Guest Speaker',
    description: 'Share your technical expertise or industry insights with our hackers and inspire the next generation.',
    url: 'https://forms.gle/vKetcjUPVGvTFqxa6',
    linkLabel: 'Apply to Speak →',
  },
  {
    id: 'mentor',
    title: 'Mentor',
    description: 'Guide participants through technical hurdles and support creativity throughout the event.',
    url: 'https://forms.gle/yhsRPP5YzMw9B1sg6',
    linkLabel: 'Become a Mentor →',
  },
  {
    id: 'judge',
    title: 'Judge',
    description: 'Evaluate projects and celebrate the standout work and innovation created during Hack@URI.',
    url: 'https://forms.gle/EBsaQn6kX8ws2mb57',
    linkLabel: 'Become a Judge →',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const Interest = () => {
  return (
    <div className="interest-page">
      <div className="interest-content">
        <h1>Help Support Hack@URI!</h1>

        {/* ── Sponsor CTA ─────────────────────────────────────────────── */}
        {/* Featured at the top as a full-width section */}
        <div id="sponsor" className="become-sponsor">
          <h3>Interested in Becoming a Sponsor?</h3>
          <p>
            Join us in supporting the next generation of innovators! Contact us at {SPONSOR_INFO.email} or{' '}
            <a
              href={SPONSOR_INFO.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-link"
            >
              donate here
            </a>
            .
          </p>
        </div>

        {/* ── Role Cards ──────────────────────────────────────────────── */}
        <div className="interest-forms-container">
          {INTEREST_FORMS.map((form) => (
            <div key={form.id} id={form.id} className="interest-form">
              <h3>{form.title}</h3>
              <p>{form.description}</p>
              <a
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interest-form-link"
              >
                {form.linkLabel}
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Interest;