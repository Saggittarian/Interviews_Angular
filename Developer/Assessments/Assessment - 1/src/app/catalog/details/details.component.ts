import { Component, Input, OnInit } from '@angular/core';
import {flowers} from '../product'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() flower:any;

  constructor() { }

  ngOnInit(): void {
  }
  onCounterUpdate(ee:any){
     this.flower.likes = ee.count; 
  }
}
