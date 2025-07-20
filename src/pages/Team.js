import React from 'react';

const Team = ({ setCurrentPage }) => {
  return (
    <div className="content">
      <h1>[Team Title]</h1>
      <ul>
        <li>[Team Member 1 - Role]</li>
        <li>[Team Member 2 - Role]</li>
      </ul>
      <a onClick={() => setCurrentPage('home')} className="back-link">
        Back to Home
      </a>
    </div>
  );
};

export default Team;