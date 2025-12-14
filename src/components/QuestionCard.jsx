import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({
    question,
    options,
    selectedOption,
    onOptionSelect,
    questionIndex,
    totalQuestions
}) => {
    return (
        <div className="question-card">
            <div className="question-header">
                <span>Question {questionIndex + 1} of {totalQuestions}</span>
            </div>
            <h3 className="question-text">{question}</h3>
            <div className="options-container">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => onOptionSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
