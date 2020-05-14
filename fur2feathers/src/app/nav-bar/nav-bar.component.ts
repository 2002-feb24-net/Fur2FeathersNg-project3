import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

/**
 * Component Decorator
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  /**
   * 
   * @param oktaAuth Used to determine if user is logged-in in onInit hook
   */
  constructor(public oktaAuth:OktaAuthService) { }

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
