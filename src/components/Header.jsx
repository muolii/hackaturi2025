// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import image from '../assets/logo.png'; // Adjust the path as necessary

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sponsors', label: 'Sponsors' }
    { id: 'team', label: 'Team' },
  ];

  // Update active section and header visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = currentScrollY + 100; // Offset for header

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Handle header visibility (only hide/show based on scroll, not navigation)
      if (!isNavigating) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setIsHeaderVisible(false);
        } else {
          // Scrolling up
          setIsHeaderVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavigating]);

  const handleNavigationClick = (sectionId) => {
    setIsNavigating(true);
    setIsHeaderVisible(true); // Ensure header stays visible
    scrollToSection(sectionId);
    
    // Reset navigation state after a short delay
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  return (
    <div className={`header ${!isHeaderVisible ? 'hidden' : ''}`}>
      <div className="container">
        <a onClick={() => handleNavigationClick('home')} className="logo-link">
          <img src={image} alt="Logo" width="100" />
        </a>
        <nav>
          {navigationItems.map((item) => (
            <a
              key={item.id}
              onClick={() => handleNavigationClick(item.id)}
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
