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
  new Question(1,"Which item can be collected by municipal recycling?","any plastics","soft plastics","clean and dry hard plastics","all of the above","clean and dry hard plastics"),
  new Question(2,"What item should NOT go into your recycling bin?","food","batteries","diapers","all of the above","all of the above"),
  new Question(3,"Which item can be collected by municipal recycling?","plastic coat hangers","plastic straws","rigid plastics with a screw top/neck","plastic flower pots","rigid plastics with a screw top/neck"),
  new Question(4,"Which metal item can be collected by municipal recycling?","propane tanks","aerosol cans","drink cans","hazardous waste containers","drink cans"),
  new Question(5,"Which item can NOT be recycled by municipal recycling?","toys","flattened cardboard","paper","metal cans","toys"),
  new Question(6,"The decomposition time of monofilament fishing line is roughly:","50 years","200 years","600 years","1000 years","600 years"),
  new Question(7,"The decomposition time of styrofoam is roughly:","10 years","100 years","1000 years","styrofoam does not biodegrade","styrofoam does not biodegrade"),
  new Question(8,"Recycling:","saves energy","creates jobs","conserves natural resources","all of the above","all of the above"),
  new Question(9,"Lafayette parish landfilled how many tons of garbage in 2021?","30,000","80,000","70,000","50,000","80,000")];

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
