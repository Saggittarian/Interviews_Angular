import { Injectable } from '@angular/core';
import { flowers } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductHubService {

  // declare array of products
  flowers:any=[];

  constructor() { 
                this.flowers=[
                  {"title":"Jasmine", "imageUrl":"/assets/Images/Jasmine.jpg", "desc":"Wedding flower","unitcost":8, "qty":34000,"likes":4875},
                  {"title":"Rose", "imageUrl":"/assets/Images/Rose.jpg", "desc":"Valentine flower","unitcost":19, "qty":3560,"likes":9875}
                 ];
  }
  getAll():any{
    return this.flowers;
  }
  insert(flower:any){
    this.flowers.push(flower);
  } 
}
