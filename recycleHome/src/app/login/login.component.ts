import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: string = '';

  pass: string = '';

  checkLogin(){
    const data = {
      username: this.user,
      password: this.pass
    }

    fetch("http://localhost:8080/api/authenticate?username=" + data.username + "&password=" + data.password, {
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
    .then(data =>{
      if(data == 200) {
        //true
      } else {
        //false
      }
      console.log(data);
    })
    .catch(error => console.error(error));   
  }

}
