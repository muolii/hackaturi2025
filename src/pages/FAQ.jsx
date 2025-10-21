// src/pages/FAQ.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import './FAQ.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openItems, setOpenItems] = useState({});
  const answerRefs = useRef({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Dynamic height calculation for smoother animations
  useEffect(() => {
    const calculateHeight = (element) => {
      if (!element) return 0;
      
      // Create a temporary clone to measure the full height
      const clone = element.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.visibility = 'hidden';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.padding = '20px 30px 30px 30px';
      clone.style.opacity = '1';
      clone.style.overflow = 'visible';
      clone.style.width = element.offsetWidth + 'px';
      clone.style.boxSizing = 'border-box';
      clone.style.margin = '0';
      
      document.body.appendChild(clone);
      const height = clone.scrollHeight;
      document.body.removeChild(clone);
      
      return height;
    };

    const updateHeights = () => {
      Object.keys(answerRefs.current).forEach(key => {
        const element = answerRefs.current[key];
        if (element && openItems[key]) {
          const height = calculateHeight(element);
          element.style.maxHeight = height + 'px';
        }
      });
    };

    // Initial height calculation
    Object.keys(answerRefs.current).forEach(key => {
      const element = answerRefs.current[key];
      if (element) {
        const isOpen = openItems[key];
        if (isOpen) {
          const height = calculateHeight(element);
          // Use requestAnimationFrame to ensure smooth transition
          requestAnimationFrame(() => {
            element.style.maxHeight = height + 'px';
          });
        } else {
          element.style.maxHeight = '0px';
        }
      }
    });

    // Listen for window resize to recalculate heights
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateHeights();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [openItems]);

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
        question: "Who can attend? What if I don't have any experience? Do I have to be 18?",
        answer: "This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 18 years old."
      },
      {
        question: "What is the team size limit?",
        answer: "Teams should be between 1 and 4 people. We will have a team building activity right after opening ceremony if you'd like to find team members!"
      },
      {
        question: "I have a different question!",
        answer: "Email us at hackaturi25@gmail.com!"
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
        question: "Do I have to stay overnight?",
        answer: "No, you can leave and come back if you would prefer. We'll have lanyards to help you get back in!"
      }
    ],
    logistics: [
      {
        //TODO: Update with specific location info closer to date, and/or give more specific parking instructions
        question: "Where is the event? Is it in person or virtual? Where can I park?",
        answer: (
          <>
            The event is located in the Fascitelli Center for Advance Engineering. You can park in lots 6 and 7, which you can see on this{' '}
            <a href="https://web.uri.edu/transportation/parking/" target="_blank" rel="noopener noreferrer">campus parking site</a>.
          </>
        )
      },
      {
        question: "What should I bring?",
        answer: "Your laptop, chargers, headphones, deodorant, and a pillow/blanket."
      },
      {
        question: "Are there travel reimbursements?",
        answer: "We are not able to provide travel reimbursements at this time."
      },
      {
        question: "Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?",
        answer: "We will send out acceptances 7 days before the event. If you need earlier confirmation to book travel, please reach out to our team at hackaturi25@gmail.com. Applications will close once we reach the maximum amount of hackers we can support, but we will open a waitlist on the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending."
      }
    ],
    sponsorsVolunteer: [
      {
  //TODO: Add link or decide if we allow people to sign up to be a mentor/judge/volunteer
  question: "How do I sign up to be a mentor/judge/volunteer?",
  answer: (
    <>
      You can sign up {" "}
      <a 
        href="https://forms.gle/yhsRPP5YzMw9B1sg6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        here!
      </a>
    </>
  )
},
      {
        question: "How can my company become a sponsor?",
        answer: "We'd love to have you as a sponsor! Please reach out to us at hackaturi25@gmail.com to discuss sponsorship opportunities and benefits."
      },
      {
        question: "What benefits do sponsors receive?",
        answer: "Sponsors receive logo placement on our website and event materials, the opportunity to present to participants, access to resumes and portfolios, and the chance to recruit talented students."
      },
      {
        question: "Can I volunteer without being a mentor or judge?",
        answer: "Absolutely! We need volunteers for setup, registration, food service, and general event support. Contact us at hackaturi25@gmail.com to learn more about volunteer opportunities."
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
    <div className="pirate-faq">
      {/* Random scattered stars */}
      <img src={starsSvg} alt="" className="faq-star star-1" />
      <img src={starsSvg} alt="" className="faq-star star-2" />
      <img src={starsSvg} alt="" className="faq-star star-3" />
      <img src={starsSvg} alt="" className="faq-star star-4" />
      <img src={starsSvg} alt="" className="faq-star star-5" />
      
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        
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
                <div 
                  ref={el => answerRefs.current[key] = el}
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
