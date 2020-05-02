import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
