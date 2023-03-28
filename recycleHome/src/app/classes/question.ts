export class Question {
    id:number;
    text:string;
    answer1:string;
    answer2:string;
    answer3:string;
    answer4:string;
    cAnswer:string;

    constructor(id:number,text:string,answer1:string,answer2:string,answer3:string,answer4:string,cAnswer:string){
        this.id = id;
        this.text = text;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.cAnswer = cAnswer;
    }
}
