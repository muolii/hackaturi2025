// src/pages/SchedulePage.jsx
// Full-page schedule view with the two-column calendar and legend.
// Opened by App.jsx when window.location.hash === 'full-schedule'.
// The "Up Next" widget is intentionally omitted here since it lives on the main page.

import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaArrowLeft,
} from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import {
  SCHEDULE,
  EVENT_TYPE_COLORS,
  getEventTypeColor,
} from '../components/ScheduleData';
import '../styles/shared.css';
import './Schedule.css';
import './SchedulePage.css';

const SchedulePage = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Checks if a given event falls in a raw hour slot
  const eventMatchesHour = (event, rawHour, dayKey) => {
    const [timePart, modifier] = event.time.split(' ');
    let h = parseInt(timePart.split(':')[0]);
    if (modifier === 'PM' && h !== 12) h += 12;
    if (modifier === 'AM' && h === 12) h = dayKey === 'day1' ? 24 : 0;
    return h === rawHour;
  };

  const renderCalendar = (dayData, dayKey) => {
    const heroEvents = dayData.events.filter((e) => e.hero === true);
    const startHour  = 8;
    const endHour    = dayKey === 'day1' ? 24 : 17;

    const hourRows = Array.from({ length: endHour - startHour + 1 }, (_, i) => {
      const rawHour     = startHour + i;
      const displayHour = rawHour > 23 ? rawHour - 24 : rawHour;
      const label =
        displayHour === 0  ? '12:00 AM' :
        displayHour === 12 ? '12:00 PM' :
        displayHour > 12   ? `${displayHour - 12}:00 PM` :
                             `${displayHour}:00 AM`;
      return { label, rawHour };
    });

    return (
      <div key={dayKey} className={`calendar-column ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
        <div className="calendar-header clickable" onClick={() => setIsExpanded((v) => !v)}>
          <h2>{dayData.date}</h2>
          <div className="expand-icon-mobile">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {isExpanded && (
          <div className="calendar-grid">
            {hourRows.map((row, index) => {
              const slotHeroEvents = heroEvents.filter((e) =>
                eventMatchesHour(e, row.rawHour, dayKey)
              );
              const regularEvents = dayData.events.filter(
                (e) => !e.hero && eventMatchesHour(e, row.rawHour, dayKey)
              );

              return (
                <React.Fragment key={index}>
                  {slotHeroEvents.map((heroEvent, heroIdx) => (
                    <div key={`hero-${heroIdx}`} className="hacking-milestone-container">
                      <div
                        className="calendar-event hacking-hero"
                        style={{
                          backgroundColor: getEventTypeColor(heroEvent.type),
                          boxShadow: `0 10px 20px ${getEventTypeColor(heroEvent.type)}4D`,
                        }}
                      >
                        <div className="event-title">{heroEvent.event}</div>
                        <div className="event-location">
                          <FaClock style={{ marginRight: '6px' }} />{heroEvent.time}
                          <span style={{ margin: '0 8px' }}>|</span>
                          <FaMapMarkerAlt style={{ marginRight: '6px' }} />{heroEvent.location}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="calendar-slot">
                    <div className="time-label">{row.label}</div>
                    <div className="events-container">
                      {regularEvents.length > 0 ? (
                        regularEvents.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="calendar-event"
                            style={{ backgroundColor: getEventTypeColor(event.type) }}
                          >
                            <div className="event-title">{event.event}</div>
                            <div className="event-location">
                              <FaClock style={{ marginRight: '6px' }} />{event.time}
                              <span style={{ margin: '0 8px' }}>|</span>
                              <FaMapMarkerAlt style={{ marginRight: '6px' }} />{event.location}
                            </div>
                            <div className="event-type-badge">{event.type}</div>
                          </div>
                        ))
                      ) : (
                        <div className="empty-slot-text" />
                      )}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="schedule-page-overlay">
      <div className="schedule-page-inner content">

        {/* Back button */}
        <button className="schedule-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        {/* Decorative stars */}
        {[1, 2, 3, 4, 5].map((n) => (
          <img key={n} src={starsSvg} alt="" className={`about-star star-${n}`} />
        ))}

        <h1>Event Schedule</h1>

        {/* Legend */}
        <div className="schedule-legend">
          <h3>Event Types</h3>
          <div className="legend-items">
            {Object.entries({
              hacking:  'Hacking',
              ceremony: 'Ceremony',
              activity: 'Activity',
              cyber:    'Cyber',
              beginner: 'Beginner Workshop',
              workshop: 'Workshop',
              mentoring:'Mentoring',
              food:     'Food',
            }).map(([type, label]) => (
              <div key={type} className="legend-item">
                <span className="legend-color" style={{ backgroundColor: getEventTypeColor(type) }} />
                <span className="legend-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-column calendar */}
        <div className="schedule-columns">
          {Object.entries(SCHEDULE).map(([dayKey, dayData]) =>
            renderCalendar(dayData, dayKey)
          )}
        </div>

      </div>
    </div>
  );
};

export default SchedulePage;