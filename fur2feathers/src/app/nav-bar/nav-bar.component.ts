import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  constructor(public oktaAuth:OktaAuthService) { }
  /**
   * sets log in text in nav bar to log out, invoked for each page change
   */
  async ngOnInit() {
    /**
     * sets log in text in nav bar to log out, invoked for each page change
     */
    if(await this.oktaAuth.isAuthenticated()){
      document.getElementById('nav-log-in').innerText="Log out";
    }
  }

  /**
   * removes Underline and bolds clicked element
   * @param event Clciked nav-bar element
   */
  navClick(event:Event) {
    let links = document.getElementsByTagName("a");
    for(let link of Array.from(links)) {
      link.classList.remove("selected");
    }
    (<HTMLInputElement>event.target).classList.add("selected");
  }
}
