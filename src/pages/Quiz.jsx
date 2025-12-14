import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import * as allData from '../data';
import Timer from '../components/Timer';
import QuestionCard from '../components/QuestionCard';
import './Quiz.css';

const Quiz = () => {
    const { topicId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Get settings from location state or defaults
    const { level, time } = location.state || { level: 'Medium', time: 600 }; // Default 10 min

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState({}); // { questionIndex: selectedOption }
    const [score, setScore] = useState(0);

    // Load questions on mount
    useEffect(() => {
        // Determine which dataset to load
        const data = allData[topicId];
        if (data) {
            // In a real app, you might filter by difficulty here if data supported it
            // For now, we use all questions or shuffle them
            // Simple shuffle
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            setQuestions(shuffled);
        } else {
            // Handle invalid topic
            navigate('/topics');
        }
    }, [topicId, navigate]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        // Save answer
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        // Update answers map
        setAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: selectedOption
        }));

        // Update score if correct
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        // Move to next or finish
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null); // Reset for next
        } else {
            finishQuiz(score + (isCorrect ? 1 : 0)); // Pass updated score
        }
    };

    const finishQuiz = (finalScore) => {
        navigate('/result', {
            state: {
                score: finalScore !== undefined ? finalScore : score,
                totalQuestions: questions.length,
                answers
            }
        });
    };

    if (questions.length === 0) {
        return <div className="quiz-loading">Loading Questions...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-page">
            <div className="quiz-header">
                <div className="quiz-info">
                    <span>Topic: {topicId.toUpperCase()}</span>
                    <span>Level: {level}</span>
                </div>
                <Timer duration={time} onTimeUp={() => finishQuiz(score)} />
            </div>

            <QuestionCard
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedOption={selectedOption}
                onOptionSelect={handleOptionSelect}
                questionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
            />

            <div className="quiz-controls">
                <button
                    className="next-btn"
                    onClick={handleNext}
                    disabled={!selectedOption}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default Quiz;
