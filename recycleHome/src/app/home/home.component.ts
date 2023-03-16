import { Component } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    comments = comments;

    currentID = currentID;
  
    readAndComment(){
      var name = (<HTMLInputElement>document.getElementById("name")).value;
      var body = (<HTMLInputElement>document.getElementById("body")).value;
      var temp = new Comment(currentID, name, body)
      this.addComment(temp);
      currentID = currentID + 1;
    }
  
    addComment(newComment:Comment){
      comments = comments.concat(newComment);
    }

}

class Comment {
    id:number;
    name:string;
    body:string;
  
    constructor(id:number,name:string,body:string){
      this.id = id;
      this.name = name;
      this.body = body;
    }
  }
  
  export var comments:Comment[] = [new Comment(0,"test","this is a test comment")];
  
  export var currentID:number = 1;