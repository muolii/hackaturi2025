// src/pages/Tracks.jsx
import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaBrain, FaAnchor, FaPalette, FaUsers } from 'react-icons/fa';
import { GiWaterSplash } from "react-icons/gi";
import starsSvg from '../assets/stars-bg.svg';
import './Tracks.css';

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  // Prevent body scroll and dim all elements when modal is open
  useEffect(() => {
    if (selectedTrack) {
      // Store current scroll position before adding modal-open class
      const currentScrollY = window.scrollY;

      document.body.classList.add('modal-open');
      // Restore scroll position after modal-open class is applied
      document.body.style.top = `-${currentScrollY}px`;

      // Hide wave element and header when modal is open
      const appElement = document.querySelector('.app');
      if (appElement) {
        appElement.classList.add('scrolled');
      }

      const headerElement = document.querySelector('.site-header');
      if (headerElement) {
        headerElement.classList.add('hidden');
      }
    } else {
      // Restore scroll position when closing modal
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }

      // Only show header and wave if scroll position is at top (<=100px)
      // Otherwise keep them hidden to match the global scroll handler behavior
      const currentScrollY = window.scrollY;
      const shouldShowHeader = currentScrollY <= 100;

      const appElement = document.querySelector('.app');
      if (appElement) {
        if (shouldShowHeader) {
          appElement.classList.remove('scrolled');
        }
      }

      const headerElement = document.querySelector('.site-header');
      if (headerElement) {
        if (shouldShowHeader) {
          headerElement.classList.remove('hidden');
        }
      }
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }

      // Only show header and wave if scroll position is at top (<=100px)
      const currentScrollY = window.scrollY;
      const shouldShowHeader = currentScrollY <= 100;

      const appElement = document.querySelector('.app');
      if (appElement) {
        if (shouldShowHeader) {
          appElement.classList.remove('scrolled');
        }
      }
      const headerElement = document.querySelector('.site-header');
      if (headerElement) {
        if (shouldShowHeader) {
          headerElement.classList.remove('hidden');
        }
      }
    };
  }, [selectedTrack]);


  const tracks = [
    {
      id: 'hack-to-health',
      title: 'Hack to Health',
      icon: <FaHeartbeat />, 
      color: '#0C3A40', 
      description: 'Technology for better care and well-being',
      detailedDescription: 'Focus on solutions that improve patient outcomes, reduce barriers to care, or streamline health services. Build wearables that monitor sleep or stress levels, telemedicine platforms designed for rural or underserved RI communities, accessibility apps for people with disabilities, or data dashboards for tracking and predicting community health trends. This track connects directly to URI\'s strong health sciences and nursing programs, plus local healthcare industry connections in Providence.'
    },
    {
      id: 'neural-tide',
      title: 'Neural Tide',
      icon: <FaBrain />, 
      color: '#2f2520', 
      description: 'Ride the next wave of artificial intelligence',
      detailedDescription: 'Make AI real, useful, and ethical. Build projects that apply machine learning and AI to solve real-world problems in any domain including health, environment, business, or art. Create AI tools for small businesses to manage inventory or marketing, generative AI for music or art creation, computer vision for coastal/environmental monitoring, or chatbots that support student mental health or academic advising. This track taps into URI\'s growing interest in AI/ML and RI\'s expanding AI community through Breakthrough Tech AI, Brown, MIT, and local startups.'
    },
    {
      id: 'oceans-edge',
      title: 'Ocean\'s Edge Ventures',
      icon: <FaAnchor />, 
      color: '#0C3A40', 
      description: 'Build tools to help ideas and businesses set sail',
      detailedDescription: 'Build tech for entrepreneurship and business resilience. Create tools that help small businesses, startups, and local entrepreneurs grow and thrive. Develop platforms for connecting small businesses to customers, apps for financial literacy and budgeting, streamlined systems for e-commerce or payment security, or market analysis dashboards powered by open data. This track leverages URI\'s strong College of Business presence and Rhode Island\'s entrepreneurial ecosystem including Venture Café and Innovation Studio.'
    },
    {
      id: 'creative-currents',
      title: 'Creative Currents / Lumina',
      icon: <FaPalette />, 
      color: '#8B4513', 
      description: 'Shining light on creative, expressive, interactive tech',
      detailedDescription: 'Express ideas through creative technology. Fuse art, design, and tech to push the boundaries of creativity. Build interactive art installations with sensors, generative music platforms that blend music and code, AR/VR experiences that tell stories or explore culture, or accessibility-focused tools for creative expression. This track celebrates URI\'s arts & design programs, music programs, and welcomes students who want hackathons to feel inclusive beyond "just code."'
    },
    {
      id: 'tide-turners',
      title: 'TideTurners / RISE UP',
      icon: <FaUsers />, 
      color: '#0a4e4e',
      description: 'Hack for civic innovation and community impact',
      detailedDescription: 'Build for community impact and civic innovation. Create projects aimed at solving local urban and social challenges. Develop apps to improve public transportation in Providence, sustainability tools for reducing waste on campus, platforms for civic engagement and voting access, or IoT solutions for energy efficiency and safety. This track connects directly to RI\'s urban centers including Providence, Pawtucket, and Newport, and supports the state\'s push for sustainable, equitable development.'
    },
    {
      id: 'splashzone',
      title: 'SplashZone',
      icon: <GiWaterSplash />, 
      color: '#2f2520', 
      description: 'Make your first splash into hacking and exploration',
      detailedDescription: 'Learn, explore, and build your first project. Perfect for students new to hackathons or coding—the focus is on learning, creativity, and having fun. Build your first website or mobile app, create a simple game or quiz app, experiment with beginner-friendly AI tools (no-code or low-code), or try anything experimental and fun. This track encourages inclusivity for all majors, especially first-time hackers, putting the emphasis on growth rather than pressure.'
    }
  ];

  const openTrackModal = (track, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Hide header immediately when opening modal
    const headerElement = document.querySelector('.site-header');
    if (headerElement) {
      headerElement.classList.add('hidden');
    }

    const appElement = document.querySelector('.app');
    if (appElement) {
      appElement.classList.add('scrolled');
    }

    setSelectedTrack(track);
  };

  const closeTrackModal = () => {
    setSelectedTrack(null);
  };

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
              className="track-button"
              onClick={(e) => openTrackModal(track, e)}
              style={{ '--track-color': track.color }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openTrackModal(track, e);
                }
              }}
            >
              <div className="track-icon">{track.icon}</div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          ))}
        </div>

        {selectedTrack && (
          <div className="track-modal-overlay" onClick={closeTrackModal}>
            <div className="track-modal" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close" onClick={closeTrackModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-icon">{selectedTrack.icon}</div>
                <h2>{selectedTrack.title}</h2>
                <p className="modal-description">{selectedTrack.description}</p>
              </div>

              <div className="modal-content">
                <div className="modal-section">
                  <p className="track-description">{selectedTrack.detailedDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracks;
