export class Reward {
    id:number;
    cost:number;
    item:string;
    description:string;

    constructor(id:number,cost:number,item:string,desc:string){
        this.id = id;
        this.cost = cost;
        this.item = item;
        this.description = desc;
    }
}
