import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {
  sel_species:string = "";
  vet_zip:string = ""; 
  vet_state:string ="";
  vet_city:string = ""; 
  searchBegan:boolean = false;
  results:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`${this.sel_species} ${this.vet_zip} ${this.vet_state} ${this.vet_state}`);
    console.log(this.results.length)
    this.searchBegan=true;
  }

}
