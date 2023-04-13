import { Component, OnInit } from '@angular/core';
import { Comment } from '../classes/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
    
  }

  ngOnInit(): void{
    fetch("http://localhost:8080/api/Comments")
    .then(data => {
      return data.json
    })
    .then(data =>{
      console.log(data);
    })
  }

  currentID:number = 1;

  comments:Comment[] = [new Comment(0,"test","this is a test comment", new Date(2023,3,12,17,37,0))];

  name: string = '';

  body: string = '';

  readAndComment(){
    var currDate = new Date();
    var temp = new Comment(this.currentID, this.name, this.body, currDate)
    if(this.name != "" && this.body != ""){
      this.addComment(temp);
      this.currentID = this.currentID + 1;
    }
  }

  addComment(newComment:Comment){
    this.comments.push(newComment);

    this.name = '';
    this.body = '';
  }

}


