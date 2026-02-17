// src/pages/FAQ.jsx
// Accordion-style FAQ section with tabbed categories.
// To add, remove, or edit questions: update the FAQ_DATA object below.
// To add a new tab/category: add a key to FAQ_DATA and a matching entry in FAQ_TABS.

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import '../styles/shared.css';
import './FAQ.css';

// ─── Tab Configuration ────────────────────────────────────────────────────────
// Controls the order and labels of the tabs displayed at the top of the FAQ.
// Each `id` must match a key in FAQ_DATA below.
const FAQ_TABS = [
  { id: 'general',          label: 'General' },
  { id: 'eventDetails',     label: 'Event Details' },
  { id: 'logistics',        label: 'Logistics' },
  { id: 'sponsorsVolunteer', label: 'Sponsors & Volunteer' },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── FAQ Content ──────────────────────────────────────────────────────────────
// Each key is a category (matching a tab id). Each value is an array of
// { question, answer } objects. Answers can be plain strings or JSX for links.
const FAQ_DATA = {
  general: [
    {
      question: 'What is a hackathon?',
      answer:
        'A hackathon is an event where students "hack" together and create an app, website, game, etc. in 24-48 hours. There will be no malicious "hacking."',
    },
    {
      question: 'Is Hack@URI free to attend?',
      answer:
        'Yes! Food will be provided for the duration of the event. We will also have swag and prizes!',
    },
    {
      question: "Who can attend? What if I don't have any experience? Do I have to be 18?",
      answer:
        'This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 18 years old.',
    },
    {
      question: 'What is the team size limit?',
      answer:
        "Teams should be between 1 and 4 people. We will have a team building activity shortly after opening ceremony if you'd like to find team members!",
    },
    {
      question: 'I have a different question!',
      answer: 'Email us at hackaturi25@gmail.com!',
    },
  ],

  eventDetails: [
    {
      question: 'When can we start working on our project? Can I work on a previous project?',
      answer:
        'You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used.',
    },
    {
      question: 'How many challenges can I apply for?',
      answer: 'You can only submit your project to one challenge.',
    },
    {
      question: 'What kind of activities will there be?',
      answer:
        'There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors.',
    },
    {
      question: 'Will hardware be available?',
      answer:
        'We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, soldering kits are not allowed in the venue.',
    },
    {
      question: 'Do I have to stay overnight?',
      answer:
        "Since you only have a short amount of time to build, most stay on campus to complete their project. We'll provide a packing list. But you are able to leave and come back if you live nearby.",
    },
  ],

  logistics: [
    {
      // TODO: Update with more specific parking instructions closer to event date
      question: 'Where is the event? Is it in person or virtual? Where can I park?',
      answer: (
        <>
          The event is located in the Fascitelli Center for Advanced Engineering. You can park in
          lots 6 and 7, which you can see on this{' '}
          <a href="https://web.uri.edu/transportation/parking/" target="_blank" rel="noopener noreferrer">
            campus parking site
          </a>
          .
        </>
      ),
    },
    {
      question: 'What should I bring?',
      answer: 'Your laptop, chargers, headphones, deodorant, and a pillow/blanket.',
    },
    {
      question: 'Are there travel reimbursements?',
      answer:
        'If we have funding available, we will reach out to those that have requested. We cannot guarantee reimbursement at this time.',
    },
    {
      question: 'Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?',
      answer:
        'We will send out acceptances 7 days before the event. If you need earlier confirmation to book travel, please reach out to our team at hackaturi25@gmail.com. Applications will close once we reach the maximum amount of hackers we can support, but we will open a waitlist on the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending.',
    },
  ],

  sponsorsVolunteer: [
    {
      // TODO: Update volunteer signup link if the form URL changes
      question: 'How do I sign up to be a mentor/judge/volunteer?',
      answer: (
        <>
          You can sign up{' '}
          <a
            href="https://forms.gle/yhsRPP5YzMw9B1sg6"
            target="_blank"
            rel="noopener noreferrer"
          >
            here!
          </a>
        </>
      ),
    },
    {
      question: 'How can my company become a sponsor?',
      answer:
        "We'd love to have you as a sponsor! Please reach out to us at hackaturi25@gmail.com to discuss sponsorship opportunities and benefits.",
    },
    {
      question: 'What benefits do sponsors receive?',
      answer:
        'Sponsors receive logo placement on our website and event materials, the opportunity to present to participants, access to resumes and portfolios, and the chance to recruit talented students.',
    },
    {
      question: 'Can I volunteer without being a mentor or judge?',
      answer:
        'Absolutely! We need volunteers for setup, registration, food service, and general event support. Contact us at hackaturi25@gmail.com to learn more about volunteer opportunities.',
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(FAQ_TABS[0].id);
  const [openItems, setOpenItems] = useState({});
  const answerRefs = useRef({});

  // Toggles an individual FAQ item open or closed.
  // `key` is a composite of category + index to avoid collisions across tabs.
  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Dynamically calculates and sets the max-height of open answer panels.
  // This enables a smooth CSS height transition without a fixed pixel value.
  useEffect(() => {
    const calculateHeight = (element) => {
      if (!element) return 0;
      // Clone the element off-screen to measure its natural height
      const clone = element.cloneNode(true);
      Object.assign(clone.style, {
        position: 'absolute',
        visibility: 'hidden',
        height: 'auto',
        maxHeight: 'none',
        padding: '20px 30px 30px 30px',
        opacity: '1',
        overflow: 'visible',
        width: element.offsetWidth + 'px',
        boxSizing: 'border-box',
        margin: '0',
      });
      document.body.appendChild(clone);
      const height = clone.scrollHeight;
      document.body.removeChild(clone);
      return height;
    };

    // Reset all panels, then expand the open ones on next animation frame
    Object.values(answerRefs.current).forEach((el) => {
      if (el) el.style.maxHeight = '0px';
    });

    requestAnimationFrame(() => {
      Object.keys(answerRefs.current).forEach((key) => {
        const el = answerRefs.current[key];
        if (el && openItems[key]) {
          el.style.maxHeight = calculateHeight(el) + 'px';
        }
      });
    });

    // Recalculate heights on window resize (e.g. text reflow changes content height)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        Object.keys(answerRefs.current).forEach((key) => {
          const el = answerRefs.current[key];
          if (el && openItems[key]) {
            el.style.maxHeight = calculateHeight(el) + 'px';
          }
        });
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [openItems, activeTab]);

  return (
    <div className="pirate-faq">

      {/* Decorative stars */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`faq-star star-${n}`} />
      ))}

      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        {/* ── Tab Navigation ──────────────────────────────────────────────── */}
        <div className="faq-tabs">
          {FAQ_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`faq-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── FAQ Accordion ───────────────────────────────────────────────── */}
        <div className="faq-container">
          {FAQ_DATA[activeTab].map((item, index) => {
            const key = `${activeTab}-${index}`;
            return (
              <div key={key} className="faq-item">
                <div className="faq-question" onClick={() => toggleItem(activeTab, index)}>
                  <h3>{item.question}</h3>
                  <span className={`faq-arrow ${openItems[key] ? 'open' : ''}`}>
                    <FaChevronDown />
                  </span>
                </div>
                <div
                  ref={(el) => (answerRefs.current[key] = el)}
                  className={`faq-answer ${openItems[key] ? 'open' : ''}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default FAQ;