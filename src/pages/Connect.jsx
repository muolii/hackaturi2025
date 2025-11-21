import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
  return (
    <div className="connect-page">
      <div className="connect-content">        
        <div className="connect-section">
          <h1 className="connect-title">Connect With Us!</h1>
          <p>Follow us on social media for updates, announcements, and to connect with the Hack@URI community!</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/hack-uri/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <span className="social-icon"><FaLinkedin /></span>
              <span className="social-name">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/hack.at.uri/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <span className="social-icon"><FaInstagram /></span>
              <span className="social-name">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;