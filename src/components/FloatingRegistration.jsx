import React, { useState, useEffect } from 'react';
import './FloatingRegistration.css';

const FloatingRegistration = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Target: Registration Deadline (Jan 30, 2026)
    const targetDate = new Date('2026-01-30T23:59:59');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
  };

  // Hide if closed or if deadline passed
  if (!isVisible || daysLeft < 0) return null;

  return (
    <a 
      href="https://forms.gle/7q3LSHYr7gqQ2CaZ9" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-reg-card"
    >
      <button className="floating-close" onClick={handleClose}>&times;</button>
      
      <div className="floating-content">
        <span className="floating-sub">Registration Closes in</span>
        <span className="floating-days">{daysLeft} Days</span>
        <span className="floating-cta">Register Now &rarr;</span>
      </div>
    </a>
  );
};

export default FloatingRegistration;