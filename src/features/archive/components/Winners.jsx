// src/features/archive/components/Winners.jsx
// Winner grid/cards used within the archive event pages.

import React, { useState } from 'react';
import './Winners.css';

const PlaceholderImage = ({ name }) => (
  <div className="winners-img-placeholder" aria-hidden="true">
    <span>{name.charAt(0)}</span>
  </div>
);

const WinnerCard = ({ winner }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="winner-card">
      {/* ── Winner Image ────────────────────────────────────────────────── */}
      <div className="winner-card-image-wrap">
        {winner.image && !imgError ? (
          <img
            src={winner.image}
            alt={`${winner.projectName} project screenshot`}
            className="winner-card-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <PlaceholderImage name={winner.projectName} />
        )}
      </div>
      {/* ── Winner Details + Team + Devpost ────────────────────────────── */}
      <div className="winner-card-body">
        <div className="winner-card-tracks">
          {winner.tracks.map((track) => (
            <span key={track} className="winner-card-track-badge">{track}</span>
          ))}
        </div>
        <h3 className="winner-card-project-name">{winner.projectName}</h3>
        <p className="winner-card-description">{winner.description}</p>

        {/* Bottom block always sits at the end of the card */}
        <div className="winner-card-bottom">
          <div className="winner-card-team">
            <span className="winner-card-team-label">Team</span>
            <span className="winner-card-team-members">{winner.teamMembers.join(' · ')}</span>
          </div>
          <a href={winner.devpostUrl} target="_blank" rel="noopener noreferrer" className="winner-card-devpost-link">
            View on Devpost
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

const Winners = ({
  title = 'Event Winners',
  subtitle = '',
  winnersData = [],
  winnersAnnounced = true,
}) => {
  return (
    <div className="winners-section">
      {/* ── Winners Header ──────────────────────────────────────────────── */}
      <div className="winners-header">
        <p className="winners-header-eyebrow">{subtitle}</p>
        <h2 className="winners-header-title">{title}</h2>
        <div className="winners-header-line" aria-hidden="true" />
      </div>

      {/* ── Winners Content State ───────────────────────────────────────── */}
      {!winnersAnnounced ? (
        <div className="winners-tbd">
          <div className="winners-tbd-icon" aria-hidden="true">🏆</div>
          <p className="winners-tbd-text">Winners have not been announced for this event yet.</p>
        </div>
      ) : (
        <div className="winners-grid">
          {winnersData.map((winner) => (
            <WinnerCard key={winner.projectName} winner={winner} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Winners;