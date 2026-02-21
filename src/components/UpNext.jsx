// src/components/UpNext.jsx
// Reusable "Up Next" widget — shows events happening right now and events
// scheduled at the next upcoming time slot (handles multiple simultaneous events).
//
// Workshop and beginner events with speaker data are clickable and open
// the WorkshopModal for speaker bio + session description.

import React, { useState, useMemo, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaHourglassHalf } from 'react-icons/fa';

import {
  SCHEDULE,
  parseEventDateTime,
  formatCountdown,
  formatEndTime,
  getEventTypeColor,
  getSpeakerByTitle,
} from './ScheduleData';
import WorkshopModal from './WorkshopModal';

const CLICKABLE_TYPES = ['workshop', 'beginner', 'cyber'];

const UpNext = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Flat list of all events with parsed start + end Date objects
  const allEvents = useMemo(() => {
    return Object.entries(SCHEDULE).flatMap(([dayKey, dayData]) =>
      dayData.events.map((event) => {
        const startDate = parseEventDateTime(dayData.date, event.time, dayKey);
        const endDate   = event.duration
          ? new Date(startDate.getTime() + event.duration * 60 * 1000)
          : startDate;
        return { ...event, day: dayData.date, dateTime: startDate, endDateTime: endDate };
      })
    );
  }, []);

  // Events whose window overlaps right now (started but not yet ended)
  const nowEvents = useMemo(() => {
    return allEvents.filter(
      (e) => e.dateTime <= currentTime && e.endDateTime > currentTime && e.duration > 0
    );
  }, [allEvents, currentTime]);

  // The next batch: earliest future start time, all events at that same time
  const nextEvents = useMemo(() => {
    const upcoming = allEvents.filter((e) => e.dateTime > currentTime);
    if (upcoming.length === 0) return [];
    const earliest = upcoming[0].dateTime.getTime();
    return upcoming.filter((e) => e.dateTime.getTime() === earliest);
  }, [allEvents, currentTime]);

  const timeUntil = nextEvents.length > 0 ? nextEvents[0].dateTime - currentTime : 0;

  const handleEventClick = (ev) => {
    if (!CLICKABLE_TYPES.includes(ev.type)) return;
    if (!getSpeakerByTitle(ev.event)) return;
    setSelectedEvent(ev);
  };

  if (nowEvents.length === 0 && nextEvents.length === 0) return null;

  return (
    <>
      <div className="next-event-section">
        <div className="next-event-card">

          {/* ── Happening Now ─────────────────────────────────────────── */}
          {nowEvents.length > 0 && (
            <>
              <div className="next-event-label now-label">
                <span className="pulse-icon pulse-icon--green" />
                {nowEvents.length > 1
                  ? `HAPPENING NOW — ${nowEvents.length} EVENTS`
                  : 'HAPPENING NOW'}
              </div>

              <div className="next-events-list">
                {nowEvents.map((ev, i) => {
                  const isClickable = CLICKABLE_TYPES.includes(ev.type) && getSpeakerByTitle(ev.event);
                  const endTime = formatEndTime(ev.dateTime, ev.duration);
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
                          <span><FaClock /> {ev.time}{endTime ? ` – ${endTime}` : ''}</span>
                          <span><FaMapMarkerAlt /> {ev.location}</span>
                        </div>
                      </div>
                      <div className="next-event-right-col">
                        <div className="next-event-type" style={{ backgroundColor: getEventTypeColor(ev.type) }}>
                          {ev.type}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider between sections */}
              {nextEvents.length > 0 && (
                <div className="upnext-section-divider" />
              )}
            </>
          )}

          {/* ── Up Next ───────────────────────────────────────────────── */}
          {nextEvents.length > 0 && (
            <>
              <div className="next-event-label">
                <span className="pulse-icon" />
                {nextEvents.length > 1
                  ? `UP NEXT — ${nextEvents.length} EVENTS AT ${nextEvents[0].time}`
                  : 'UP NEXT'}
              </div>

              <div className="countdown-display" style={{ marginBottom: '12px' }}>
                <FaHourglassHalf className="hourglass" />
                <span>Starts in: <strong>{formatCountdown(timeUntil)}</strong></span>
              </div>

              <div className="next-events-list">
                {nextEvents.map((ev, i) => {
                  const isClickable = CLICKABLE_TYPES.includes(ev.type) && getSpeakerByTitle(ev.event);
                  const endTime = formatEndTime(ev.dateTime, ev.duration);
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
                          <span><FaClock /> {ev.time}{endTime ? ` – ${endTime}` : ''}</span>
                          <span><FaMapMarkerAlt /> {ev.location}</span>
                        </div>
                      </div>
                      <div className="next-event-right-col">
                        <div className="next-event-type" style={{ backgroundColor: getEventTypeColor(ev.type) }}>
                          {ev.type}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

        </div>
      </div>

      {selectedEvent && (
        <WorkshopModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
};

export default UpNext;