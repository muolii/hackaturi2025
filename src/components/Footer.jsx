// src/components/Footer.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/shared.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2025 Hack@URI. All rights reserved.</p>
        <a 
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', margin: '8px 0' }}
        >
          MLH Code of Conduct
        </a>
        <p>Made with <FaHeart style={{ color: 'red', verticalAlign: 'middle' }} /> by the Hack@URI Team</p>
      </div>
    </footer>
  );
};

export default Footer;