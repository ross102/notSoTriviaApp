import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuizApi } from "../services";


// Questions
export interface Questions  {
     category: string;
     type: string;
     difficulty: string;
     question: string;
     correct_answer: string;
     incorrect_answers: string[];
    
}

//Quiz
export interface Quiz {
    quiz: Questions[] 
    Loading: boolean;
    error: string;
}




export const initialState : Quiz = {
    quiz: [],
    Loading: false,
    error: ""
};



  // get the quiz questions

export const getQuestions = createAsyncThunk<
Questions[],
void,
{ rejectValue: string }

>(
   "Quiz/questions",
   async (args,{ rejectWithValue}) => {

    try {
        const res = await QuizApi.getAll();
          if (res.data.results) {
            return res.data.results;
          }   
      
    } catch(error) {

         // default error handling. 
         // we can also use the status codes 

         if(error) {
            rejectWithValue("Something went wrong");
          }
    }
     
   }  
 );
