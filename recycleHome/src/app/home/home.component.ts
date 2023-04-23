import { Component, OnInit } from '@angular/core';
import { Comment } from '../classes/comment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bwcCollection:string[] = [
    '"Power Wheels" ride-on toy cars (remove battery)',
    "Air conditioners (window units only)",
    "Carpeting and area rugs (one-piece construction, rolled and taped)",
    "Portable/moveable basketball goal and base",
    "Carrying cages for large animals",
    "Large appliances/small appliances (microwaves, floor fans, vacuum cleaners)",
    "Large ice chest/cooler or storage container (both empty)",
    "Large plastic children's toys",
    "Lawn furniture and patio umbrellas",
    "Liner for movable swimming pool (must be cut, rolled, taped, or tied, and each piece weighs less than 50 pounds)",
    'Manual garbage cans (must be empty and labeled "discard this can")',
    "Residential furniture (including sofas, loveseats, recliners, chairs, dining tables, desks, mattresses, and box springs)",
    "Television sets",
    "Trampoline mat (rolled and taped)",
    "Large empty boxes used for appliances, TVs, etc.",
    "Fitness equipment (treadmills, exercise bikes)",
    "Wading pool (roll and taped), frame for movable swimming pool (rolled, taped, and/or tied, and weighs less than 50 pounds)"
  ]

  cAccepted:string[] = [
    "Alkaline Batteries",
    "Chemical Cleaners",
    "Fluorescent Tubes",
    "Gasoline",
    "Herbicides",
    "Mercury Thermometers",
    "Paint & Paint Products",
    "Paint Thinner & Stripper",
    "Pesticides",
    "Photographic Chemicals",
    "Pool Chemicals",
    "Stains",
    "Turpentine"
  ]

  eAccepted:string[] = [
    "Computer Hardware",
    "Computer Accessories",
    "Laptops",
    "Processors",
    "Networking Equipment",
    "Circuit Boards (any type)",
    "Flat Screen Monitors/TVs",
    "CRT Monitors/TVs (bulky tube type)",
    "Printers",
    "Fax Machines",
    "Toner & Ink Jet Cartridges",
    "Digital Cameras & DVRs",
    "MP3 & DVD Players",
    "Stereos",
    "DVD Movies & Video Games",
    "XBoxes, Playstations, Wii",
    "Portable GPS Devices",
    "Cell Phones/Bag Phones",
    "Telephone & Telephone Systems",
    "Security Systems",
    "Uninterruptible Power Supplies (UPS)",
    "Telephone & Computer Cables"
  ]

  constructor(private userService: UserService) {

  }

  ngOnInit(): void{
    fetch(window.location.origin + "/api/comments")
    .then(response => {
      return response.json();
    })
    .then(data =>{
      //console.log(data);

      data.forEach((item: { id: number; comment: string; created: Date; userName: string; }) => {
        this.addComment(new Comment(item.id,item.userName,item.comment,item.created));
        this.currentID = item.id + 1;
        console.log(this.comments);
      })
    })
  }

  currentID:number = 1;

  comments:Comment[] = [];

  body: string = '';

  readAndComment(){
    var name = this.userService.getUsername();
    var currDate = new Date();
    var temp = new Comment(this.currentID, name, this.body, currDate)
    // if(this.name != "" && this.body != ""){
    //   this.addComment(temp);
    //   this.currentID = this.currentID + 1;
    // }

    const serializedComment = {
      id: temp.id,
      comment: temp.body,
      created: temp.time,
      userName: temp.name
    };

    if( this.userService.getFirst() != "" && this.userService.getFirst() != "" && this.body != ""){
      fetch(window.location.origin + "/api/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serializedComment)})
      .then(response => {
        return response.json();
      })
      .then(data =>{
        //console.log(data);
      })
      .catch(error => console.error(error));
      this.addComment(temp);
      this.currentID = this.currentID + 1;
    }
    else{

    }
  }

  addComment(newComment:Comment){
    this.comments.push(newComment);

    this.body = '';
  }

}


