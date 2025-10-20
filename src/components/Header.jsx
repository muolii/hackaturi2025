import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'team', label: 'Team' },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 120) setIsVisible(false);
      else setIsVisible(true);
      setLastY(y);

      // update active section based on offsets (simple)
      for (let i = nav.length - 1; i >= 0; i--) {
        const s = document.getElementById(nav[i].id);
        if (s && s.offsetTop <= (y + 120)) {
          setActiveSection(nav[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const handleClick = (id) => {
    if (scrollToSection) scrollToSection(id);
    setIsVisible(true);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isVisible ? '' : 'hidden'}`}>
      <div className="header-inner">
        {!isMobile ? (
          <nav className="main-nav">
            {nav.map(item => (
              <button
                key={item.id}
                className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>
        ) : (
          <>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              {nav.map(item => (
                <button
                  key={item.id}
                  className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  <strong>{item.label}</strong>
                </button>
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
