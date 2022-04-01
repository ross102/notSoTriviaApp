import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import QuizPage from "./routes/quiz/QuizPage";
import ResultsPage from "./routes/results/ResultsPage";



const App = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/results" element={<ResultsPage />} />                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
