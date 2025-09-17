// src/pages/Schedule.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Schedule = () => {
  const scheduleData = {
    day1: {
      date: 'Saturday, March 15, 2025',
      events: [
        //TODO: Add events for day 1
        { time: '8:00 AM', event: 'Registration & Check-in', location: 'Main Lobby', type: 'registration' },
        { time: '9:00 AM', event: 'Opening Ceremony', location: 'Main Auditorium', type: 'ceremony' },
        { time: '9:30 AM', event: 'Team Formation & Ice Breakers', location: 'Main Hall', type: 'activity' },
        { time: '10:00 AM', event: 'Hacking Begins!', location: 'All Areas', type: 'activity' },
        { time: '12:00 PM', event: 'Lunch', location: 'Cafeteria', type: 'food' },
        { time: '2:00 PM', event: 'Workshop: Intro to Web Development', location: 'Room 101', type: 'workshop' },
        { time: '4:00 PM', event: 'Workshop: Mobile App Development', location: 'Room 102', type: 'workshop' },
        { time: '6:00 PM', event: 'Dinner', location: 'Cafeteria', type: 'food' },
        { time: '8:00 PM', event: 'Tech Talk: Industry Trends', location: 'Main Auditorium', type: 'talk' },
        { time: '10:00 PM', event: 'Midnight Snacks', location: 'Cafeteria', type: 'food' }
      ]
    },
    day2: {
      date: 'Sunday, March 16, 2025',
      events: [
        //TODO: Add events for day 2
        { time: '8:00 AM', event: 'Breakfast', location: 'Cafeteria', type: 'food' },
        { time: '10:00 AM', event: 'Workshop: AI & Machine Learning', location: 'Room 103', type: 'workshop' },
        { time: '12:00 PM', event: 'Lunch', location: 'Cafeteria', type: 'food' },
        { time: '1:00 PM', event: 'Project Submission Deadline', location: 'Devpost', type: 'deadline' },
        { time: '2:00 PM', event: 'Judging Begins', location: 'All Areas', type: 'judging' },
        { time: '4:30 PM', event: 'Awards Ceremony', location: 'Main Auditorium', type: 'ceremony' },
        { time: '5:00 PM', event: 'Closing Remarks', location: 'Main Hall', type: 'ceremony' },
      ]
    }
  };

  const getEventTypeColor = (type) => {
    const colors = {
      registration: '#4c9aed',
      ceremony: '#ff6b6b',
      activity: '#4ecdc4',
      food: '#96ceb4',
      workshop: '#feca57',
      talk: '#ff9ff3',
      deadline: '#ff3838',
      judging: '#ff9f43',
      networking: '#00d2d3',
    };
    return colors[type] || '#4c9aed';
  };

  const renderCalendar = (dayData, dayKey) => {
    // Create time slots from 8 AM to 11 PM
    const timeSlots = [];
    for (let hour = 8; hour <= 23; hour++) {
      const timeString = hour === 12 ? '12:00 PM' : 
                       hour > 12 ? `${hour - 12}:00 PM` : 
                       `${hour}:00 AM`;
      timeSlots.push(timeString);
    }

    // Add midnight slot for Day 2
    if (dayKey === 'day2') {
      timeSlots.unshift('12:00 AM');
    }

    return (
      <div className="calendar-column">
        <div className="calendar-header">
          <h2>{dayData.date}</h2>
        </div>
        
        <div className="calendar-grid">
          {timeSlots.map((timeSlot, index) => {
            // Find events that match this time slot
            const matchingEvents = dayData.events.filter(event => {
              const eventTime = event.time;
              const slotHour = timeSlot.includes('AM') ? 
                parseInt(timeSlot.split(':')[0]) : 
                parseInt(timeSlot.split(':')[0]) + 12;
              
              const eventHour = eventTime.includes('AM') ? 
                parseInt(eventTime.split(':')[0]) : 
                parseInt(eventTime.split(':')[0]) + 12;
              
              return eventHour === slotHour;
            });

            return (
              <div key={index} className="calendar-slot">
                <div className="time-label">{timeSlot}</div>
                <div className="events-container">
                  {matchingEvents.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="calendar-event"
                      style={{ backgroundColor: getEventTypeColor(event.type) }}
                    >
                      <div className="event-title">{event.event}</div>
                      <div className="event-location"><FaMapMarkerAlt style={{ marginRight: '6px', verticalAlign: 'middle' }} />{event.location}</div>
                      <div className="event-type-badge">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="content">
      <h1>Event Schedule</h1>
      
      <div className="schedule-columns">
        {renderCalendar(scheduleData.day1, 'day1')}
        {renderCalendar(scheduleData.day2, 'day2')}
      </div>

      <div className="schedule-legend">
        <h3>Event Types</h3>
        <div className="legend-items">
          {Object.entries({
            registration: 'Registration',
            ceremony: 'Ceremony',
            activity: 'Activity',
            food: 'Food',
            workshop: 'Workshop',
            talk: 'Tech Talk',
            deadline: 'Deadline',
            judging: 'Judging',
          }).map(([type, label]) => (
            <div key={type} className="legend-item">
              <span 
                className="legend-color" 
                style={{ backgroundColor: getEventTypeColor(type) }}
              ></span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
