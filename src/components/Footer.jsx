// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/hack-uri/',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hack.at.uri/',
      icon: <FaInstagram />,
      color: '#E4405F'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section full-width">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for updates, announcements, and to connect with the Hack@URI community!</p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
                title={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Hack@URI. All rights reserved.</p>
  <p>Made with <FaHeart style={{ color: 'red', verticalAlign: 'middle' }} /> by the Hack@URI Team</p>
      </div>
    </footer>
  );
};

export default Footer;
