import { Component, OnInit } from '@angular/core';
import { SubmitClaim } from '../interfaces/submit-claim';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.scss']
})
export class SubmitClaimComponent implements OnInit {
  model:SubmitClaim = new SubmitClaim();
  pets:Pet[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
