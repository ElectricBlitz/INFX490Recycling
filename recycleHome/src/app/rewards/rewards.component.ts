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

    rewardsList:Reward[] = [new Reward(0,100,"LRI Refrigerator Magnet","A magnet with our logo"),
    new Reward(1,150,"LRI Recycled Notebook","A notebook made with recycled materials"),
    new Reward(2,200,"LRI Eco Bag","A bag with our logo made of recycled material"),
    new Reward(3,300,"Breaux's Mart 5% off coupon","5% off a purchase at Breaux's Mart")];

    claimMsg:string = '';

    claimReward(cost:number,item:string){
      if(this.userPoints >= cost){
        this.claimMsg = "You have successfully claimed: " + item;
        this.userPoints = this.userPoints - cost;
        this.userService.setPoints(this.userPoints);
        this.userService.updateData();
      }
    }

    code: string = "";

    codeClaim: string = "";

    addPoints(){
      if(this.userService.getUsername() != ""){
        if(this.code == "123456"){
          this.codeClaim = "Claim successful";
          this.userPoints = this.userPoints + 50;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else if(this.code == "123123"){
          this.codeClaim = "Claim successful";
          this.userPoints = this.userPoints + 100;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else if(this.code == "456456"){
          this.codeClaim = "Claim successful";
          this.userPoints = this.userPoints + 300;
          this.userService.setPoints(this.userPoints);
          this.userService.updateData();
        }
        else{
          this.codeClaim = "Invalid Code";
        }
      }
      else{
        this.codeClaim = "You must be logged in to claim a code";
      }
      this.code = '';
    }
}
