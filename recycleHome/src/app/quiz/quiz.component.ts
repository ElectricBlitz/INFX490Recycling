import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  constructor() {}

  ngOnInit(): void{

  }

  questions:Question[] = [new Question(0,"The decomposition time of batteries is roughly:","350 years","100 years","5 months","10 years","100 years"),
                          new Question(1,"Which item can be collected by municipal recycling?","any plastics","soft plastics","clean and dry hard plastics","all of the above","clean and dry hard plastics")];

  getRandomQuestionID() {
    return Math.floor(Math.random() * (Math.floor(this.questions.length) - Math.ceil(0)) + Math.ceil(0));
  }

  currentQuestion:number = this.getRandomQuestionID();

  nextQuestion(){
    this.currentQuestion = this.getRandomQuestionID();
  }

}
