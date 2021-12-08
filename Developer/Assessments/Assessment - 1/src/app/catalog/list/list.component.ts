import { Component, OnInit } from '@angular/core';
import { flowers } from '../product';
import { ProductHubService } from '../product-hub.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flowers:any=[];
  
  // Inject Product Service 
  constructor(private svc:ProductHubService) {
  /*  this.flowers=[

      {"title":"Gerbera", "imageurl":"/assets/images/gerbera.jpg", "desc":"Wedding flower","unitcost":8, "qty":34000,"likes":4875},

      {"title":"Rose", "imageurl":"/assets/images/rose.jpg", "desc":"Valentine flower","unitcost":19, "qty":3560,"likes":9875},

      {"title":"Jasmine", "imageurl":"/assets/images/jasmine.jpg", "description":"Smelling flower","unitprice":2, "quantity":87600,"likes":8765},

      {"title":"Lotus", "imageurl":"/assets/images/gerbera.jpg", "description":"Worship flower","unitprice":35, "quantity":7600,"likes":9875},

      {"title":"Marigold", "imageurl":"/assets/images/marild.jpg", "description":"Festival flower","unitprice":18, "quantity":6788,"likes":4875},

      {"title":"Orchid", "imageurl":"/assets/images/orchid.jpg", "description":"Delicate flower","unitprice":20, "quantity":9897,"likes":455},

      {"title":"Carnation", "imageurl":"/assets/images/carnation.jpg", "description":"beautiful flower","unitprice":56, "quantity":4530,"likes":88765},

      {"title":"Lily", "imageurl":"/assets/images/lily.jpg", "description":"Worship flower","unitprice":28, "quantity":654,"likes":2375}

 

    ];*/
   }
  //product1:any;
  //product2:any;
  
  ngOnInit():void{
     this.flowers = this.svc.getAll();
    //this.product1 = new Product("Jasmine","HoneyMoon",30,500,"../assets/Images/Jasmine.jpg",1000);
    //this.product2 = new Product("Rose","Wedding",12,300,"../assets/Images/Rose.jpg",5000);
  }
}
