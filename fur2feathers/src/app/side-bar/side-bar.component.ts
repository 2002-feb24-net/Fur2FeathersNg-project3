import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  buyerGuidePrompt:boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goHome() {
    this.router.navigate(['home']);
  }

}
