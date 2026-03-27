// src/components/ScheduleCalendar.jsx
// Shared two-column calendar grid with legend and workshop modal.
// Used by both Schedule.jsx (main page inline) and SchedulePage.jsx (overlay).

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SCHEDULE, getEventTypeColor, getSpeakerByTitle } from './ScheduleData';
import WorkshopModal from './WorkshopModal';

const CLICKABLE_TYPES = ['workshop', 'beginner', 'cyber'];

const LEGEND_ENTRIES = {
  hacking:  'Hacking',
  ceremony: 'Ceremony',
  activity: 'Activity',
  cyber:    'Cyber',
  beginner: 'Beginner Workshop',
  workshop: 'Workshop',
  mentoring:'Mentoring',
  food:     'Food',
};

const ScheduleCalendar = () => {
  const [isExpanded, setIsExpanded]       = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event, dayLabel) => {
    if (!CLICKABLE_TYPES.includes(event.type)) return;
    if (!getSpeakerByTitle(event.event)) return;
    setSelectedEvent({ ...event, day: dayLabel });
  };

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
                        regularEvents.map((event, eventIndex) => {
                          const isClickable = CLICKABLE_TYPES.includes(event.type) && getSpeakerByTitle(event.event);
                          return (
                            <div
                              key={eventIndex}
                              className={`calendar-event${isClickable ? ' is-clickable' : ''}`}
                              style={{ backgroundColor: getEventTypeColor(event.type) }}
                              onClick={() => handleEventClick(event, dayData.date)}
                              title={isClickable ? 'Click for speaker details' : undefined}
                            >
                              <div className="event-title">
                                {event.event}
                                {isClickable && <span className="event-click-hint">👤</span>}
                              </div>
                              <div className="event-location">
                                <FaClock style={{ marginRight: '6px' }} />{event.time}
                                <span style={{ margin: '0 8px' }}>|</span>
                                <FaMapMarkerAlt style={{ marginRight: '6px' }} />{event.location}
                              </div>
                              <div className="event-type-badge">{event.type}</div>
                            </div>
                          );
                        })
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
    <>
      {/* Legend */}
      <div className="schedule-legend">
        <h3>Event Types</h3>
        <div className="legend-items">
          {Object.entries(LEGEND_ENTRIES).map(([type, label]) => (
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

      {/* Workshop / Speaker modal */}
      {selectedEvent && (
        <WorkshopModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default ScheduleCalendar;