
export class flowers{

    public title:string;
    public desc:string;
    public unitcost:number;
    public qty:number;
    public imageUrl:string;
    public likes:number; 

    constructor(title:string,desc:string,unitcost:number,qty:number,imageUrl:string,likes:number){
        this.title= title;
        this.desc= desc;
        this.unitcost = unitcost;
        this.qty= qty;
        this.imageUrl=imageUrl;
        this.likes=likes;
    }
}