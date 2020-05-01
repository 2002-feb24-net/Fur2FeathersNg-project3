import { Component, OnInit } from '@angular/core';

import {pet} from '../interfaces/pet';
import {customer} from '../interfaces/customer';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() { }
  name:string = "bui"
  pet_profiles:pet[] = [];
  cust_profile:boolean=true;
  pet_profile:boolean=false;
  cust_info:customer=new customer("","","","","","","","",[]);
  pet_info:pet =new pet("","","",0,"","","",[])

  ngOnInit(): void {
    this.initPets();
  }

  initPets() {
    for(let i=0;i<5;i++){
      let obj = new pet("jon","","",0,"","","",[]);
      this.pet_profiles.push(obj);
    }
  }

  /**
   * Determines which type of profile to display (cust/pet) then initiates retrieval of corresponding information
   * @param {Event} event information about clicked tab, used to detemine type, id of clicked profile
   * @param {string} name name corresponding to clicked profile tab
   */
  loadProfile(event:Event,name:string) {
    if((<HTMLInputElement>event.target).classList.contains("customer-tab")) {
      this.cust_profile=true;
      this.pet_profile=false;
    } else {
      this.cust_profile=false;
      this.pet_profile=true;
    }
    console.log(name);
  }

  onSubmit() {

  }

  /**
   * Searches dom for all input elements and removes readonly property
   */
  allowEdits() {
    let inputs = document.getElementsByTagName("input");
    for(let tag of Array.from(inputs)) {
      tag.removeAttribute("readonly");
    }
  }

}
