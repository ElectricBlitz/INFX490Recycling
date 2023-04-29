import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  fname: string = '';

  lname: string = '';

  user: string = '';

  pass: string = '';

  cpass: string = '';

  createUser(){
    const newUser = {
      firstName: this.fname,
      lastName: this.lname,
      username: this.user,
      password: this.pass,
      rewardsPoints: 0,
      role: "user"
    }

    if(this.pass == this.cpass){

      fetch(window.location.origin + "/api/accounts", {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)})
    .then(response => {
      this.fname = '';
      this.lname = '';
      this.user = '';
      this.pass = '';
      this.cpass = '';
      return response.json();
    })
    .then(data =>{
      //console.log(data);
    })
    .catch(error => console.error(error));
    }

  }

}
