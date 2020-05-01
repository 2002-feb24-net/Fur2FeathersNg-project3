import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string ="";
  pwd: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("login")
    console.log(this.email+this.pwd);
  }

}
