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

    

    rewardsList:Reward[] = [new Reward(0,2,"Thank You","Nothing, but thank you for recycling"),new Reward(1,30,"Coasters","Coasters with our logo, made with recycled materials.")];

    claimReward(cost:number){
      if(this.userPoints >= cost){
        this.userPoints = this.userPoints - cost;
        this.userService.setPoints(this.userPoints);
        this.userService.updateData();
      }
    }

    code: number = 0;

    addPoints(){
      if(this.userService.getUsername() != ""){
        if(this.code == 123456){
          this.userPoints = this.userPoints + 50;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else if(this.code == 123123){
          this.userPoints = this.userPoints + 100;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else if(this.code == 456456){
          this.userPoints = this.userPoints + 300;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else{
  
        }
      }
      else{

      }
    }
}
