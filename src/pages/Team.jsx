// src/pages/Team.jsx
import React, { useState } from 'react';

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
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Director',
          major: 'Computer Science',
          classYear: 'Fall 2025',
          funFact: 'I\'m a Twin and I\'m From Vietnam',
          linkedin: 'https://linkedin.com/in/johndoe',
          social: 'https://twitter.com/johndoe'
        },
        { 
          name: 'Jane Smith', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Vice President',
          major: 'Business Administration',
          classYear: '2026',
          funFact: 'Has visited 15 countries',
          linkedin: 'https://linkedin.com/in/janesmith',
          social: 'https://instagram.com/janesmith'
        },
        { 
          name: 'Mike Johnson', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Secretary',
          major: 'Engineering',
          classYear: '2025',
          funFact: 'Plays guitar in a local band',
          linkedin: 'https://linkedin.com/in/mikejohnson',
          social: 'https://github.com/mikejohnson'
        }
      ]
    },
    techDev: {
      title: 'Tech Dev',
      members: [
        //TODO: Add tech dev team members
        { 
          name: 'Alex Chen', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Lead Developer',
          major: 'Computer Science',
          classYear: '2025',
          funFact: 'Built their first website at age 12',
          linkedin: 'https://linkedin.com/in/alexchen',
          social: 'https://github.com/alexchen'
        },
        { 
          name: 'Sarah Wilson', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Software Engineering',
          classYear: '2026',
          funFact: 'Loves hiking and photography',
          linkedin: 'https://linkedin.com/in/sarahwilson',
          social: 'https://instagram.com/sarahwilson'
        },
        { 
          name: 'David Kim', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Data Science',
          classYear: '2025',
          funFact: 'Speaks 4 languages fluently',
          linkedin: 'https://linkedin.com/in/davidkim',
          social: 'https://twitter.com/davidkim'
        },
        { 
          name: 'Emma Davis', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Cybersecurity',
          classYear: '2026',
          funFact: 'Competes in cybersecurity competitions',
          linkedin: 'https://linkedin.com/in/emmadavis',
          social: 'https://github.com/emmadavis'
        }
      ]
    },
    marketingOutreach: {
      title: 'Marketing & Outreach',
      members: [
        //TODO: Add marketing outreach team members
        { 
          name: 'Lisa Brown', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Marketing Director',
          major: 'Marketing',
          classYear: '2025',
          funFact: 'Runs a successful Instagram with 10K+ followers',
          linkedin: 'https://linkedin.com/in/lisabrown',
          social: 'https://instagram.com/lisabrown'
        },
        { 
          name: 'Tom Wilson', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Communications',
          classYear: '2026',
          funFact: 'Hosts a weekly podcast about tech trends',
          linkedin: 'https://linkedin.com/in/tomwilson',
          social: 'https://twitter.com/tomwilson'
        },
        { 
          name: 'Rachel Green', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Graphic Design',
          classYear: '2025',
          funFact: 'Creates digital art in her spare time',
          linkedin: 'https://linkedin.com/in/rachelgreen',
          social: 'https://dribbble.com/rachelgreen'
        }
      ]
    },
    sponsorship: {
      title: 'Sponsorship',
      members: [
        //TODO: Add sponsorship team members
        { 
          name: 'Chris Taylor', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Sponsorship Director',
          major: 'Business Administration',
          classYear: '2025',
          funFact: 'Has secured over $50K in sponsorships',
          linkedin: 'https://linkedin.com/in/christaylor',
          social: 'https://twitter.com/christaylor'
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
          name: 'Amanda White', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          role: 'Treasurer',
          major: 'Finance',
          classYear: '2025',
          funFact: 'Certified in financial modeling',
          linkedin: 'https://linkedin.com/in/amandawhite',
          social: 'https://twitter.com/amandawhite'
        },
        { 
          name: 'Kevin Zhang', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Accounting',
          classYear: '2026',
          funFact: 'Plays competitive chess',
          linkedin: 'https://linkedin.com/in/kevinzhang',
          social: 'https://github.com/kevinzhang'
        },
        { 
          name: 'Sophie Martin', 
          avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1', 
          major: 'Mathematics',
          classYear: '2025',
          funFact: 'Volunteers as a math tutor',
          linkedin: 'https://linkedin.com/in/sophiemartin',
          social: 'https://instagram.com/sophiemartin'
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
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-btn linkedin-btn"
                        title="LinkedIn Profile"
                      >
                        <span>💼</span>
                      </a>
                      <a 
                        href={member.social} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-btn social-btn"
                        title="Social Media Profile"
                      >
                        <span>📱</span>
                      </a>
                    </div>
                    <button 
                      className="flip-arrow" 
                      onClick={() => toggleCardFlip(memberId)}
                      title="Click to see more info"
                    >
                      ⬇️
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
                      title="Click to go back"
                    >
                      ⬆️
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
