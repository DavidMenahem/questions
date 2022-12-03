export class Question{
    id: number;
    question: string;
    answer: number;
    answers: string[];
    selectedAnswer?: number;

    constructor(id: number, question: string, answer: number, answers: string[]){
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.answers = answers;
    }

}