import React from "react";
import { Card, PrimaryButton, Title,Box, SecondaryButton } from "../../components";
import {type Questions } from "../../features";

import "../routes.css";


interface Props {
    quiz: Questions[];
    Loading: boolean;
    error: string;
    handleChoice: any;
    prev: any;
    next: any;
    pos: number;
}

// QuizUI
export default function QuizUI ({quiz, handleChoice , prev, next, pos}: Props) {

  
    return (
       <div className="center-card">
           <Card>
               <Title >
                  
                  {quiz[pos].category}
                  
                </Title> 
                <Box role="box" key={pos}>
                   <p>{quiz[pos].question }?</p> 
                <div className="options"> 
                <div>
                  <input  type="radio" id="answer"  onClick={(e) => handleChoice(e)} name="answer" value="True" />
                  <label htmlFor="answer">True</label>
                </div>

                <div>
                  <input  type="radio" id="answer1" onClick={(e) => handleChoice(e)} name="answer" value="False" />
                  <label htmlFor="answer1">False</label>
                </div>   
                </div>             

                </Box>
                <p>{`${pos }  of   ${ quiz.length - 1}`}</p>
             <div className="btns">
             <SecondaryButton   variant="quiz" onClick={(e) => prev(e)}>Previous</SecondaryButton>
             <PrimaryButton  variant="quiz" onClick={(e) => next(e)}>{pos === quiz.length - 1 ? "Submit" : "Next"}</PrimaryButton>
             <div />
             </div>
           </Card>
       </div>
    );
}