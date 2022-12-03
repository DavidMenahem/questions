import { Injectable } from '@angular/core';
import { Question } from '../components/models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  questions : Question[] = [
    {
      id: 0,
      question: "what is 5 + 5",
      answer: 3,
      answers:[
        "4",
        "6",
        "8",
        "10"
      ]
    },
    {
      id: 1,
      question: "what is 10 + 5",
      answer: 2,
      answers:[
        "4",
        "15",
        "8",
        "10"
      ]
    },
    {
      id: 2,
      question: "what is 15 + 5",
      answer: 3,
      answers:[
        "4",
        "6",
        "20",
        "10"
      ]
    }
  ]
}
