import { Component, Input, OnInit } from '@angular/core';
//import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  ngOnInit():void{}
  /*
  product1:any;
  product2:any;
  
  ngOnInit():void{
    this.product1 = new Product("Jasmine","HoneyMoon",30,500,"../assets/Images/Jasmine.jpg",1000);
    this.product2 = new Product("Rose","Wedding",12,300,"../assets/Images/Rose.jpg",5000);
  }
  */
  /*
  title="Angular Class"
  ImageUrl="/assets/Images/download.jpg"
  price=12
  Students={
    "Name":"Nischal",
    "Phone":"9765499781"
  }
  Flowers={
    "First":"Gerbera",
    "Second":"Rose",
    "Third":"Jasmine"
  }
  OnButtonClick(){
    this.title= "Button Clicked"
  }
  */
}
