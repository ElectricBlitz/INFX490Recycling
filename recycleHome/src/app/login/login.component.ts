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
    // fetch(`localhost:8080/api/accounts?username=${user}&password=${pass}`)
    // .then(response => {
    //   if (response.ok) {
    //     return response.json(); // Parse the JSON response from the server
    //   } else {
    //     throw new Error('Network response was not ok.');
    //   }
    // })
    // .then(data => {
    //   if (data.length > 0) {
    //     console.log(`User ${user} with password ${pass} exists in the database.`);
    //     this.updateVariable(data.id)
    //   } else {
    //     console.log(`User ${user} with password ${pass} does not exist in the database.`);
    //   }
    // })
    // .catch(error => {
    //   console.error('There was a problem with the fetch operation:', error);
    // });

    console.log(this.user + " " + this.pass);
  }

}
