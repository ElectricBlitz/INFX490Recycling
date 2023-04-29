import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService) {

  }

  title = 'recycleHome';

  username = 'johndoe';

  points = 100;

  getLoggedIn(){
    this.username = this.userService.getUsername();
    this.points = this.userService.getPoints();
    return this.userService.getUsername() != '';
  }
}
