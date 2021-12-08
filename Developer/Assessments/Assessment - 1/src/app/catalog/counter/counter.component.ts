import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  
  @Input() count:number | undefined;   // variable declaration 

  ngOnInit(): void {
  }
  ondecBtnClick(): void
  { 
    if(this.count != undefined)
      this.count--;
  }
  onincBtnClick(): void
  {
    if(this.count != undefined)
      this.count++;
  }
}
