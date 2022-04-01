import React, {useEffect, useState}  from "react";
import ResultsUI from "./ResultsUI";
import { getQuiz, getResults} from "../../features";
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from 'react-redux';





export default function ResultsPage () {

    const dispatch = useDispatch();
   
    const { quiz } = useSelector((state: RootState) => state.Quiz);
    const { answers } = useSelector((state: RootState) => state.Answer);
      
    // question number
    const [pos , setPos]  = useState(0);       
    
    // Get results 
    const loadAnswers = () => {
      
      dispatch(getResults());
      dispatch(getQuiz());
         
   };
    
     
    useEffect(() => {
        loadAnswers();
    }, [dispatch]);
 
    return (
      <React.Fragment>
         {
            quiz.length > 0  ?
         
         <ResultsUI 
         quiz={quiz}
         answers={answers}
         pos={pos}
         />
         : <div className="loading"> <p>{"Loading result..."}</p> </div>
      }
      </React.Fragment>
    );
}