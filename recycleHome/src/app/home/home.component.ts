import { Component, OnInit } from '@angular/core';
import { Comment } from '../classes/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void{

  }

  currentID:number = 1;

  comments:Comment[] = [new Comment(0,"test","this is a test comment")];

  readAndComment(){
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var body = (<HTMLInputElement>document.getElementById("body")).value;
    var temp = new Comment(this.currentID, name, body)
    this.addComment(temp);
    this.currentID = this.currentID + 1;
  }

  addComment(newComment:Comment){
    this.comments.push(newComment);
  }
}


