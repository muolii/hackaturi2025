// src/components/Header.jsx
import React from 'react';
import image from '../assets/logo.png'; // Adjust the path as necessary

const Header = ({ currentPage, setCurrentPage }) => {
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <div className="header">
      <div className="container">
        <a onClick={() => setCurrentPage('home')} className="logo-link">
          <img src={image} alt="Logo" width="100" />
        </a>
        <nav>
          {navigationItems.map((item) => (
            <a
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={currentPage === item.id ? 'active' : ''}
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
