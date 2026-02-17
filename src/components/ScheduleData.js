// src/components/scheduleData.js
// Single source of truth for schedule data, shared between UpNext.jsx and SchedulePage.jsx.
// Update schedule events here — changes automatically reflect in both places.

// ─── Event Type Colors ────────────────────────────────────────────────────────
export const EVENT_TYPE_COLORS = {
  hacking:  '#27AE60',
  ceremony: '#C0392B',
  food:     '#5B2C6F',
  workshop: '#1B4F72',
  activity: '#B8860B',
  mentoring:'#145A32',
  cyber:    '#117A65',
  beginner: '#3b8ec5',
};

export const getEventTypeColor = (type) => EVENT_TYPE_COLORS[type] || '#0C3A40';

// ─── Schedule Data ────────────────────────────────────────────────────────────
export const SCHEDULE = {
  day1: {
    date: 'Saturday, February 21, 2026',
    events: [
      { time: '8:00 AM',  event: 'Check-In',                          location: 'Fascitelli Commons',                  type: 'hacking' },
      { time: '8:00 AM',  event: 'BREAKFAST',                         location: 'Fascitelli Commons',                  type: 'food' },
      { time: '9:00 AM',  event: 'Opening Ceremony & Mission Welcome', location: 'Common/Stage | Overflow to ENG 010C', type: 'ceremony' },
      { time: '10:00 AM', event: 'HACKING BEGINS!',                   location: 'All Hacking Areas',                   type: 'hacking', hero: true },
      { time: '10:00 AM', event: 'Cyber Capture the Flag (CTF) Kickoff', location: 'ENGR 045C',                        type: 'cyber' },
      { time: '10:00 AM', event: 'Advanced Software Engineering with AI', location: 'ENGR 025C',                       type: 'workshop' },
      { time: '10:05 AM', event: 'Team Forming Activity',             location: 'ENGR 040C',                           type: 'activity' },
      { time: '10:30 AM', event: 'Hacking with GitHub Copilot',       location: 'ENGR 010C',                           type: 'beginner' },
      { time: '11:15 AM', event: 'C2PA - Embrace Authenticity of Digital Content', location: 'ENGR 045C',             type: 'cyber' },
      { time: '11:15 AM', event: 'Intro to Vibe Coding for Non-Developer', location: 'ENGR 010C',                     type: 'beginner' },
      { time: '11:15 AM', event: 'Nvidia Supercomputers in AI Software Engineering', location: 'ENGR 025C',           type: 'workshop' },
      { time: '11:15 AM', event: 'Mentor Office Hours (Round 1)',     location: 'Mentor Lounge',                       type: 'mentoring' },
      { time: '12:00 PM', event: 'LUNCH',                             location: 'Fascitelli Commons',                  type: 'food' },
      { time: '1:00 PM',  event: 'Generative Art and Pen Plotting',   location: 'ENGR 025C',                           type: 'workshop' },
      { time: '1:15 PM',  event: 'Day in the life of a Cyber Threat Intelligence Analyst', location: 'ENGR 045C',    type: 'cyber' },
      { time: '1:15 PM',  event: 'Contributing to Open Source with MergeFund', location: 'ENGR 010C',                type: 'beginner' },
      { time: '2:00 PM',  event: 'Cyber Activity #1',                 location: 'ENGR 045C',                           type: 'cyber' },
      { time: '2:00 PM',  event: 'Dog Visit!',                        location: 'Engineering Cafe',                    type: 'activity' },
      { time: '2:30 PM',  event: 'Graduate Studies in Computer Science/Cybersecurity', location: 'ENGR 045C',        type: 'cyber' },
      { time: '2:30 PM',  event: 'FactSet: Flexible Data Solutions for Investment Decision Making', location: 'ENGR 010C', type: 'beginner' },
      { time: '2:30 PM',  event: 'Cloud Native Digital Transformation', location: 'ENGR 025C',                        type: 'workshop' },
      { time: '2:30 PM',  event: 'Mentor Office Hours (Round 2)',     location: 'Mentor Lounge',                       type: 'mentoring' },
      { time: '3:00 PM',  event: 'Typeracer Tournament',              location: 'Lounge/Commons',                      type: 'activity' },
      { time: '3:15 PM',  event: 'Git: The Hard Way',                 location: 'ENGR 010C',                           type: 'workshop' },
      { time: '3:30 PM',  event: 'From Hackathon Project to Internship: Thinking Like a Project Manager', location: 'ENGR 025C', type: 'beginner' },
      { time: '4:00 PM',  event: 'Experiment with Google AI Studio',  location: 'ENGR 010C',                           type: 'beginner' },
      { time: '4:15 PM',  event: 'Hacking Interfaces and Human Perception', location: 'ENGR 045C',                   type: 'cyber' },
      { time: '4:15 PM',  event: 'From Classroom to Industry: Exploring Model-Based Design with Simulink', location: 'ENGR 025C', type: 'workshop' },
      { time: '5:00 PM',  event: 'DINNER',                            location: 'Fascitelli Commons',                  type: 'food' },
      { time: '6:00 PM',  event: 'Guardians of the Model: Defending Against Prompt Injection and Adversarial AI', location: 'ENGR 045C', type: 'cyber' },
      { time: '6:00 PM',  event: 'From Code to Production: Why CI/CD is Essential for Modern Developers', location: 'ENGR 010C', type: 'workshop' },
      { time: '6:30 PM',  event: 'Breaking Into Tech Consulting: What No One Tells You', location: 'ENGR 025C',      type: 'beginner' },
      { time: '7:30 PM',  event: 'TechTogether Meetup',               location: 'Fascitelli Commons | MLH Help Desk', type: 'beginner' },
      { time: '7:30 PM',  event: 'From Idea to Impact: Solving Real World Problems with Digital Companions', location: 'ENGR 025C', type: 'workshop' },
      { time: '8:30 PM',  event: "Fireside Chat: How'd We Get Here?", location: 'Fascitelli Commons',                  type: 'beginner' },
      { time: '9:00 PM',  event: 'Snacks',                            location: 'Fascitelli Commons',                  type: 'food' },
      { time: '9:15 PM',  event: 'Skribbl.io',                        location: 'ENGR 040C',                           type: 'activity' },
      { time: '12:00 AM', event: 'Midnight Snack',                    location: 'Fascitelli Commons',                  type: 'food' },
      { time: '12:00 AM', event: 'Super Smash Bros',                  location: 'ENGR 040C',                           type: 'activity' },
    ],
  },
  day2: {
    date: 'Sunday, February 22, 2026',
    events: [
      { time: '8:00 AM',  event: 'BREAKFAST',                         location: 'Atrium',                              type: 'food' },
      { time: '11:00 AM', event: 'FINAL SUBMISSIONS DUE',             location: 'DevPost (Online)',                     type: 'hacking', hero: true },
      { time: '11:15 AM', event: 'Pitching Workshop: How to Tell Your Story & Demo Effectively', location: 'ENGR 025C', type: 'beginner' },
      { time: '12:00 PM', event: 'LUNCH',                             location: 'Fascitelli Commons',                  type: 'food' },
      { time: '12:15 PM', event: 'Pitch Practice & Feedback',         location: 'Mentor Lounge',                       type: 'mentoring' },
      { time: '1:30 PM',  event: 'Project Expo & Judging Begins',     location: 'Expo Area',                           type: 'hacking' },
      { time: '2:45 PM',  event: 'Judging (Finalist Round)',          location: 'Common/Stage',                        type: 'hacking' },
      { time: '4:00 PM',  event: 'Closing Ceremony & Awards',         location: 'Common/Stage',                        type: 'ceremony' },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Parses "8:00 AM" + a date string into a JS Date. day1 midnight = hour 24.
export const parseEventDateTime = (dateStr, timeStr, dayKey) => {
  const [timePart, modifier] = timeStr.split(' ');
  let hour = parseInt(timePart.split(':')[0]);
  if (modifier === 'PM' && hour !== 12) hour += 12;
  if (modifier === 'AM' && hour === 12) hour = dayKey === 'day1' ? 24 : 0;
  const base = new Date(dateStr);
  base.setHours(hour, parseInt(timePart.split(':')[1]), 0, 0);
  return base;
};

// Formats a countdown ms value into "Xd XXh XXm XXs"
export const formatCountdown = (diff) => {
  if (diff <= 0) return '00:00:00';
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  parts.push(`${hours.toString().padStart(2, '0')}h`);
  parts.push(`${mins.toString().padStart(2, '0')}m`);
  parts.push(`${secs.toString().padStart(2, '0')}s`);
  return parts.join(' ');
};