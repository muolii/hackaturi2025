// src/pages/Home.jsx
import React from 'react';
import image from '../assets/logo.png'; // Adjust the path as necessary
import CountdownTimer from '../components/Countdown.jsx';

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="leftContent">
          <img src={image} width="300" alt="URI Ram" />
        </div>
        <div className="rightContent">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Home;
