import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, answers } = location.state || { score: 0, totalQuestions: 0, answers: [] };

    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    let message = "";
    if (percentage >= 80) message = "Excellent Job!";
    else if (percentage >= 50) message = "Good Effort!";
    else message = "Keep Practicing!";

    return (
        <div className="result-container">
            <h1>Quiz Completed!</h1>
            <div className="score-card">
                <h2>Your Score</h2>
                <div className="score-number">
                    {score} / {totalQuestions}
                </div>
                <p className="percentage">{Math.round(percentage)}%</p>
                <p className="message">{message}</p>
            </div>

            <div className="actions">
                <button className="action-btn" onClick={() => navigate('/topics')}>Play Again</button>
                <button className="action-btn secondary" onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
};

export default Result;
