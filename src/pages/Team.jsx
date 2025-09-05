// src/pages/Team.jsx
import React, { useState } from 'react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const teamData = {
    leadership: {
      title: 'Leadership',
      members: [
        //TODO: Add leadership team members
        { name: 'John Doe', role: 'President', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Jane Smith', role: 'Vice President', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Mike Johnson', role: 'Secretary', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
      ]
    },
    techDev: {
      title: 'Tech Dev',
      members: [
        //TODO: Add tech dev team members
        { name: 'Alex Chen', role: 'Lead Developer', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Sarah Wilson', role: 'Frontend Developer', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'David Kim', role: 'Backend Developer', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Emma Davis', role: 'DevOps Engineer', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
      ]
    },
    marketingOutreach: {
      title: 'Marketing & Outreach',
      members: [
        //TODO: Add marketing outreach team members
        { name: 'Lisa Brown', role: 'Marketing Director', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Tom Wilson', role: 'Social Media Manager', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Rachel Green', role: 'Content Creator', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
      ]
    },
    sponsorship: {
      title: 'Sponsorship',
      members: [
        //TODO: Add sponsorship team members
        { name: 'Chris Taylor', role: 'Sponsorship Director', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Maya Patel', role: 'Partnership Manager', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Ryan Lee', role: 'Corporate Relations', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
      ]
    },
    finance: {
      title: 'Finance',
      members: [
        //TODO: Add finance team members
        { name: 'Amanda White', role: 'Treasurer', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Kevin Zhang', role: 'Budget Analyst', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Sophie Martin', role: 'Financial Coordinator', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
      ]
    },
    logistics: {
      title: 'Logistics',
      members: [
        //TODO: Add logistics team members
        { name: 'Jake Anderson', role: 'Logistics Director', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Nina Rodriguez', role: 'Event Coordinator', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Ben Thompson', role: 'Operations Manager', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' },
        { name: 'Zoe Clark', role: 'Venue Coordinator', avatar: 'https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1' }
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
          {teamData[activeTab].members.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.avatar} alt={member.name} className="member-avatar" />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
