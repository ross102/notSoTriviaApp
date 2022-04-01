import { configureStore } from "@reduxjs/toolkit";

import { QuizSlice, AnswerSlice } from "../features";


export const store = configureStore({

  reducer: {
       Quiz: QuizSlice,
       Answer: AnswerSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 