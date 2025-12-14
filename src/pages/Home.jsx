import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to Quiz Master</h1>
            <p>Test your knowledge across various topics!</p>
            <button className="start-btn" onClick={() => navigate('/topics')}>
                Start Quiz
            </button>
        </div>
    );
};

export default Home;
