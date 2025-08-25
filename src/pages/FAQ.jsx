// src/pages/FAQ.jsx
import React from 'react';

const FAQ = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <h1>Frequently Asked Questions</h1>
      <p>
        <strong>Q:</strong> Who can participate?<br/>
        <strong>A:</strong> [Insert Answer]
      </p>
      <p>
        <strong>Q:</strong> What should I bring?<br/>
        <strong>A:</strong> [Insert Answer]
      </p>
      <a onClick={() => setCurrentPage('home')} className="back-link">
        Back to Home
      </a>
    </div>
  );
};

export default FAQ;
