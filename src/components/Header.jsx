// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import image from '../assets/logo.png'; // Adjust the path as necessary

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sponsors', label: 'Sponsors' }
    { id: 'team', label: 'Team' },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header">
      <div className="container">
        <a onClick={() => scrollToSection('home')} className="logo-link">
          <img src={image} alt="Logo" width="100" />
        </a>
        <nav>
          {navigationItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              <strong>{item.label}</strong>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
