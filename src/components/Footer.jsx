// src/components/Footer.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2025 Hack@URI. All rights reserved.</p>
        <p>Made with <FaHeart style={{ color: 'red', verticalAlign: 'middle' }} /> by the Hack@URI Team</p>
      </div>
    </footer>
  );
};

export default Footer;
