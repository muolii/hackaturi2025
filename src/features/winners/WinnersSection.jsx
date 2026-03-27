import React, { useState } from 'react';
import './WinnersSection.css';

const WINNERS_ANNOUNCED = true;
const SECTION_TITLE = 'Winners';
const SECTION_SUBTITLE = 'Hack@URI 2026';

const WINNERS_DATA = [
  {
    projectName: 'NeuroNav',
    teamMembers: ['Alex Chen', 'Priya Sharma', 'Jordan Williams', 'Sam Lee'],
    description: 'An AI-powered navigation assistant that adapts in real time for users with cognitive disabilities, using gaze tracking and voice input to reroute based on stress signals.',
    tracks: ['🏆 Best Overall', '🧠 Health & Accessibility Track'],
    image: '',
    devpostUrl: 'https://devpost.com/software/example',
  },
  {
    projectName: 'GreenGrid',
    teamMembers: ['Taylor Brooks', 'Morgan Davis'],
    description: 'A distributed energy marketplace where neighbors can trade excess solar power using smart contracts, reducing grid strain and carbon output in dense neighborhoods.',
    tracks: ['🌿 Sustainability Track', '⚡ Best Use of Blockchain'],
    image: '',
    devpostUrl: 'https://devpost.com/software/example',
  },
  {
    projectName: 'PocketMentor',
    teamMembers: ['Riley Kim', 'Casey Nguyen', 'Drew Patel'],
    description: "A micro-learning platform that delivers 3-minute skill modules matched to a student's calendar gaps, helping underserved high schoolers access career coaching on the go.",
    tracks: ['📚 Education Track', '🎓 Best Social Impact'],
    image: '',
    devpostUrl: 'https://devpost.com/software/example',
  },
  {
    projectName: 'MapMyMeds',
    teamMembers: ['Avery Johnson', 'Quinn Torres'],
    description: 'A real-time medication availability map that aggregates pharmacy stock data via crowdsourcing and public APIs, helping patients find critical prescriptions faster.',
    tracks: ['💊 Health Track', '🔍 Best Use of Open Data'],
    image: '',
    devpostUrl: 'https://devpost.com/software/example',
  },
];

const PlaceholderImage = ({ name }) => (
  <div className="winners-img-placeholder" aria-hidden="true">
    <span>{name.charAt(0)}</span>
  </div>
);

const WinnerCard = ({ winner, isFirst }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <article className={`winner-card ${isFirst ? 'winner-card--grand' : ''}`}>
      {isFirst && <div className="winner-card__crown" aria-hidden="true">👑</div>}
      <div className="winner-card__image-wrap">
        {winner.image && !imgError ? (
          <img src={winner.image} alt={`${winner.projectName} project screenshot`} className="winner-card__image" onError={() => setImgError(true)} />
        ) : (
          <PlaceholderImage name={winner.projectName} />
        )}
      </div>
      <div className="winner-card__body">
        <div className="winner-card__tracks">
          {winner.tracks.map((track) => (
            <span key={track} className="winner-card__track-badge">{track}</span>
          ))}
        </div>
        <h3 className="winner-card__project-name">{winner.projectName}</h3>
        <p className="winner-card__description">{winner.description}</p>
        <div className="winner-card__team">
          <span className="winner-card__team-label">Team</span>
          <span className="winner-card__team-members">{winner.teamMembers.join(' · ')}</span>
        </div>
        <a href={winner.devpostUrl} target="_blank" rel="noopener noreferrer" className="winner-card__devpost-link">
          View on Devpost
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

const WinnersSection = () => {
  return (
    <div className="winners-section">
      <div className="winners-header">
        <p className="winners-header__eyebrow">{SECTION_SUBTITLE}</p>
        <h2 className="winners-header__title">{SECTION_TITLE}</h2>
        <div className="winners-header__line" aria-hidden="true" />
      </div>
      {!WINNERS_ANNOUNCED ? (
        <div className="winners-tbd">
          <div className="winners-tbd__icon" aria-hidden="true">🏆</div>
          <p className="winners-tbd__text">Winners will be announced after the event!</p>
        </div>
      ) : (
        <div className="winners-grid">
          {WINNERS_DATA.map((winner, index) => (
            <WinnerCard key={winner.projectName} winner={winner} isFirst={index === 0} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WinnersSection;

