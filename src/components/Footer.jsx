// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/hackaturi',
      icon: '💼',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/hackaturi',
      icon: '📷',
      color: '#E4405F'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hackaturi',
      icon: '💻',
      color: '#333'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/hackaturi',
      icon: '🎮',
      color: '#5865F2'
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
        <p>Made with ❤️ by the Hack@URI Team</p>
      </div>
    </footer>
  );
};

export default Footer;
