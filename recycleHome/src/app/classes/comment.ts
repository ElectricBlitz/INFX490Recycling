export class Comment {
    id:number;
    name:string;
    body:string;
    time:Date;
  
    constructor(id:number,name:string,body:string,time:Date){
      this.id = id;
      this.name = name;
      this.body = body;
      this.time = time;
    }
}
