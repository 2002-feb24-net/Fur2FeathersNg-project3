import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  isAuthenticated:boolean;
  constructor(public oktaAuth:OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated:boolean) => this.isAuthenticated=isAuthenticated
    );
   }

  login() {
    this.oktaAuth.loginRedirect('/my-profile');
    debugger;
  }
  logout() {
    this.oktaAuth.loginRedirect('/')
  }
  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }
  onSubmit() {
    console.log("login")
  }

}
