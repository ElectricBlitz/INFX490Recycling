import { Component, OnInit } from '@angular/core';
import { Reward } from '../classes/reward';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
    constructor(){

    }

    ngOnInit(): void {
        
    }

    userPoints:number = 33576732;

    rewardsList:Reward[] = [new Reward(0,30,"Coasters","Coasters made with recycled materials with our logo.")];

    claimReward(){
      
    }
}
