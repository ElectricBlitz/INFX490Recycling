import { Component, OnInit } from '@angular/core';
import { Reward } from '../classes/reward';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

    userPoints:number = 0;

    constructor(private userService: UserService){
      
    }

    ngOnInit(): void {
      console.log(this.userService.getUser());
      console.log(this.userService.getPoints());
      this.userPoints = this.userService.getPoints();
    }

    

    rewardsList:Reward[] = [new Reward(0,30,"Coasters","Coasters with our logo, made with recycled materials.")];

    claimReward(){

    }
}
