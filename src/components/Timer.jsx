import React, { useState, useEffect } from 'react';

// Timer component receives duration in seconds and a callback when time is up
const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        // If time is up, call the callback and stop
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        // Set up a timer to decrement every second
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // Cleanup interval on unmount or update
        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="timer" style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '10px 0' }}>
            Time Left: {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;
