// src/pages/Team.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import portholeSvg from '../assets/porthole.svg';
import './Team.css';

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
          name: 'Ayishat Oguntade', 
          avatar: '/images/team-photos/execs/ayishat.jpg', 
          role: 'Co-Director',
          major: 'Computer Science B.S',
          classYear: '2027',
          funFact: 'I have a cat named Bruno',
          linkedin: 'https://www.linkedin.com/in/ayishat-oguntade-0a8454202/'
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
          avatar: '/images/team-photos/rhody_filler_image.jpg', 
          major: 'Computer Science',
          classYear: '2025',
          funFact: 'Cars 2 is a fantastic movie',
          linkedin: 'https://www.linkedin.com/in/lawrence-says-hello/',
          social: 'https://github.com/lmcprogram'
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
          name: 'Anjolaoluwa (Anjola) Fapohunda', 
          avatar: '/images/team-photos/sponsor/anojola.jpg', 
          role: '',
          major: 'Computer Science',
          classYear: '2026',
          funFact: 'I\'ve learnt to speak 5 languages',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Bitanya', 
          avatar: '/images/team-photos/sponsor/bitanya.jpg', 
          role: '',
          major: '',
          classYear: '2026',
          funFact: '',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Olivia Clark', 
          avatar: '/images/team-photos/sponsor/liv.jpg', 
          role: '',
          major: 'Chemical Engineering',
          classYear: '2028',
          funFact: 'My hair used to be green!',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Terrell Osborne', 
          avatar: '/images/team-photos/sponsor/terrell.jpg', 
          role: '',
          major: 'Computer Science',
          classYear: '2028',
          funFact: 'I broke my wrist playing duck duck goose',
          linkedin: '',
          social: 'https://github.com/Marooncoloredchair'
        },
      ]
    },
    finance: {
      title: 'Finance',
      members: [
        { 
          name: 'Arybella Theul', 
          avatar: '/images/team-photos/finance/arybella.jpg', 
          role: '',
          major: 'Data Science',
          classYear: '2026',
          funFact: 'I love to ski',
          linkedin: 'https://www.linkedin.com/in/arybella-theul',
          social: ''
        },
        { 
          name: 'Damian', 
          avatar: '/images/team-photos/finance/damian.jpg', 
          role: '',
          major: 'Computer Engineering',
          classYear: '2027',
          funFact: 'I\'m from Spain.',
          linkedin: 'https://www.linkedin.com/in/damianlapevi/',
          social: 'https://github.com/damianlapenavidal'
        },
        { 
          name: 'Olamide', 
          avatar: '/images/team-photos/finance/olamide.jpg', 
          role: '',
          major: 'Finance',
          classYear: '2026',
          funFact: 'I\'m from Nigeria',
          linkedin: 'http://www.linkedin.com/in/olamide-britto',
          social: 'https://github.com/OlamideB'
        },
        { 
          name: 'Roquibat Adetunji', 
          avatar: '/images/team-photos/finance/roquibat.jpg', 
          role: '',
          major: '',
          classYear: '2027',
          funFact: 'I\'m double jointed',
          linkedin: '',
          social: ''
        }
      ]
    },
    logistics: {
      title: 'Logistics',
      members: [
        //TODO: Add logistics team members
        { 
          name: 'Jack', 
          avatar: '/images/team-photos/logistic/jack.png', 
          role: '',
          major: '',
          classYear: '',
          funFact: '',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Lateefat', 
          avatar: '/images/team-photos/logistic/lateefat.jpg', 
          role: '',
          major: '',
          classYear: '',
          funFact: '',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Olivia Clark', 
          avatar: '/images/team-photos/logistic/liv.jpg', 
          role: '',
          major: 'Chemical Engineering',
          classYear: '2028',
          funFact: 'My hair used to be green!',
          linkedin: '',
          social: ''
        },
        { 
          name: 'Zuni Perez', 
          avatar: '/images/team-photos/logistic/zuni.jpg', 
          role: '',
          major: 'Chemistry & Chemical Engineering',
          classYear: '2028',
          funFact: '',
          linkedin: 'https://www.linkedin.com/in/zuni-perez/',
          social: ''
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
    <div className="pirate-team">
      {/* Animated stars */}
      <img src={starsSvg} alt="" className="team-star star-1" />
      <img src={starsSvg} alt="" className="team-star star-2" />
      <img src={starsSvg} alt="" className="team-star star-3" />
      <img src={starsSvg} alt="" className="team-star star-4" />
      <img src={starsSvg} alt="" className="team-star star-5" />

      <div className="team-content">
        <h1 className="team-title">Meet the Crew!</h1>
      
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
                      <img src={portholeSvg} alt="Porthole Frame" className="porthole-frame" />
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
    </div>
  );
};

export default Team;
