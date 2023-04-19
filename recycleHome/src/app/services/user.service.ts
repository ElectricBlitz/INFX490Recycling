import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: any;

  constructor() {  }

  setUser(user: any){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  getID(){
    if(this.user == null){
      return 0;
    }
    return this.user.id;
  }

  getFirst(){
    if(this.user == null){
      return "";
    }
    return this.user.firstName;
  }

  getLast(){
    if(this.user == null){
      return "";
    }
    return this.user.lastName;
  }

  getUsername(){
    if(this.user == null){
      return "";
    }
    return this.user.username;
  }

  getPoints(){
    if(this.user == null){
      return 0;
    }
    return this.user.rewardsPoints;
  }

  setPoints(p:number){
    this.user.rewardsPoints = p;
  }

  updateData(){
    const tempUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      username: this.user.username,
      password: this.user.password,
      rewardsPoints: this.user.rewardsPoints,
      role: this.user.role
    }
    fetch("http://localhost:8080/api/accounts/" + this.user.id.toString(), {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tempUser)})
      .then(response => {
        return response.json();
      })
      .then(data =>{
        //console.log(data);
      })
      .catch(error => console.error(error));
  }
}
