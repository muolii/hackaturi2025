// src/pages/Home.jsx
import React from 'react';
import image from '../assets/ram.png'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="leftContent">
          <img src={image} width="300" alt="URI Ram" />
        </div>
        <div className="rightContent">
          <h1>Welcome to Hack@URI 2025!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
