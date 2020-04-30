import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.scss']
})
export class PlanInfoComponent implements OnInit {
  rate: number = 999999;
  coverages: string[] = [];
  features: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
