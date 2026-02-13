import React, { useState, useEffect } from 'react';
import '../styles/shared.css';
import './RegistrationPopup.css';

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // 1. UPDATED: Calculate days remaining until Extended Deadline (Feb 7, 2026)
    const targetDate = new Date('2026-02-07T23:59:59');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    // 2. CHECK SESSION STORAGE
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
    sessionStorage.setItem('hackaturi-reg-popup-seen', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="reg-popup-overlay">
      <div className="reg-popup-content">
        <button className="reg-popup-close" onClick={handleClose}>&times;</button>
        
        {/* Updated Title */}
        <h2 className="reg-popup-title">Registration Extended!</h2>
        
        <div className="reg-popup-body">
          <p className="reg-urgent-text">
            You're in luck! There are <span className="reg-highlight">{daysLeft} more days</span> to join the crew!
          </p>
          <p className="reg-sub-text">
            New Deadline: <strong>February 7, 2026!</strong>
          </p>
        </div>

        <a 
          href="https://forms.gle/7q3LSHYr7gqQ2CaZ9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reg-btn"
          onClick={handleClose}
        >
          Claim Your Spot!
        </a>
      </div>
    </div>
  );
};

export default RegistrationPopup;