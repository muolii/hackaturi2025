// src/pages/Home.jsx
import React from 'react';
import image from '../assets/logo.png'; // Adjust the path as necessary
import CountdownTimer from '../components/Countdown.jsx';
import './Home.css';

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="leftContent">
          <div className="browser-window">
            <div className="browser-header">
              <div className="browser-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
            </div>
            <div className="browser-content">
              <img src={image} width="300" alt="Hack@URI Logo" />
            </div>
          </div>
        </div>
        <div className="rightContent">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Home;
