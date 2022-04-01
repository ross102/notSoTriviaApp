import React from "react";
import { Card, Title, PrimaryButton } from "../../components";
import {type Questions, type Answer} from "../../features";

import "../routes.css";


interface Props {
    quiz: Questions[];
    answers: Answer[];
    pos: number;
}

// ResultsUI
export default function ResultsUI ({quiz, answers}: Props) {

   // fetching the results
  const data =  answers.map((el) => {
    
   return <div key={el.id}>
       
       <div>
         <p><span className="plus">+</span>{el.question}</p>
         <p>Answer: { el.answer}</p>
         <p><b>Correct Answer</b>: { el.correct_answer}</p>
         </div>    
       </div>;
  });

    return (
       <div className="center-card">
           <Card>
               <Title>
                  You Scored <br />
                  {answers.length > 0 ? answers[answers.length - 1].score : 0  }/ {quiz.length}
                  
                </Title> 
                <div>
                
                {data.length > 0 ? data : "Sorry, but you failed all" }

              </div>
             <div>
               <PrimaryButton variant="quiz"><a href="/"> PLAY AGAIN ?</a></PrimaryButton>
             </div>
           </Card>
       </div>
    );
}