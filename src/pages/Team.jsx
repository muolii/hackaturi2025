// src/pages/Team.jsx
// "Meet the Crew" section — displays team members organized by department.
// Cards flip to show additional info (major, class year, fun fact).
//
// TO ADD A TEAM MEMBER: Add an object to the appropriate department's `members`
//   array in TEAM_DATA below.
// TO ADD A DEPARTMENT: Add a new key to TEAM_DATA and a matching entry in TEAM_TABS.
// TO REMOVE A MEMBER/DEPARTMENT: Delete the corresponding object/key.
//
// Member fields:
//   name        (required)  Display name
//   avatar      (required)  Path to photo, e.g. '/images/team-photos/dept/name.jpg'
//   role        (optional)  Job title shown on card front (e.g. 'Lead', 'Co-Director')
//   major       (required)  Shown on card back
//   classYear   (required)  Shown on card back
//   funFact     (optional)  Shown on card back; leave '' to hide
//   linkedin    (optional)  LinkedIn URL; leave '' to hide the button
//   social      (optional)  GitHub or other social URL; leave '' to hide the button

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import portholeSvg from '../assets/porthole.svg';
import '../styles/shared.css';
import './Team.css';

// ─── Tab Configuration ────────────────────────────────────────────────────────
// Controls the order and labels of the department tabs.
// Each `id` must match a key in TEAM_DATA below.
const TEAM_TABS = [
  { id: 'leadership',        label: 'Leadership' },
  { id: 'techDev',           label: 'Tech Dev' },
  { id: 'marketingOutreach', label: 'Marketing & Outreach' },
  { id: 'sponsorship',       label: 'Sponsorship' },
  { id: 'finance',           label: 'Finance' },
  { id: 'logistics',         label: 'Logistics' },
  { id: 'participants',      label: 'Participant Experience' },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── Team Data ────────────────────────────────────────────────────────────────
const TEAM_DATA = {
  leadership: {
    title: 'Leadership',
    members: [
      {
        name: 'Lily Nguyen',
        avatar: '/images/team-photos/execs/lily.jpg',
        role: 'Co-Director',
        major: 'Computer Science',
        classYear: '2026',
        funFact: 'I am a twin!',
        linkedin: 'https://www.linkedin.com/in/lily-nguyen02/',
      },
      {
        name: 'Ayishat Oguntade',
        avatar: '/images/team-photos/execs/ayishat.jpg',
        role: 'Co-Director',
        major: 'Computer Science B.S',
        classYear: '2027',
        funFact: 'I have a cat named Bruno',
        linkedin: 'https://www.linkedin.com/in/ayishat-oguntade-0a8454202/',
      },
    ],
  },

  techDev: {
    title: 'Tech Dev',
    members: [
      {
        name: 'Jenny You',
        avatar: '/images/team-photos/tech/jenny.jpg',
        role: 'Lead',
        major: 'Computer Science',
        classYear: '2025',
        funFact: 'I lived in China for 5 years',
        linkedin: 'http://linkedin.com/in/j-you',
        social: 'https://github.com/muolii',
      },
      {
        name: 'Ryan Butera',
        avatar: '/images/team-photos/tech/ryan.jpg',
        role: 'Lead',
        major: 'Computer Science & Data Science',
        classYear: '2026',
        funFact: "I'm in the process of watching every Disney Channel Original Movie with my friends",
        linkedin: 'https://linkedin.com/in/ryan-butera',
        social: 'https://github.com/rbutera03',
      },
      {
        name: 'Riley Maguire',
        avatar: '/images/team-photos/tech/riley.jpg',
        major: 'Computer Science B.S.',
        classYear: '2025',
        funFact: '',
        linkedin: '',
        social: '',
      },
    ],
  },

  marketingOutreach: {
    title: 'Marketing & Outreach',
    members: [
      {
        name: 'Nathan Azevedo',
        avatar: '/images/team-photos/market/nathanazevedoheadshot.png',
        role: 'Lead',
        major: 'Computer Science B.S.',
        classYear: '2028',
        funFact: 'I make balloon animals',
        linkedin: 'https://www.linkedin.com/in/nathan-azevedo-152196372/',
      },
      {
        name: 'Lawrence Cabbabe',
        avatar: '/images/team-photos/market/lawrence.jpg',
        role: 'Lead',
        major: 'Computer Science B.S.',
        classYear: '2025',
        funFact: 'Cars 2 is a fantastic movie',
        linkedin: 'https://www.linkedin.com/in/lawrence-says-hello/',
        social: 'https://github.com/lmcprogram',
      },
      {
        name: 'Babajide Fakolujo',
        avatar: '/images/team-photos/market/jide-lead.jpg',
        role: 'Lead',
        major: 'Computer Science B.S.',
        classYear: '2028',
        funFact: '',
        linkedin: '',
        social: '',
      },
      {
        name: 'Cadije Louis',
        avatar: '/images/team-photos/market/cadije.jpg',
        major: 'Computer Science BS + Africana Studies BA',
        classYear: '2027',
        funFact: 'I have a dog named Sharkboy',
        linkedin: 'https://www.linkedin.com/in/cadije-louis',
        social: 'https://github.com/Elmo333',
      },
      {
        name: 'Roquibat Adetunji',
        avatar: '/images/team-photos/finance/roquibat.jpg',
        major: 'Computer Science',
        classYear: '2027',
        funFact: "I'm double jointed",
        linkedin: '',
        social: '',
      },
      {
        name: 'Chris Batista',
        avatar: '/images/team-photos/market/chris.jpg',
        major: 'Computer Science B.S.',
        classYear: '2028',
        funFact: "I race gokarts competitively and I'm also a photographer :)",
        linkedin: 'https://www.linkedin.com/in/chris-batista',
        social: 'https://github.com/25px',
      },
    ],
  },

  sponsorship: {
    title: 'Sponsorship',
    members: [
      {
        name: 'Meghan Andrews',
        avatar: '/images/team-photos/sponsor/meghan.jpg',
        role: 'Lead',
        major: 'Computer Science',
        classYear: '2026',
        funFact: 'I train and compete with my dogs in agility competitions',
        linkedin: 'https://www.linkedin.com/in/meghan-andrews22',
        social: 'https://github.com/mandrews12',
      },
      {
        name: 'Ethan Moreta',
        avatar: '/images/team-photos/sponsor/ethan2.jpg',
        major: 'Computer Science B.S.',
        classYear: '2026',
        funFact: "I can solve the Rubik's cube",
        linkedin: 'https://www.linkedin.com/in/ethanmoreta',
        social: 'https://github.com/EthanMoreta',
      },
      {
        name: 'Olivia Clark',
        avatar: '/images/team-photos/sponsor/liv.jpg',
        major: 'Chemical Engineering',
        classYear: '2028',
        funFact: 'My hair used to be green!',
        linkedin: '',
        social: '',
      },
      {
        name: 'Riley Maguire',
        avatar: '/images/team-photos/tech/riley.jpg',
        major: 'Computer Science B.S.',
        classYear: '2025',
        funFact: '',
        linkedin: '',
        social: '',
      },
    ],
  },

  finance: {
    title: 'Finance',
    members: [
      {
        name: 'Liam McKenzie',
        avatar: '/images/team-photos/rhody_filler_image.jpg',
        role: 'Lead',
        major: 'Computer Science',
        classYear: '2027',
        funFact: 'This is my second time doing the whole college thing. I have a completion certificate in accounting',
        linkedin: '',
        social: 'https://github.com/lmckenzie99',
      },
      {
        name: 'Damian Lapena Vidal',
        avatar: '/images/team-photos/finance/damian.jpg',
        major: 'Computer Engineering',
        classYear: '2027',
        funFact: "I'm from Spain",
        linkedin: 'https://www.linkedin.com/in/damianlapevi/',
        social: 'https://github.com/damianlapenavidal',
      },
      {
        name: 'Marvens Sainterlien',
        avatar: '/images/team-photos/finance/marvens.jpg',
        major: 'Computer Science',
        classYear: '2026',
        funFact: 'My favorite football club is Arsenal',
        linkedin: 'https://www.linkedin.com/in/marvens-sainterlien/',
        social: 'https://github.com/marvensC',
      },
      {
        name: 'Arybella Theul',
        avatar: '/images/team-photos/finance/arybella.jpg',
        major: 'Data Science B.S.',
        classYear: '2026',
        funFact: 'I love to ski',
        linkedin: 'https://www.linkedin.com/in/arybella-theul',
        social: '',
      },
      {
        name: 'Olamide Britto',
        avatar: '/images/team-photos/finance/olamide.jpg',
        major: 'Computer Science B.S.',
        classYear: '2026',
        funFact: '',
        linkedin: 'https://www.linkedin.com/in/olamide-britto',
        social: 'https://github.com/OlamideB',
      },
    ],
  },

  logistics: {
    title: 'Logistics',
    members: [
      {
        name: 'Kat Toolan',
        avatar: '/images/team-photos/logistic/kat.jpg',
        role: 'Lead',
        major: 'Computer Science B.S., Data Science B.A., Chinese',
        classYear: '2027',
        funFact: 'I am trained in archery',
        linkedin: 'https://www.linkedin.com/in/kat-toolan/',
        social: 'https://github.com/hellosmallkat',
      },
      {
        name: 'Lateefat',
        avatar: '/images/team-photos/logistic/lateefat.jpg',
        role: 'Lead',
        major: 'Supply Chain and TMD',
        classYear: '2025',
        funFact: 'I play ultimate frisbee',
        linkedin: '',
        social: '',
      },
      {
        name: 'Ilanna Langton',
        avatar: '/images/team-photos/logistic/ilanna.jpg',
        major: 'Computer Science B.S.',
        classYear: '2026',
        funFact: 'I met the Duolingo Bird!',
        linkedin: 'https://www.linkedin.com/in/ilanna-langton/',
        social: '',
      },
      {
        name: 'Olivia Clark',
        avatar: '/images/team-photos/logistic/liv.jpg',
        major: 'Chemical Engineering',
        classYear: '2028',
        funFact: 'My hair used to be green!',
        linkedin: '',
        social: '',
      },
    ],
  },

  participants: {
    title: 'Participant Experience',
    members: [
      {
        name: 'Ilanna Langton',
        avatar: '/images/team-photos/logistic/ilanna.jpg',
        role: 'Lead',
        major: 'Computer Science B.S.',
        classYear: '2026',
        funFact: 'I met the Duolingo Bird!',
        linkedin: 'https://www.linkedin.com/in/ilanna-langton/',
        social: '',
      },
      {
        name: 'Ethan Moreta',
        avatar: '/images/team-photos/sponsor/ethan2.jpg',
        role: 'Lead',
        major: 'Computer Science B.S.',
        classYear: '2026',
        funFact: "I can solve the Rubik's cube",
        linkedin: 'https://www.linkedin.com/in/ethanmoreta',
        social: 'https://github.com/EthanMoreta',
      },
      {
        name: 'Roquibat Adetunji',
        avatar: '/images/team-photos/finance/roquibat.jpg',
        major: 'Computer Science',
        classYear: '2027',
        funFact: "I'm double jointed",
        linkedin: '',
        social: '',
      },
    ],
  },
};
// ─────────────────────────────────────────────────────────────────────────────

const Team = () => {
  const [activeTab, setActiveTab]     = useState(TEAM_TABS[0].id);
  const [flippedCards, setFlippedCards] = useState({});

  // Toggles the flip state of an individual card.
  // `memberId` is a composite of tab + index to ensure uniqueness.
  const toggleCardFlip = (memberId) => {
    setFlippedCards((prev) => ({ ...prev, [memberId]: !prev[memberId] }));
  };

  return (
    <div className="pirate-team">

      {/* Decorative stars */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`team-star star-${n}`} />
      ))}

      <div className="team-content">
        <h1 className="team-title">Meet the Crew!</h1>

        {/* ── Department Tabs ──────────────────────────────────────────── */}
        <div className="team-tabs">
          {TEAM_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`team-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Member Cards Grid ────────────────────────────────────────── */}
        <div className="team-section">
          <div className="team-header">
            <h2>{TEAM_DATA[activeTab].title}</h2>
          </div>

          <div className="team-grid">
            {TEAM_DATA[activeTab].members.map((member, index) => {
              const memberId = `${activeTab}-${index}`;
              const isFlipped = flippedCards[memberId];

              return (
                <div key={memberId} className={`team-member-card ${isFlipped ? 'flipped' : ''}`}>
                  <div className="card-inner">

                    {/* Card Front: photo, name, role, social links */}
                    <div className="card-front">
                      <div className="member-avatar-container">
                        <img src={portholeSvg} alt="" className="porthole-frame" />
                        <img src={member.avatar} alt={member.name} className="member-avatar" />
                      </div>
                      <h3>{member.name}</h3>
                      {member.role && (
                        <p className="member-role">{member.role}</p>
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
                            <FaLinkedin />
                          </a>
                        )}
                        {member.social && (
                          <a
                            href={member.social}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                            title="GitHub Profile"
                          >
                            <FaGithub />
                          </a>
                        )}
                      </div>
                      <button
                        className="flip-arrow"
                        onClick={() => toggleCardFlip(memberId)}
                        title="Show more info"
                      >
                        <FaArrowRight />
                      </button>
                    </div>

                    {/* Card Back: major, class year, fun fact */}
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
                        {member.funFact && (
                          <div className="info-item">
                            <span className="info-label">Fun Fact:</span>
                            <span className="info-value">{member.funFact}</span>
                          </div>
                        )}
                      </div>
                      <button
                        className="flip-arrow back"
                        onClick={() => toggleCardFlip(memberId)}
                        title="Show less info"
                      >
                        <FaArrowRight />
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