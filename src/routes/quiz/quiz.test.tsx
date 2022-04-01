import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen } from "@testing-library/react";
import QuizPage from "./QuizPage";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../../app/store";



it(" It renders the Quiz page", () => {
     render(
        <Router>
        <Provider store={store}>
         <QuizPage />
         </Provider>            
     </Router>
     
     );
});

