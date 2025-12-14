import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LevelSelect.css';

const LevelSelect = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const [level, setLevel] = useState('Medium');
    const [time, setTime] = useState(10); // Default 10 minutes

    const handleStartQuiz = () => {
        // Pass selected settings to the quiz page via state
        navigate(`/quiz/${topicId}`, { state: { level, time: time * 60 } }); // time in seconds
    };

    return (
        <div className="level-container">
            <h2>Quiz Settings for {topicId.toUpperCase()}</h2>

            <div className="setting-group">
                <h3>Select Difficulty Level</h3>
                <div className="options-row">
                    {['Easy', 'Medium', 'Hard'].map((l) => (
                        <button
                            key={l}
                            className={`select-btn ${level === l ? 'active' : ''}`}
                            onClick={() => setLevel(l)}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>

            <div className="setting-group">
                <h3>Select Time (Minutes)</h3>
                <div className="options-row">
                    {[5, 10, 15].map((t) => (
                        <button
                            key={t}
                            className={`select-btn ${time === t ? 'active' : ''}`}
                            onClick={() => setTime(t)}
                        >
                            {t} min
                        </button>
                    ))}
                </div>
            </div>

            <button className="start-quiz-btn" onClick={handleStartQuiz}>
                Start Quiz
            </button>
        </div>
    );
};

export default LevelSelect;
