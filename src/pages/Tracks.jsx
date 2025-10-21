// src/pages/Tracks.jsx
import React from 'react';
import { FaHeartbeat, FaBrain, FaAnchor, FaPalette, FaUsers } from 'react-icons/fa';
import { GiWaterSplash } from "react-icons/gi";
import starsSvg from '../assets/stars-bg.svg';
import './Tracks.css';

const Tracks = () => {


  const tracks = [
    {
      id: 'hack-to-health',
      title: 'Hack to Health',
      icon: <FaHeartbeat />, 
      color: '#0C3A40', 
      description: 'Technology for better care and well-being',
      detailedDescription: 'Build solutions that improve patient outcomes and streamline health services. Create wearables for health monitoring, telemedicine platforms for underserved communities, accessibility apps, or health data dashboards.'
    },
    {
      id: 'neural-tide',
      title: 'Neural Tide',
      icon: <FaBrain />, 
      color: '#2f2520', 
      description: 'Ride the next wave of artificial intelligence',
      detailedDescription: 'Apply AI and machine learning to solve real-world problems. Build AI tools for small businesses, generative art and music platforms, computer vision for environmental monitoring, or chatbots for student support.'
    },
    {
      id: 'oceans-edge',
      title: 'Ocean\'s Edge Ventures',
      icon: <FaAnchor />, 
      color: '#0C3A40', 
      description: 'Build tools to help ideas and businesses set sail',
      detailedDescription: 'Build tech for entrepreneurship and business growth. Create platforms connecting small businesses to customers, financial literacy apps, e-commerce solutions, or market analysis dashboards.'
    },
    {
      id: 'creative-currents',
      title: 'Creative Currents / Lumina',
      icon: <FaPalette />, 
      color: '#8B4513', 
      description: 'Shining light on creative, expressive, interactive tech',
      detailedDescription: 'Fuse art, design, and technology to push creative boundaries. Build interactive art installations, generative music platforms, AR/VR experiences, or accessibility tools for creative expression. Welcomes all majors beyond "just code."'
    },
    {
      id: 'tide-turners',
      title: 'TideTurners / RISE UP',
      icon: <FaUsers />, 
      color: '#0a4e4e',
      description: 'Hack for civic innovation and community impact',
      detailedDescription: 'Build for community impact and civic innovation. Create apps for public transportation, sustainability tools, civic engagement platforms, or IoT solutions for energy efficiency.'
    },
    {
      id: 'splashzone',
      title: 'SplashZone',
      icon: <GiWaterSplash />, 
      color: '#2f2520', 
      description: 'Make your first splash into hacking and exploration',
      detailedDescription: 'Perfect for first-time hackers and coding beginners. Build your first website or mobile app, create simple games, experiment with beginner-friendly AI tools, or try anything experimental and fun. Focus on learning, creativity, and growth rather than pressure.'
    }
  ];


  return (
    <div className="pirate-tracks">
      {/* Random scattered stars */}
      <img src={starsSvg} alt="" className="tracks-star star-1" />
      <img src={starsSvg} alt="" className="tracks-star star-2" />
      <img src={starsSvg} alt="" className="tracks-star star-3" />
      <img src={starsSvg} alt="" className="tracks-star star-4" />
      <img src={starsSvg} alt="" className="tracks-star star-5" />
      
      <div className="tracks-content">
        <h1 className="tracks-title">Hackathon Tracks</h1>
        <p className="tracks-intro">
          Choose your track and build something amazing!
        </p>
        
        <div className="tracks-grid">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="track-card"
              style={{ '--track-color': track.color }}
            >
              <div className="track-header">
                <div className="track-icon">{track.icon}</div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-subtitle">{track.description}</p>
              </div>
              <div className="track-content">
                <p className="track-description">{track.detailedDescription}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tracks;
