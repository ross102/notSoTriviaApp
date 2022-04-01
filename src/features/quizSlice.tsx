import { createSlice} from "@reduxjs/toolkit";
import { initialState, getQuestions } from "./quizThunk";
  

// Quiz
 const QuizSlice = createSlice({
    name: 'Quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // get all
    
         builder.addCase(getQuestions.pending, (state) => {
           state.Loading = true;
        });
         builder.addCase(getQuestions.fulfilled, (state, {payload}) => {
            state.Loading = false;
            state.quiz = payload;
         });
         builder.addCase(getQuestions.rejected, (state, action) => {
            state.Loading = false;
            if(action.payload) {
               state.error = action.payload;
            }

         });
          
    }
});




export default QuizSlice.reducer;