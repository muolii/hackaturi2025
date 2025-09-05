import React, { useState, useEffect } from "react";
import './countdown.css';

const CountdownTimer = () => {
    // Set your hackathon date here - update this to your actual event date
    const HACKATHON_DATE = "2026-03-15T09:00:00"; // Example: March 15, 2026 at 9:00 AM
    const EVENT_NAME = "Hack@URI 2026";
    
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const eventTime = new Date(HACKATHON_DATE).getTime();
            let remainingTime = eventTime - currentTime;

            if (remainingTime <= 0) {
                remainingTime = 0;
                setIsComplete(true);
            }

            setTimeRemaining(remainingTime);
        };

        // Update immediately
        updateCountdown();
        
        // Then update every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    const formatTime = (time) => {
        if (isComplete) {
            return (
                <div className="countdown-complete">
                    🎉 The hackathon has begun! 🎉
                </div>
            );
        }

        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
            <div className="countdown-display">
                <div className="countdown-unit">
                    <div className="countdown-number-container">
                        <span className="countdown-number">{days}</span>
                        <div className="countdown-glow"></div>
                    </div>
                    <span className="countdown-label">days</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-unit">
                    <div className="countdown-number-container">
                        <span className="countdown-number">{hours.toString().padStart(2, "0")}</span>
                        <div className="countdown-glow"></div>
                    </div>
                    <span className="countdown-label">hours</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-unit">
                    <div className="countdown-number-container">
                        <span className="countdown-number">{minutes.toString().padStart(2, "0")}</span>
                        <div className="countdown-glow"></div>
                    </div>
                    <span className="countdown-label">minutes</span>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-unit">
                    <div className="countdown-number-container">
                        <span className="countdown-number">{seconds.toString().padStart(2, "0")}</span>
                        <div className="countdown-glow"></div>
                    </div>
                    <span className="countdown-label">seconds</span>
                </div>
            </div>
        );
    };

    const formatDate = () => {
        const eventDate = new Date(HACKATHON_DATE);
        
        const options = { 
            month: 'long', 
            day: 'numeric'
        };
        
        const firstDay = eventDate.toLocaleDateString("en-US", options);
        const secondDay = eventDate.getDate() + 1;
        const year = eventDate.getFullYear();
        
        return `${firstDay}-${secondDay}, ${year}`;
    };

    return (
        <div className="hackathon-countdown">
            <div className="countdown-content">
                <div className="countdown-text">
                    <div className="countdown-announcement">
                        <span className="event-name">{EVENT_NAME}</span>
                        <span className="event-date">{formatDate()}</span>
                    </div>
                </div>
                <div className="countdown-timer">
                    <div className="countdown-wrapper">
                        {formatTime(timeRemaining)}
                    </div>
                </div>
                <div className="countdown-action">
                    <button className="register-button" onClick={() => {
                        // Replace this with your actual registration logic
                        alert('Registration coming soon!');
                        // Example: window.location.href = '/register';
                    }}>
                        Register Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;