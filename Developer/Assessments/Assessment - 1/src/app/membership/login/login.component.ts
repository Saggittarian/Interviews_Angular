import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={username:"nischal@gmail.com",password:"nihilent"} 
  constructor() { }

  ngOnInit(): void {
  }

}
