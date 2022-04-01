


// Answers
export interface Answer  {
     id: number;
     answer: string;
     question: string;
     correct_answer: string; 
     score: number;
    
}


export interface Answers {
    answers: Answer[]; 
}



export const initialState : Answers = {
    answers: [],
};


