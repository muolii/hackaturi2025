import React, { useEffect, useState } from "react";
import './Countdown.css';

const Countdown = () => {
  // Update this to your real event time (use local timezone or append Z for UTC)
  const EVENT_ISO = "2026-02-21T09:00:00"; 

  const [remaining, setRemaining] = useState(msUntil(EVENT_ISO));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const tick = () => {
      const ms = msUntil(EVENT_ISO);
      setRemaining(ms);
      if (ms <= 0) setFinished(true);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (finished) {
    return (
      <div className="countdown-wrap" aria-live="polite">
        <div style={{padding: '18px 24px', color: '#F9E9C0', fontWeight: 800}}>
          🏴‍☠️ The adventure has begun!
        </div>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = breakdown(remaining);

  return (
    <div className="countdown-wrap" role="timer" aria-live="polite">
      <div className="cd-seg">
        <div className="cd-num">{String(days)}</div>
        <div className="cd-label">Days</div>
      </div>

      <div className="cd-sepcolon">:</div>

      <div className="cd-seg">
        <div className="cd-num">{String(hours).padStart(2, '0')}</div>
        <div className="cd-label">Hours</div>
      </div>

      <div className="cd-sepcolon">:</div>

      <div className="cd-seg">
        <div className="cd-num">{String(minutes).padStart(2, '0')}</div>
        <div className="cd-label">Minutes</div>
      </div>

      <div className="cd-sepcolon">:</div>

      <div className="cd-seg">
        <div className="cd-num">{String(seconds).padStart(2, '0')}</div>
        <div className="cd-label">Sec</div>
      </div>
    </div>
  );
};

function msUntil(iso) {
  const now = new Date().getTime();
  const then = new Date(iso).getTime();
  return Math.max(0, then - now);
}

function breakdown(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);
  return { days, hours, minutes, seconds };
}

export default Countdown;
