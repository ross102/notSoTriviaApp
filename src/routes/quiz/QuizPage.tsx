import React, {useEffect, useState, useRef}  from "react";
import QuizUI from "./QuizUI";
import {getQuiz, getAnswers, getUpdate} from "../../features";
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from 'react-redux';
import { type Answer} from "../../features";
import { useNavigate } from "react-router-dom";






export default function QuizPage () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { quiz, Loading, error } = useSelector((state: RootState) => state.Quiz);
    
      
    // question number
    const [pos , setPos]  = useState(0);

    // score
    const scoreRef = useRef(0);

    // radio buttons
    const [choice , setChoice]  = useState("");   
     
    // pick an answer 
    const handleChoice = (e:any) => {

        setChoice(e.target.value);
        

        if(pos !== quiz.length ) {

         // check for correct answers
      if(quiz[pos].correct_answer === e.target.value) {
        
       //compute correct answer
       scoreRef.current = scoreRef.current + 1;

      }

        //get answer object
       const ans: Answer = {
        id: pos,
        answer: e.target.value,
        question: quiz[pos].question,
        correct_answer: quiz[pos].correct_answer,
        score: scoreRef.current
        
     }; 
    
      // Add the answered question to the array
      dispatch(getAnswers(ans));

     }
   
    };
  
    // Next button 
    const next = (e:any) => {

        e.preventDefault();
        
         console.log(quiz.length);
         console.log(pos);
         if(pos + 1 == quiz.length ) {
            navigate("/results", { replace: true });
      } else if (pos  < quiz.length) {
            //go to next page
        setPos((pos) => pos + 1);     
      } else {
         return;
      }
    };
    
    // prev question
    const  prev = (e: any) => {
      e.preventDefault();

      // check that form is not empty
      if(pos !== 0 ) {
         
        setPos((pos) => pos - 1);

        dispatch(getUpdate());
             
      }
    };
     

    useEffect(() => {
       dispatch(getQuiz());
    }, [dispatch]);
 
    return (
      <React.Fragment>
         {
            quiz.length > 0  ?
         
         <QuizUI 
         quiz={quiz}
         Loading={Loading}
         error={error}
         handleChoice={handleChoice}
         prev={prev}
         next={next}
         pos={pos}
         />
         : <div className="loading"> <p>{"Loading questions..."}</p> </div>
      }
      </React.Fragment>
    );
}