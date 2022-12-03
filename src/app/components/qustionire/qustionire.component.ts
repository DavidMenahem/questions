import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from '../models/Question';

@Component({
  selector: 'app-qustionire',
  templateUrl: './qustionire.component.html',
  styleUrls: ['./qustionire.component.scss']
})
export class QustionireComponent implements OnInit {

  questions : Question[] = [];
  constructor(private questionService: QuestionsService){

  }
  ngOnInit(): void {
    this.questions = this.questionService.questions;  
  }
}