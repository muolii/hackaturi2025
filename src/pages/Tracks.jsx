// src/pages/Tracks.jsx
import React, { useState } from 'react';
import { FaGlobe, FaMobileAlt, FaRobot, FaLink } from 'react-icons/fa';
import './Tracks.css';

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaGlobe />, // React icon
      color: '#4c9aed',
      description: 'Build innovative web applications using modern technologies',
      detailedDescription: 'The Web Development track focuses on creating dynamic, interactive websites and web applications. Participants will work with modern frontend frameworks like React, Vue.js, or Angular to build user interfaces, and backend technologies like Node.js, Express, or Django to create robust server-side applications. This track emphasizes responsive design, user experience, and scalable architecture. Whether you\'re building a social media platform, e-commerce site, or productivity tool, this track will help you master the full stack of web development.'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <FaMobileAlt />, // React icon
      color: '#ff6b6b',
      description: 'Create mobile apps for iOS and Android platforms',
      detailedDescription: 'The Mobile Development track is perfect for those who want to create apps that users can take with them anywhere. Participants will learn to build native iOS apps with Swift or Android apps with Kotlin, or use cross-platform frameworks like React Native and Flutter to create apps for both platforms simultaneously. This track covers mobile-specific features like push notifications, location services, camera integration, and offline functionality. From social apps to productivity tools, mobile development opens up endless possibilities for innovation.'
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: <FaRobot />, // React icon
      color: '#4ecdc4',
      description: 'Develop intelligent solutions using artificial intelligence',
      detailedDescription: 'The AI & Machine Learning track explores the cutting-edge world of artificial intelligence and data science. Participants will work with machine learning libraries like TensorFlow and PyTorch to build intelligent systems that can recognize patterns, make predictions, and automate decision-making. This track covers computer vision for image recognition, natural language processing for text analysis, and deep learning for complex problem-solving. Whether you\'re building a recommendation system, chatbot, or predictive analytics tool, AI/ML skills are increasingly valuable in today\'s tech landscape.'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      icon: <FaLink />, // React icon
      color: '#feca57',
      description: 'Build decentralized applications and blockchain solutions',
      detailedDescription: 'The Blockchain & Web3 track introduces participants to the revolutionary world of decentralized applications and cryptocurrency. Participants will learn to write smart contracts using Solidity, build decentralized applications (dApps) on Ethereum, and explore Web3 technologies that enable peer-to-peer interactions without intermediaries. This track covers DeFi (Decentralized Finance), NFTs (Non-Fungible Tokens), and the principles of blockchain technology. From creating your own cryptocurrency to building decentralized marketplaces, blockchain development represents the future of digital interactions.'
    }
  ];

  const openTrackModal = (track) => {
    setSelectedTrack(track);
  };

  const closeTrackModal = () => {
    setSelectedTrack(null);
  };

  return (
    <div className="content">
      <h1>Hackathon Tracks</h1>
      <p className="tracks-intro">
        Choose your track and build something amazing!
      </p>
      
      <div className="tracks-grid">
        {tracks.map((track) => (
          <button
            key={track.id}
            className="track-button"
            onClick={() => openTrackModal(track)}
            style={{ '--track-color': track.color }}
          >
            <div className="track-icon">{track.icon}</div>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
          </button>
        ))}
      </div>

      {selectedTrack && (
        <div className="track-modal-overlay" onClick={closeTrackModal}>
          <div className="track-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeTrackModal}>×</button>
            
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
  );
};

export default Tracks;
