// src/pages/Schedule.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp, FaCalendarAlt } from 'react-icons/fa';
import starsSvg from '../assets/stars-bg.svg';
import './Schedule.css';

const Schedule = () => {
  // Single state to control visibility for BOTH days
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSchedule = () => {
    setIsExpanded(!isExpanded);
  };

  const scheduleData = {
    day1: {
      date: 'Friday, February 21, 2026',
      events: [
        { time: '8:00 AM', event: 'Check-In & Breakfast', location: 'Fascitelli Commons', type: 'hacking' },
        { time: '9:00 AM', event: 'Opening Ceremony & Mission Welcome', location: 'Common/Stage', type: 'ceremony' },
        { time: '10:00 AM', event: 'HACKING BEGINS!', location: 'All Hacking Areas', type: 'hacking', hero: true },
        { time: '10:15 AM', event: 'Team Forming Activity', location: 'Main Area', type: 'activity' },
        { time: '10:15 AM', event: 'Workshop Block A', location: 'Breakout Room 1', type: 'workshop' },
        { time: '10:15 AM', event: 'Workshop Block B', location: 'Breakout Room 2', type: 'workshop' },
        { time: '11:15 AM', event: 'Mentor Office Hours (Round 1)', location: 'Mentor Lounge', type: 'mentoring' },
        { time: '12:30 PM', event: 'LUNCH', location: 'Common', type: 'food' },
        { time: '1:30 PM', event: 'Workshop Block C', location: 'Common', type: 'workshop' },
        { time: '1:30 PM', event: 'Workshop Block D', location: 'Common', type: 'workshop' },
        { time: '2:00 PM', event: 'Cyber Activity #1', location: 'Cyber Room', type: 'activity' },
        { time: '2:30 PM', event: 'Mentor Office Hours (Round 2)', location: 'Mentor Lounge', type: 'mentoring' },
        { time: '6:00 PM', event: 'DINNER', location: 'Common', type: 'food' },
        { time: '7:00 PM', event: 'Social Activity', location: 'Main Hall', type: 'activity' },
        { time: '8:00 PM', event: 'Snacks', location: 'Common', type: 'food' },
        { time: '9:00 PM', event: 'Late Night Activity', location: 'Main Hall', type: 'activity' },
        { time: '12:00 AM', event: 'Midnight Snack', location: 'Common', type: 'food' }
      ]
    },
    day2: {
      date: 'Saturday, February 22, 2026',
      events: [
        { time: '8:00 AM', event: 'BREAKFAST', location: 'Atrium', type: 'food' },
        { time: '10:00 AM', event: 'FINAL SUBMISSIONS DUE', location: 'Online Portal', type: 'hacking', hero: true },
        { time: '10:15 AM', event: 'Pitching Workshop', location: 'Common Area', type: 'workshop' },
        { time: '11:15 AM', event: 'Pitch Practice & Feedback', location: 'Mentor Lounge', type: 'mentoring' },
        { time: '12:15 PM', event: 'LUNCH', location: 'Common/Stage', type: 'food' },
        { time: '1:30 PM', event: 'Project Expo & Judging Begins', location: 'Expo Area', type: 'hacking' },
        { time: '2:45 PM', event: 'Judging (Finalist Round)', location: 'Common/Stage', type: 'hacking' },
        { time: '4:00 PM', event: 'Closing Ceremony & Awards', location: 'Common/Stage', type: 'ceremony' }
      ]
    }
  };

  const getEventTypeColor = (type) => {
    const colors = {
      hacking: '#27AE60',
      ceremony: '#B8860B',
      food: '#A04000',
      workshop: '#1B4F72',
      activity: '#5B2C6F',
      mentoring: '#145A32',
    };
    return colors[type] || '#0C3A40'; 
  };

  const renderCalendar = (dayData, dayKey) => {
    // Both columns check the same `isExpanded` variable
    const heroEvents = dayData.events.filter(e => e.hero === true);
    const displayRows = [];
    const startHour = 8;
    const endHour = dayKey === 'day1' ? 24 : 17;

    for (let hour = startHour; hour <= endHour; hour++) {
      const displayHour = hour > 23 ? hour - 24 : hour;
      const timeString = displayHour === 0 ? '12:00 AM' :
        displayHour === 12 ? '12:00 PM' :
          displayHour > 12 ? `${displayHour - 12}:00 PM` :
            `${displayHour}:00 AM`;
      displayRows.push({ time: timeString, rawHour: hour });
    }

    return (
      <div className={`calendar-column ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
        <div 
          className="calendar-header clickable" 
          onClick={toggleSchedule}
        >
          <h2>{dayData.date}</h2>
          {/* Visual indicator that this is clickable */}
          <div className="expand-icon-mobile">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {isExpanded && (
          <div className="calendar-grid">
            {displayRows.map((row, index) => {
              const slotHeroEvents = heroEvents.filter(e => {
                const [hourPart, modifier] = e.time.split(' ');
                let eventHour = parseInt(hourPart.split(':')[0]);
                if (modifier === 'PM' && eventHour !== 12) eventHour += 12;
                if (modifier === 'AM' && eventHour === 12) eventHour = dayKey === 'day1' ? 24 : 0;
                return eventHour === row.rawHour;
              });

              const matchingEvents = dayData.events.filter(event => {
                if (event.hero === true) return false;
                const [hourPart, modifier] = event.time.split(' ');
                let eventHour = parseInt(hourPart.split(':')[0]);
                if (modifier === 'PM' && eventHour !== 12) eventHour += 12;
                if (modifier === 'AM' && eventHour === 12) eventHour = dayKey === 'day1' ? 24 : 0;
                return eventHour === row.rawHour;
              });

              return (
                <React.Fragment key={index}>
                  {slotHeroEvents.map((heroEvent, heroIdx) => (
                    <div key={`hero-${heroIdx}`} className="hacking-milestone-container">
                      <div
                        className="calendar-event hacking-hero"
                        style={{
                          backgroundColor: getEventTypeColor(heroEvent.type),
                          boxShadow: `0 10px 20px ${getEventTypeColor(heroEvent.type)}4D`
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
                    <div className="time-label">{row.time}</div>
                    <div className="events-container">
                      {matchingEvents.length > 0 ? (
                        matchingEvents.map((event, eventIndex) => (
                          <div key={eventIndex} className="calendar-event" style={{ backgroundColor: getEventTypeColor(event.type) }}>
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
                        <div className="empty-slot-text"></div>
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
    <div className="content">
      <img src={starsSvg} alt="" className="about-star star-1" />
      <img src={starsSvg} alt="" className="about-star star-2" />
      <img src={starsSvg} alt="" className="about-star star-3" />
      <img src={starsSvg} alt="" className="about-star star-4" />
      <img src={starsSvg} alt="" className="about-star star-5" />

      <h1>Event Schedule</h1>
      
      {/* Central Toggle Button */}
      <div className="toggle-container">
        <button className="schedule-toggle-btn" onClick={toggleSchedule}>
          {isExpanded ? (
            <>
              <FaChevronUp /> Hide Full Schedule
            </>
          ) : (
            <>
              <FaCalendarAlt /> View Full Schedule
            </>
          )}
        </button>
      </div>

      <div className="schedule-columns">
        {renderCalendar(scheduleData.day1, 'day1')}
        {renderCalendar(scheduleData.day2, 'day2')}
      </div>

      <div className="schedule-legend">
        <h3>Event Types</h3>
        <div className="legend-items">
          {Object.entries({
            hacking: 'Hacking',
            ceremony: 'Ceremony',
            activity: 'Activity',
            workshop: 'Workshop',
            mentoring: 'Mentoring',
            food: 'Food',
          }).map(([type, label]) => (
            <div key={type} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: getEventTypeColor(type) }}></span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;