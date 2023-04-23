import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: string = '';

  pass: string = '';

  loginMsg: string = '';

  constructor(private userService:UserService){

  }

  checkLogin(){
    const data = {
      username: this.user,
      password: this.pass
    }

    fetch(window.location.origin + "/api/authenticate?username=" + data.username + "&password=" + data.password, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
    .then(response => {
      console.log(response);
      console.log(response.status);
      return response.status;
    })
    .then(status =>{
      if(status == 200) {
        //true
        this.loginMsg = "Login sucessful. Welcome, " + this.user;
        fetch(window.location.origin + "/api/accounts/getByUser/" + this.user)
        .then(userResponse => userResponse.json())
        .then(userData => {
          console.log(userData);
          this.userService.setUser(userData);
          console.log(this.userService.getUser());
        })
      } else {
        //false
        this.loginMsg = "Incorrect username or password"
      }
    })
    .catch(error => console.error(error));
  }

}
