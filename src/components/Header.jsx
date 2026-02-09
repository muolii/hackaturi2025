import React, { useState, useEffect } from 'react';
import './Header.css';

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { 
    id: 'interest', 
    label: 'Get Involved',
    dropdown: [
      { id: 'sponsor', label: 'Sponsor' },
      { id: 'volunteer', label: 'Volunteer' },
      { id: 'speaker', label: 'Guest Speaker' },
      { id: 'mentor', label: 'Mentor' },
      { id: 'judge', label: 'Judge' }
    ]
  },
  { id: 'tracks', label: 'Tracks' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'faq', label: 'FAQ' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'team', label: 'Team' },
  { id: 'connect', label: 'Connect' }
];

// Persistent global scroll handler using window object
if (!window.hackaturiScrollData) {
  window.hackaturiScrollData = {
    lastY: 0,
    handler: null,
    headerElement: null
  };
}

const createGlobalScrollHandler = () => {
  return () => {
    const y = window.scrollY;
    const lastY = window.hackaturiScrollData.lastY;
    const isScrollingDown = y > lastY;
    const isScrollingUp = y < lastY;
    const thresholdMet = y > 100;

    if (!window.hackaturiScrollData.headerElement) {
      window.hackaturiScrollData.headerElement = document.querySelector('.site-header');
      if (!window.hackaturiScrollData.headerElement) {
        return;
      }
    }

    if (isScrollingDown && thresholdMet) {
      window.hackaturiScrollData.headerElement.classList.add('hidden');
      const appElement = document.querySelector('.app');
      if (appElement) {
        appElement.classList.add('scrolled');
      }
    }
    else if (isScrollingUp || y <= 100) {
      window.hackaturiScrollData.headerElement.classList.remove('hidden');
      const appElement = document.querySelector('.app');
      if (appElement) {
        appElement.classList.remove('scrolled');
      }
    }
    window.hackaturiScrollData.lastY = y;

    for (let i = nav.length - 1; i >= 0; i--) {
      const s = document.getElementById(nav[i].id);
      if (s && s.offsetTop <= (y + 120)) {
        const activeButton = window.hackaturiScrollData.headerElement.querySelector(`[data-section="${nav[i].id}"]`);
        if (activeButton) {
          window.hackaturiScrollData.headerElement.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
            btn.classList.remove('active');
          });
          activeButton.classList.add('active');
        }
        break;
      }
    }
  };
};

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!window.hackaturiScrollData.handler) {
      window.hackaturiScrollData.handler = createGlobalScrollHandler();
      window.addEventListener('scroll', window.hackaturiScrollData.handler);
    }
    const headerElement = document.querySelector('.site-header');
    if (headerElement) {
      window.hackaturiScrollData.headerElement = headerElement;
    }
  }, []);

  // Updated handleClick to manage the highlight-section class
  const handleClick = (id, shouldHighlight = false) => {
    if (scrollToSection) scrollToSection(id);

    if (shouldHighlight) {
      const element = document.getElementById(id);
      if (element) {
        element.classList.remove('highlight-section');
        void element.offsetWidth; // Force reflow to restart animation
        element.classList.add('highlight-section');

        setTimeout(() => {
          element.classList.remove('highlight-section');
        }, 2000);
      }
    }

    setIsVisible(true);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMouseEnter = (id) => setOpenDropdown(id);
  const handleMouseLeave = () => setOpenDropdown(null);
  const toggleMobileDropdown = (id) => setOpenMobileDropdown(openMobileDropdown === id ? null : id);

  return (
    <header className={`site-header ${isVisible ? '' : 'hidden'}`}>
      <div className="header-inner">
        {!isMobile ? (
          <nav className="main-nav">
            {nav.map(item => (
              item.dropdown ? (
                <div 
                  key={item.id} 
                  className={`nav-item dropdown ${openDropdown === item.id ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleClick(item.id, false)} // No highlight on general tab
                    data-section={item.id}
                  >
                    <strong>{item.label}</strong>
                  </button>
                  <div className="dropdown-menu">
                    {item.dropdown.map(dropdownItem => (
                      <button
                        key={dropdownItem.id}
                        className="dropdown-item"
                        onClick={() => handleClick(dropdownItem.id, true)} // Highlight specific card
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.id}
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id, false)}
                  data-section={item.id}
                >
                  <strong>{item.label}</strong>
                </button>
              )
            ))}
          </nav>
        ) : (
          <>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span><span></span><span></span>
              </div>
            </button>
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              {nav.map(item => (
                item.dropdown ? (
                  <div key={item.id} className={`mobile-dropdown ${openMobileDropdown === item.id ? 'open' : ''}`}>
                    <button
                      className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => toggleMobileDropdown(item.id)}
                      data-section={item.id}
                    >
                      <strong>{item.label}</strong>
                    </button>
                    {openMobileDropdown === item.id && (
                      <div className="mobile-dropdown-menu">
                        {item.dropdown.map(dropdownItem => (
                          <button
                            key={dropdownItem.id}
                            className="mobile-dropdown-item"
                            onClick={() => handleClick(dropdownItem.id, true)} // Highlight on mobile selection
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleClick(item.id, false)}
                    data-section={item.id}
                  >
                    <strong>{item.label}</strong>
                  </button>
                )
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;