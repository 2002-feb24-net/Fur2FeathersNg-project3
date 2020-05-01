import { Component, OnInit } from '@angular/core';

import {pet} from '../interfaces/pet';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() { }
  name:string = "bui"
  pet_profiles:pet[] = [];

  ngOnInit(): void {
    this.initPets();
  }

  initPets() {
    for(let i=0;i<5;i++){
      let obj = new pet("jon","","",0,"","","",[]);
      this.pet_profiles.push(obj);
    }
  }

  loadProfile(name:string) {
    console.log(name);
  }

}
