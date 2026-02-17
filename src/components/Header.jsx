// src/components/Header.jsx
// Site navigation header with:
//   - Desktop: horizontal nav bar with hover dropdowns
//   - Mobile: hamburger menu with expandable dropdown sections
//   - Auto-hides on scroll down, reappears on scroll up
//   - Highlights the active section based on scroll position
//
// TO ADD OR REMOVE NAV ITEMS: Edit the NAV_ITEMS array below.
// TO ADD A DROPDOWN: Add a `dropdown` array to the nav item (see 'Get Involved').

import React, { useState, useEffect } from 'react';
import '../styles/shared.css';
import './Header.css';

// ─── Navigation Config ────────────────────────────────────────────────────────
// Each item needs an `id` (matching the section's HTML element ID) and a `label`.
// Items with a `dropdown` array render as a hover menu on desktop / tap-to-expand on mobile.
// Dropdown item IDs can be subsection anchors within the parent section.
const NAV_ITEMS = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'schedule',  label: 'Schedule' },
  { id: 'tracks',    label: 'Tracks' },
  { id: 'faq',       label: 'FAQ' },
  {
    id: 'interest',
    label: 'Get Involved',
    dropdown: [
      { id: 'sponsor',   label: 'Sponsor' },
      { id: 'volunteer', label: 'Volunteer' },
      { id: 'speaker',   label: 'Guest Speaker' },
      { id: 'mentor',    label: 'Mentor' },
      { id: 'judge',     label: 'Judge' },
    ],
  },
  { id: 'sponsors',  label: 'Sponsors' },
  { id: 'team',      label: 'Team' },
  { id: 'connect',   label: 'Connect' },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── Global Scroll Handler ────────────────────────────────────────────────────
// The scroll handler lives on the window object so it persists across re-renders
// and isn't duplicated if the Header mounts more than once.
if (!window.hackaturiScrollData) {
  window.hackaturiScrollData = { lastY: 0, handler: null, headerElement: null };
}

const createScrollHandler = () => () => {
  const y         = window.scrollY;
  const lastY     = window.hackaturiScrollData.lastY;
  const header    = window.hackaturiScrollData.headerElement;
  const app       = document.querySelector('.app');

  if (!header) return;

  const scrollingDown = y > lastY && y > 100;
  const scrollingUp   = y < lastY || y <= 100;

  // Hide the header when scrolling down past 100px; reveal when scrolling back up
  if (scrollingDown) {
    header.classList.add('hidden');
    app?.classList.add('scrolled');
  } else if (scrollingUp) {
    header.classList.remove('hidden');
    app?.classList.remove('scrolled');
  }

  window.hackaturiScrollData.lastY = y;

  // Highlight the nav button for whichever section is currently in view
  for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
    const section = document.getElementById(NAV_ITEMS[i].id);
    if (section && section.offsetTop <= y + 120) {
      header.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach((btn) =>
        btn.classList.remove('active')
      );
      header.querySelector(`[data-section="${NAV_ITEMS[i].id}"]`)?.classList.add('active');
      break;
    }
  }
};
// ─────────────────────────────────────────────────────────────────────────────

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection]         = useState('home');
  const [isVisible, setIsVisible]                 = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen]   = useState(false);
  const [isMobile, setIsMobile]                   = useState(false);
  const [openDropdown, setOpenDropdown]           = useState(null);      // desktop hover dropdown
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);   // mobile tap dropdown

  // Track whether we're on mobile to switch between nav layouts
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Register the global scroll handler once on mount
  useEffect(() => {
    if (!window.hackaturiScrollData.handler) {
      window.hackaturiScrollData.handler = createScrollHandler();
      window.addEventListener('scroll', window.hackaturiScrollData.handler);
    }
    // Cache the header DOM element for the scroll handler to use
    window.hackaturiScrollData.headerElement = document.querySelector('.site-header');
  }, []);

  // Scrolls to a section and optionally flashes it to draw the user's attention.
  // `highlight: true` is used for dropdown sub-items (e.g. jumping to a specific role card).
  const handleClick = (id, highlight = false) => {
    scrollToSection?.(id);

    if (highlight) {
      const el = document.getElementById(id);
      if (el) {
        // Remove and re-add class to restart the CSS animation
        el.classList.remove('highlight-section');
        void el.offsetWidth; // Force reflow
        el.classList.add('highlight-section');
        setTimeout(() => el.classList.remove('highlight-section'), 2000);
      }
    }

    // Reset all menu state after a nav click
    setIsVisible(true);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  return (
    <header className={`site-header ${isVisible ? '' : 'hidden'}`}>
      <div className="header-inner">

        {/* ── Desktop Navigation ──────────────────────────────────────── */}
        {!isMobile ? (
          <nav className="main-nav">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                // Nav item with hover dropdown
                <div
                  key={item.id}
                  className={`nav-item dropdown ${openDropdown === item.id ? 'open' : ''}`}
                  onMouseEnter={() => setOpenDropdown(item.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleClick(item.id)}
                    data-section={item.id}
                  >
                    <strong>{item.label}</strong>
                  </button>
                  <div className="dropdown-menu">
                    {item.dropdown.map((child) => (
                      <button
                        key={child.id}
                        className="dropdown-item"
                        onClick={() => handleClick(child.id, true)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Standard nav button
                <button
                  key={item.id}
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                  data-section={item.id}
                >
                  <strong>{item.label}</strong>
                </button>
              )
            )}
          </nav>

        ) : (
          // ── Mobile Navigation ────────────────────────────────────────
          <>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </div>
            </button>

            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  // Mobile expandable dropdown
                  <div
                    key={item.id}
                    className={`mobile-dropdown ${openMobileDropdown === item.id ? 'open' : ''}`}
                  >
                    <button
                      className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() =>
                        setOpenMobileDropdown(openMobileDropdown === item.id ? null : item.id)
                      }
                      data-section={item.id}
                    >
                      <strong>{item.label}</strong>
                    </button>
                    {openMobileDropdown === item.id && (
                      <div className="mobile-dropdown-menu">
                        {item.dropdown.map((child) => (
                          <button
                            key={child.id}
                            className="mobile-dropdown-item"
                            onClick={() => handleClick(child.id, true)}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Standard mobile nav button
                  <button
                    key={item.id}
                    className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleClick(item.id)}
                    data-section={item.id}
                  >
                    <strong>{item.label}</strong>
                  </button>
                )
              )}
            </nav>
          </>
        )}

      </div>
    </header>
  );
};

export default Header;