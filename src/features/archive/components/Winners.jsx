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
      <div className="winner-card__image-wrap">
        {winner.image && !imgError ? (
          <img
            src={winner.image}
            alt={`${winner.projectName} project screenshot`}
            className="winner-card__image"
            onError={() => setImgError(true)}
          />
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

        {/* Bottom block always sits at the end of the card */}
        <div className="winner-card__bottom">
          <div className="winner-card__team">
            <span className="winner-card__team-label">Team</span>
            <span className="winner-card__team-members">{winner.teamMembers.join(' · ')}</span>
          </div>
          <a href={winner.devpostUrl} target="_blank" rel="noopener noreferrer" className="winner-card__devpost-link">
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
      <div className="winners-header">
        <p className="winners-header__eyebrow">{subtitle}</p>
        <h2 className="winners-header__title">{title}</h2>
        <div className="winners-header__line" aria-hidden="true" />
      </div>

      {!winnersAnnounced ? (
        <div className="winners-tbd">
          <div className="winners-tbd__icon" aria-hidden="true">🏆</div>
          <p className="winners-tbd__text">Winners have not been announced for this event yet.</p>
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