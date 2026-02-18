// src/components/WorkshopModal.jsx
// Displays speaker bio, photo, and workshop description when a user clicks
// on a workshop or beginner-track event card in the schedule.
//
// Props:
//   event    — the event object from SCHEDULE (with .event, .time, .location, .type, .day)
//   onClose  — callback to close the modal

import React, { useEffect } from 'react';
import { FaTimes, FaMapMarkerAlt, FaClock, FaMicrophone, FaScroll } from 'react-icons/fa';
import { getSpeakerByTitle, getEventTypeColor } from './ScheduleData';
import './WorkshopModal.css';

const WorkshopModal = ({ event, onClose }) => {
  const speaker = getSpeakerByTitle(event?.event);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!event) return null;

  const typeColor = getEventTypeColor(event.type);
  const typeLabel = event.type === 'beginner' ? 'Beginner Workshop' : 'Workshop';

  return (
    <div className="wm-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="wm-modal" role="dialog" aria-modal="true" aria-label={event.event}>

        {/* ── Header bar ───────────────────────────────────────────────── */}
        <div className="wm-header" style={{ '--accent': typeColor }}>
          <div className="wm-header-left">
            <span className="wm-type-pill" style={{ background: typeColor }}>
              {typeLabel}
            </span>
            <h2 className="wm-title">{event.event}</h2>
            <div className="wm-meta">
              <span><FaClock /> {event.day} · {event.time}</span>
              <span><FaMapMarkerAlt /> {event.location}</span>
            </div>
          </div>
          <button className="wm-close" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div className="wm-body">

          {speaker ? (
            <>
              {/* Speaker section */}
              <section className="wm-section">
                <h3 className="wm-section-heading">
                  <FaMicrophone className="wm-section-icon" style={{ color: typeColor }} />
                  Speaker
                </h3>

                <div className="wm-speaker-card">
                  <div className="wm-headshot-wrap">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="wm-headshot"
                      onError={(e) => {
                        // Fallback to initials avatar if image missing
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="wm-headshot-fallback"
                      style={{ background: typeColor, display: 'none' }}
                    >
                      {speaker.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>

                  <div className="wm-speaker-info">
                    <p className="wm-speaker-name">{speaker.name}</p>
                    <p className="wm-speaker-role">{speaker.role}</p>
                    <p className="wm-speaker-company">{speaker.company}</p>
                    <p className="wm-speaker-bio">{speaker.bio}</p>
                  </div>
                </div>
              </section>

              <div className="wm-divider" />

              {/* Workshop overview section */}
              <section className="wm-section">
                <h3 className="wm-section-heading">
                  <FaScroll className="wm-section-icon" style={{ color: typeColor }} />
                  Workshop Overview
                </h3>
                <p className="wm-description">{speaker.description}</p>
              </section>
            </>
          ) : (
            // No speaker data found — show a minimal fallback
            <section className="wm-section">
              <p className="wm-description">
                Details for this session will be posted soon. Check back before the event!
              </p>
            </section>
          )}
        </div>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <div className="wm-footer">
          <button className="wm-close-btn" onClick={onClose} style={{ '--accent': typeColor }}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default WorkshopModal;