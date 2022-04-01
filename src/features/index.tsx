export {default as QuizSlice} from "./quizSlice";

export {getQuestions as getQuiz} from "./quizThunk";
export {getAnswers, getResults, getUpdate}  from "./answerSlice";
export { default as AnswerSlice}  from "./answerSlice";

export {type Questions } from "./quizThunk";
export {type Quiz } from "./quizThunk";
export {type Answers, type Answer } from "./answer";

