// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqData = {
    general: [
      {
        question: "What is a hackathon?",
        answer: "A hackathon is an event where students \"hack\" together and create an app, website, game, etc. in 24-48 hours. There will be no malicious \"hacking\"."
      },
      {
        question: "Is Hack@URI free to attend?",
        answer: "Yes! Food will be provided for the duration of the event. We will also have swag and prizes!"
      },
      { 
        //TODO: Add link or decide if we allow under 18
        question: "Who can attend? What if I don't have any experience? Do I have to be 18?",
        answer: "This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 13 years old due to child privacy laws. If under 18, you will need to fill out this liability form from the university to participate - LINK"
      },
      {
        question: "What is the team size limit?",
        answer: "Teams should be between 1 and 4 people. We will have a team building activity right after opening ceremony if you'd like to find team members!"
      },
      {
        question: "I have a different question!",
        answer: "Email us at hackaturi@gmail.com!"
      }
    ],
    eventDetails: [
      {
        question: "When can we start working on our project? Can I work on a previous project?",
        answer: "You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used."
      },
      {
        question: "How many challenges can I apply for?",
        answer: "As many as you want!"
      },
      {
        question: "What kind of activities will there be?",
        answer: "We will post the schedule closer to the event. There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors."
      },
      {
        question: "Will hardware be available?",
        answer: "We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, soldering kits are not allowed in the venue."
      },
      {
        //TODO: Determine if we allow people to leave and come back during the night
        question: "Do I have to stay overnight?",
        answer: "No, you can leave and come back if you would prefer."
      }
    ],
    logistics: [
      {
        //TODO: Get location and parking information
        question: "Where is the event? Is it in person or virtual? Where can I park?",
        answer: "The event is located in the LOCATION at ADDRESS. You can park in Lot X,Y, Z which you can see on this campus parking site - https://web.uri.edu/transportation/parking/"
      },
      {
        question: "What should I bring?",
        answer: "Your laptop, charger, headphones, deodorant, and a pillow/blanket."
      },
      {
        question: "Are there travel reimbursements?",
        answer: "We are not able to provide travel reimbursements at this time."
      },
      {
        question: "Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?",
        answer: "We will send out acceptances 7 days before the event. If you need earlier confirmation to book travel, please reach out to our team at hackaturi@gmail.com. Applications will close once we reach the maximum amount of hackers we can support, but we will open a waitlist on the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending."
      }
    ],
    sponsorsVolunteer: [
      {
        //TODO: Add link or decide if we allow people to sign up to be a mentor/judge/volunteer
        question: "How do I sign up to be a mentor/judge/volunteer?",
        answer: "You can sign up here - LINK"
      },
      {
        question: "How can my company become a sponsor?",
        answer: "We'd love to have you as a sponsor! Please reach out to us at hackaturi@gmail.com to discuss sponsorship opportunities and benefits."
      },
      {
        question: "What benefits do sponsors receive?",
        answer: "Sponsors receive logo placement on our website and event materials, the opportunity to present to participants, access to resumes and portfolios, and the chance to recruit talented students."
      },
      {
        question: "Can I volunteer without being a mentor or judge?",
        answer: "Absolutely! We need volunteers for setup, registration, food service, and general event support. Contact us at hackaturi@gmail.com to learn more about volunteer opportunities."
      }
    ]
  };

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'eventDetails', label: 'Event Details' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'sponsorsVolunteer', label: 'Sponsors & Volunteer' }
  ];

  return (
    <div className="content">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`faq-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="faq-container">
        {faqData[activeTab].map((item, index) => {
          const key = `${activeTab}-${index}`;
          return (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleItem(activeTab, index)}
              >
                <h3>{item.question}</h3>
                <span className={`faq-arrow ${openItems[key] ? 'open' : ''}`}><FaChevronDown /></span>
              </div>
              {openItems[key] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
