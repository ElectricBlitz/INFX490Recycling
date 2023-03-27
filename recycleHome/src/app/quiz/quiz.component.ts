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

  ans1:number = 1;
  ans2:number = 1;
  ans3:number = 1;
  ans4:number = 1;

  getRandomQuestionID() {
    return Math.floor(Math.random() * (Math.floor(this.questions.length) - Math.ceil(0)) + Math.ceil(0));
  }

  currentQuestion:number = this.getRandomQuestionID();

  nextQuestion(temp:number){
    while(temp == this.currentQuestion){
      temp = this.getRandomQuestionID();
    }
    this.currentQuestion = temp;
    this.ans1 = 1;
    this.ans2 = 1;
    this.ans3 = 1;
    this.ans4 = 1;
  }

  

  ansSet(t:number,correct:boolean){
    if(correct){
      if(t == 1){
        this.ans1 = 3;
        this.ans2 = 2;
        this.ans3 = 2;
        this.ans4 = 2;
      }
      else if(t == 2){
        this.ans1 = 2;
        this.ans2 = 3;
        this.ans3 = 2;
        this.ans4 = 2;
      }
      else if(t == 3){
        this.ans1 = 2;
        this.ans2 = 2;
        this.ans3 = 3;
        this.ans4 = 2;
      }
      else{
        this.ans1 = 2;
        this.ans2 = 2;
        this.ans3 = 2;
        this.ans4 = 3;
      }
    }
    else{
      if(t == 1){
        this.ans1 = 2;
      }
      else if(t == 2){
        this.ans2 = 2;
      }
      else if(t == 3){
        this.ans3 = 2;
      }
      else{
        this.ans4 = 2;
      }
    }
  }

  checkCorrect(answer:string,correct:string,num:number){
      if(answer == correct){
        this.ansSet(num,true);
      }
      else{
        this.ansSet(num,false);
      }
  }

}
