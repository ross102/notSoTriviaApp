import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { initialState, Answer } from "./answer";
  

// Answers
 const answerSlice = createSlice({
    name: 'Answers',
    initialState,
    reducers: {
        getAnswers: (state, action:PayloadAction <Answer> ) => {
          state.answers.push(action.payload);
        },
        getUpdate: (state) => {
          state.answers.pop();
        },
        getResults: (state) => {
             return state;
        }
    }
});

export const { getAnswers, getResults, getUpdate } = answerSlice.actions;

export default answerSlice.reducer;

