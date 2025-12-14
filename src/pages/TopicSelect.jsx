import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicSelect.css';

const topics = [
    { id: 'computer', name: 'Computer' },
    { id: 'science', name: 'Science' },
    { id: 'history', name: 'History' },
    { id: 'geography', name: 'Geography' },
    { id: 'sports', name: 'Sports' },
    { id: 'general_knowledge', name: 'General Knowledge' },
    { id: 'class11', name: 'Class 11 Computer' },
    { id: 'class12', name: 'Class 12 Computer' },
];

const TopicSelect = () => {
    const navigate = useNavigate();

    const handleSelectTopic = (topicId) => {
        navigate(`/level/${topicId}`);
    };

    return (
        <div className="topic-container">
            <h2>Select a Topic</h2>
            <div className="topics-grid">
                {topics.map((topic) => (
                    <button
                        key={topic.id}
                        className="topic-card"
                        onClick={() => handleSelectTopic(topic.id)}
                    >
                        {topic.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopicSelect;
