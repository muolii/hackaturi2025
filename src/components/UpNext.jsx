// src/components/UpNext.jsx
// Reusable "Up Next" widget — shows all events scheduled at the next upcoming
// time slot (handles multiple simultaneous events). Used on the main page's
// Schedule section and can be imported anywhere.

import React, { useState, useMemo, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaHourglassHalf } from 'react-icons/fa';

import {
  SCHEDULE,
  parseEventDateTime,
  formatCountdown,
  getEventTypeColor,
} from './ScheduleData';

// ─────────────────────────────────────────────────────────────────────────────

const UpNext = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Flat list of all events with parsed Date objects
  const allEvents = useMemo(() => {
    return Object.entries(SCHEDULE).flatMap(([dayKey, dayData]) =>
      dayData.events.map((event) => ({
        ...event,
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

  return (
    <div className="next-event-section">
      <div className="next-event-card">
        <div className="next-event-label">
          <span className="pulse-icon" />
          {nextEvents.length > 1
            ? `HAPPENING NEXT — ${nextEvents.length} EVENTS AT ${nextEvents[0].time}`
            : 'HAPPENING NEXT'}
        </div>

        {/* Countdown applies to the whole batch since they share a start time */}
        <div className="countdown-display" style={{ marginBottom: '12px' }}>
          <FaHourglassHalf className="hourglass" />
          <span>
            Starts in: <strong>{formatCountdown(timeUntil)}</strong>
          </span>
        </div>

        {/* One row per concurrent event */}
        <div className="next-events-list">
          {nextEvents.map((ev, i) => (
            <div key={i} className="next-event-content" style={i > 0 ? { borderTop: '1px solid rgba(246,233,200,0.2)', paddingTop: '12px', marginTop: '12px' } : {}}>
              <div className="next-event-info">
                <h4>{ev.event}</h4>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpNext;