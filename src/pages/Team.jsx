// src/pages/Team.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

const Team = () => {
  const [activeTab, setActiveTab] = useState('leadership');
  const [flippedCards, setFlippedCards] = useState({});

  const teamData = {
    leadership: {
      title: 'Leadership',
      members: [
        //TODO: Add leadership team members
        { 
          name: 'Lily Nguyen', 
          avatar: '/images/team-photos/execs/lily.png', 
          role: 'Co-Director',
          major: 'Computer Science',
          classYear: '2026',
          funFact: 'I am a twin!',
          linkedin: 'https://www.linkedin.com/in/lily-nguyen02/'
        },
        { 
          name: 'Ayishat', 
          avatar: '/images/team-photos/execs/ayishat.jpg', 
          role: 'Co-Director',
          major: 'Computer Science',
          classYear: '2026',
          funFact: 'I am a twin!',
          linkedin: 'https://www.linkedin.com/in/lily-nguyen02/'
        }
      ]
    },
    techDev: {
      title: 'Tech Dev',
      members: [
        //TODO: Add tech dev team members
        { 
          name: 'Jenny You', 
          avatar: '/images/team-photos/tech/jenny.jpg', 
          role: 'Lead',
          major: 'Computer Science',
          classYear: '2025',
          funFact: 'I lived in China for 5 years',
          linkedin: 'http://linkedin.com/in/j-you',
          social: 'https://github.com/muolii'
        },
        { 
          name: 'Ryan Butera', 
          avatar: '/images/team-photos/tech/ryan.jpg', 
          major: 'Computer Science',
          classYear: '2026',
          funFact: 'I\'m in the process of watching every Disney Channel Original Movie with my friends',
          linkedin: 'linkedin.com/in/ryan-butera', 
          social: 'https://github.com/rbutera03' 
        },
        { 
          name: 'Kanz Giwa', 
          avatar: '/images/team-photos/tech/kanz.jpg', 
          major: 'Computer & Data Science ',
          classYear: '2026',
          funFact: 'Born and raised in Nigeria for 8 years',
          social: 'https://github.com/KanzGiwa'
        }
      ]
    },
    marketingOutreach: {
      title: 'Marketing & Outreach',
      members: [
        //TODO: Add marketing outreach team members
        { 
          name: 'Nathan Azevedo', 
          avatar: '/images/team-photos/market/nathanazevedoheadshot.png', 
          role: 'Lead',
          //TODO: Nathan major
          major: '',
          classYear: '2028',
          funFact: 'I make balloon animals',
          linkedin: 'https://www.linkedin.com/in/nathan-azevedo'
        },
        { 
          name: 'Lawrence Cabbabe', 
          //TODO: Lawrence photo
          avatar: '/images/team-photos/market/nathanazevedoheadshot.png', 
          major: '',
          classYear: '2026',
          funFact: '',
          linkedin: '',
          social: ''
        }
      ]
    },
    sponsorship: {
      title: 'Sponsorship',
      members: [
        //TODO: Add sponsorship team members
        { 
          name: 'Meghan Andrews', 
          avatar: '/images/team-photos/sponsor/meghan.jpg', 
          role: 'Lead',
          major: 'Computer Science',
          classYear: '2026',
          funFact: 'I train and compete with my dogs in agility competitions',
          linkedin: 'www.linkedin.com/in/meghan-andrews22',
          social: 'https://github.com/mandrews12'
        },
        { 
          name: 'Maya Patel', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'International Business',
          classYear: '2026',
          funFact: 'Speaks Hindi, English, and Spanish',
          linkedin: 'https://linkedin.com/in/mayapatel',
          social: 'https://instagram.com/mayapatel'
        },
        { 
          name: 'Ryan Lee', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Economics',
          classYear: '2025',
          funFact: 'Interned at Fortune 500 companies',
          linkedin: 'https://linkedin.com/in/ryanlee',
          social: 'https://github.com/ryanlee'
        }
      ]
    },
    finance: {
      title: 'Finance',
      members: [
        //TODO: Add finance team members
        { 
          name: 'Liam McKenzie', 
          //TODO: Liam image
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Lead',
          major: 'Computer Science',
          classYear: '2027',
          funFact: 'This is my second time doing the whole college thing. I have a completion certificate in accounting',
          social: 'https://github.com/lmckenzie99'
        },
        { 
          name: 'Marvens Sainterlien ', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Accounting',
          classYear: '2026',
          funFact: 'Plays competitive chess',
          linkedin: 'https://linkedin.com/in/kevinzhang',
          social: 'https://github.com/kevinzhang'
        }
      ]
    },
    logistics: {
      title: 'Logistics',
      members: [
        //TODO: Add logistics team members
        { 
          name: 'Jake Anderson', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Logistics Director',
          major: 'Operations Management',
          classYear: '2025',
          funFact: 'Organized 20+ campus events',
          linkedin: 'https://linkedin.com/in/jakeanderson',
          social: 'https://twitter.com/jakeanderson'
        },
        { 
          name: 'Nina Rodriguez', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Event Planning',
          classYear: '2026',
          funFact: 'Has perfect attendance record',
          linkedin: 'https://linkedin.com/in/ninarodriguez',
          social: 'https://instagram.com/ninarodriguez'
        },
        { 
          name: 'Ben Thompson', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Supply Chain Management',
          classYear: '2025',
          funFact: 'Manages inventory for student organizations',
          linkedin: 'https://linkedin.com/in/benthompson',
          social: 'https://github.com/benthompson'
        },
        { 
          name: 'Zoe Clark', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Hospitality Management',
          classYear: '2026',
          funFact: 'Works part-time at event venues',
          linkedin: 'https://linkedin.com/in/zoeclark',
          social: 'https://instagram.com/zoeclark'
        }
      ]
    }
  };

  const tabs = [
    { id: 'leadership', label: 'Leadership' },
    { id: 'techDev', label: 'Tech Dev' },
    { id: 'marketingOutreach', label: 'Marketing & Outreach' },
    { id: 'sponsorship', label: 'Sponsorship' },
    { id: 'finance', label: 'Finance' },
    { id: 'logistics', label: 'Logistics' }
  ];

  const toggleCardFlip = (memberId) => {
    setFlippedCards(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  return (
    <div className="content">
      <h1>Our Team</h1>
      
      <div className="team-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`team-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="team-section">
        <div className="team-header">
          <h2>{teamData[activeTab].title}</h2>
        </div>
        
        <div className="team-grid">
          {teamData[activeTab].members.map((member, index) => {
            const memberId = `${activeTab}-${index}`;
            const isFlipped = flippedCards[memberId];
            
            return (
              <div key={index} className={`team-member-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-inner">
                  {/* Front of card */}
                  <div className="card-front">
                    <div className="member-avatar-container">
                      <img src={member.avatar} alt={member.name} className="member-avatar" />
                    </div>
                    <h3>{member.name}</h3>
                    {(member.role) && (
                      <p className="member-role">
                        {member.role || 'Team Lead'}
                      </p>
                    )}
                    <div className="social-buttons">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-btn linkedin-btn"
                          title="LinkedIn Profile"
                        >
                          <FaLinkedin style={{ color: '#fff', background: 'none', border: 'none', boxShadow: 'none' }} />
                        </a>
                      )}
                      {member.social && (
                        <a 
                          href={member.social} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-btn social-btn"
                          title="GitHub Profile"
                        >
                          <FaGithub style={{ color: '#fff', background: 'none', border: 'none', boxShadow: 'none' }} />
                        </a>
                      )}
                    </div>
                    <button 
                      className="flip-arrow" 
                      onClick={() => toggleCardFlip(memberId)}
                      title="Show more info"
                    >
                      <FaArrowRight style={{ color: '#fff', background: 'none', border: 'none' }} />
                    </button>
                  </div>
                  
                  {/* Back of card */}
                  <div className="card-back">
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <div className="info-item">
                        <span className="info-label">Major:</span>
                        <span className="info-value">{member.major}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Class Year:</span>
                        <span className="info-value">{member.classYear}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Fun Fact:</span>
                        <span className="info-value">{member.funFact}</span>
                      </div>
                    </div>
                    <button 
                      className="flip-arrow back" 
                      onClick={() => toggleCardFlip(memberId)}
                      title="Show less info"
                    >
                      <FaArrowRight style={{ color: '#fff', background: 'none', border: 'none' }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
