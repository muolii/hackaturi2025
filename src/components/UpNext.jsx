// src/components/UpNext.jsx
// Reusable "Up Next" widget — shows all events scheduled at the next upcoming
// time slot (handles multiple simultaneous events). Used on the main page's
// Schedule section and can be imported anywhere.
//
// Workshop and beginner events with speaker data are clickable and open
// the WorkshopModal for speaker bio + session description.

import React, { useState, useMemo, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaHourglassHalf } from 'react-icons/fa';

import {
  SCHEDULE,
  parseEventDateTime,
  formatCountdown,
  getEventTypeColor,
  getSpeakerByTitle,
} from './ScheduleData';
import WorkshopModal from './WorkshopModal';

// Types that can open the speaker modal
const CLICKABLE_TYPES = ['workshop', 'beginner', 'cyber'];

const UpNext = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Flat list of all events with parsed Date objects, tagged with their day label
  const allEvents = useMemo(() => {
    return Object.entries(SCHEDULE).flatMap(([dayKey, dayData]) =>
      dayData.events.map((event) => ({
        ...event,
        day: dayData.date,
        dateTime: parseEventDateTime(dayData.date, event.time, dayKey),
      }))
    );
  }, []);

  // Find the earliest upcoming time, then collect ALL events at that time
  const nextEvents = useMemo(() => {
    const upcoming = allEvents.filter((e) => e.dateTime > currentTime);
    if (upcoming.length === 0) return [];
    const earliest = upcoming[0].dateTime.getTime();
    return upcoming.filter((e) => e.dateTime.getTime() === earliest);
  }, [allEvents, currentTime]);

  if (nextEvents.length === 0) return null;

  const timeUntil = nextEvents[0].dateTime - currentTime;

  const handleEventClick = (ev) => {
    if (!CLICKABLE_TYPES.includes(ev.type)) return;
    if (!getSpeakerByTitle(ev.event)) return;
    setSelectedEvent(ev);
  };

  return (
    <>
      <div className="next-event-section">
        <div className="next-event-card">
          <div className="next-event-label">
            <span className="pulse-icon" />
            {nextEvents.length > 1
              ? `HAPPENING NEXT — ${nextEvents.length} EVENTS AT ${nextEvents[0].time}`
              : 'HAPPENING NEXT'}
          </div>

          {/* Shared countdown for the whole batch */}
          <div className="countdown-display" style={{ marginBottom: '12px' }}>
            <FaHourglassHalf className="hourglass" />
            <span>
              Starts in: <strong>{formatCountdown(timeUntil)}</strong>
            </span>
          </div>

          {/* One row per concurrent event */}
          <div className="next-events-list">
            {nextEvents.map((ev, i) => {
              const isClickable = CLICKABLE_TYPES.includes(ev.type) && getSpeakerByTitle(ev.event);
              return (
                <div
                  key={i}
                  className={`next-event-content${isClickable ? ' upnext-clickable' : ''}`}
                  style={i > 0 ? { borderTop: '1px solid rgba(246,233,200,0.2)', paddingTop: '12px', marginTop: '12px' } : {}}
                  onClick={() => handleEventClick(ev)}
                  title={isClickable ? 'Click for speaker details' : undefined}
                >
                  <div className="next-event-info">
                    <h4>
                      {ev.event}
                      {isClickable && <span className="upnext-click-hint">👤</span>}
                    </h4>
                    <div className="next-event-details">
                      <span><FaClock /> {ev.time}</span>
                      <span><FaMapMarkerAlt /> {ev.location}</span>
                    </div>
                  </div>
                  <div className="next-event-right-col">
                    <div
                      className="next-event-type"
                      style={{ backgroundColor: getEventTypeColor(ev.type) }}
                    >
                      {ev.type}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Speaker modal */}
      {selectedEvent && (
        <WorkshopModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default UpNext;