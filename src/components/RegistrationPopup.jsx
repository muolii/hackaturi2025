import React, { useState, useEffect } from 'react';
import './RegistrationPopup.css';

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // 1. Calculate days remaining until Registration Deadline
    const targetDate = new Date('2026-01-30T23:59:59');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    // 2. CHECK SESSION STORAGE
    // This resets every time the user closes the tab/browser
    const hasSeenPopup = sessionStorage.getItem('hackaturi-reg-popup-seen');

    if (!hasSeenPopup && diffDays >= 0) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // 3. SAVE TO SESSION STORAGE 
    sessionStorage.setItem('hackaturi-reg-popup-seen', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="reg-popup-overlay">
      <div className="reg-popup-content">
        <button className="reg-popup-close" onClick={handleClose}>&times;</button>
        
        <h2 className="reg-popup-title">Ahoy, Hacker!</h2>
        
        <div className="reg-popup-body">
          <p className="reg-urgent-text">
            There are only <span className="reg-highlight">{daysLeft} days</span> left to join the crew!
          </p>
          <p className="reg-sub-text">
            Registration ends <strong>January 30, 2026!</strong>
          </p>
        </div>

        <a 
          href="https://forms.gle/7q3LSHYr7gqQ2CaZ9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reg-btn"
          onClick={handleClose}
        >
          Register Now!
        </a>
      </div>
    </div>
  );
};

export default RegistrationPopup;