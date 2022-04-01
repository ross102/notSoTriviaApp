import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen } from "@testing-library/react";
import ResultsPage from "./ResultsPage";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../../app/store";



it(" It renders the Results page", () => {
     render(
        <Router>
        <Provider store={store}>
         <ResultsPage />
         </Provider>            
     </Router>
     
     );
});

