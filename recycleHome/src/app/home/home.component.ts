import { Component, OnInit } from '@angular/core';
import { Comment } from '../classes/comment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void{
    fetch("http://localhost:8080/api/comments")
    .then(response => {
      return response.json();
    })
    .then(data =>{
      //console.log(data);

      data.forEach((item: { id: number; comment: string; created: Date; userName: string; }) => {
        this.addComment(new Comment(item.id,item.userName,item.comment,item.created));
        this.currentID = item.id + 1;
        console.log(this.comments);
      })
    })
  }

  currentID:number = 1;

  comments:Comment[] = [];

  body: string = '';

  readAndComment(){
    var name = this.userService.getUsername();
    var currDate = new Date();
    var temp = new Comment(this.currentID, name, this.body, currDate)
    // if(this.name != "" && this.body != ""){
    //   this.addComment(temp);
    //   this.currentID = this.currentID + 1;
    // }

    const serializedComment = {
      id: temp.id,
      comment: temp.body,
      created: temp.time,
      userName: temp.name
    };

    if( this.userService.getFirst() != "" && this.userService.getFirst() != "" && this.body != ""){
      fetch("http://localhost:8080/api/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serializedComment)})
      .then(response => {
        return response.json();
      })
      .then(data =>{
        //console.log(data);
      })
      .catch(error => console.error(error));
      this.addComment(temp);
      this.currentID = this.currentID + 1;
    }
    else{
    
    }
  }

  addComment(newComment:Comment){
    this.comments.push(newComment);
    
    this.body = '';
  }

}


