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
import { ARCHIVE_NAV_ITEMS } from '../../archive/data/events/index.js';
import '../../../shared/styles/shared.css';
import './Header.css';

// ─── Navigation Config ────────────────────────────────────────────────────────
// Each item needs an `id` (matching the section's HTML element ID) and a `label`.
// Items with a `dropdown` array render as a hover menu on desktop / tap-to-expand on mobile.
// Dropdown item IDs can be subsection anchors within the parent section.
const NAV_ITEMS = [
  { id: 'home',      label: 'Home' },
  /*{ id: 'about',     label: 'About' },*/
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
  {
    id: 'archive',
    label: 'Archive',
    dropdown: ARCHIVE_NAV_ITEMS,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const Header = ({ scrollToSection, scrollContainerRef, scrollRootElement }) => {
  const isArchiveNav = Boolean(scrollContainerRef);
  const [activeSection, setActiveSection] = useState(() => (isArchiveNav ? 'archive' : 'home'));
  const [isVisible, setIsVisible]                 = useState(true);
  /** Scroll-hide must be React state — re-renders (e.g. archive carousel) would drop classList-only "hidden". */
  const [scrollHidden, setScrollHidden]           = useState(false);
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

  useEffect(() => {
    if (isArchiveNav) {
      setActiveSection('archive');
    }
  }, [isArchiveNav]);

  // Auto-hide header + active nav: window on main page; overlay element on archive
  useEffect(() => {
    if (isArchiveNav && scrollRootElement == null) {
      return undefined;
    }

    const scrollRoot = isArchiveNav
      ? (scrollRootElement ?? scrollContainerRef?.current ?? window)
      : window;
    const app = document.querySelector('.app');
    const overlayEl =
      scrollRoot !== window && scrollRoot instanceof HTMLElement ? scrollRoot : null;

    let lastY = scrollRoot === window ? window.scrollY : scrollRoot.scrollTop;

    const onScroll = () => {
      const y = scrollRoot === window ? window.scrollY : scrollRoot.scrollTop;

      const scrollingDown = y > lastY && y > 100;
      const scrollingUp = y < lastY || y <= 100;

      if (scrollingDown) {
        setScrollHidden(true);
        if (scrollRoot === window) {
          app?.classList.add('scrolled');
        } else {
          overlayEl?.classList.add('archive-scrolled');
        }
      } else if (scrollingUp) {
        setScrollHidden(false);
        if (scrollRoot === window) {
          app?.classList.remove('scrolled');
        } else {
          overlayEl?.classList.remove('archive-scrolled');
        }
      }

      lastY = y;

      if (scrollRoot === window) {
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const section = document.getElementById(NAV_ITEMS[i].id);
          if (section && section.offsetTop <= y + 120) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    scrollRoot.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => scrollRoot.removeEventListener('scroll', onScroll);
  }, [isArchiveNav, scrollRootElement, scrollContainerRef]);

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
    setScrollHidden(false);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const openArchive = (hash) => {
    const targetHash = hash.startsWith('#') ? hash : `#${hash}`;
    window.location.hash = targetHash.replace(/^##/, '#');

    setIsVisible(true);
    setScrollHidden(false);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  return (
    <header className={`site-header ${!isVisible || scrollHidden ? 'hidden' : ''}`}>
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
                        onClick={() =>
                          child.id.startsWith('#archive-')
                            ? openArchive(child.id)
                            : handleClick(child.id, true)
                        }
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
                            onClick={() =>
                              child.id.startsWith('#archive-')
                                ? openArchive(child.id)
                                : handleClick(child.id, true)
                            }
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