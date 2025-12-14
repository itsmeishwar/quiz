import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopicSelect from './pages/TopicSelect';
import LevelSelect from './pages/LevelSelect';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<TopicSelect />} />
          <Route path="/level/:topicId" element={<LevelSelect />} />
          <Route path="/quiz/:topicId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
