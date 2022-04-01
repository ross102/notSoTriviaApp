import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen } from "@testing-library/react";
import HomeUI from "./HomeUI";
import { BrowserRouter as Router } from 'react-router-dom';




describe("init homepage", () => {
    beforeEach(() => {
        render(
            <Router>
        <HomeUI />
        </Router>
        );
    })

    it("It displays the text in the home page ", () => {
        const element = screen.getByText("Welcome to the Trivia Challenge");
        expect(element).toBeInTheDocument();
        expect(screen.getByText("You will be presented with true or false questions.")).toBeInTheDocument();
   
   });
   
   it("It displays the button in home page ", async () => {
       
          expect((screen.getByRole("button"))).toBeInTheDocument();
          fireEvent.click(screen.getByText(/Begin/i));
          expect(screen.getByRole('link')).toHaveAttribute("href", "/quiz");       
      });
   
   
})



