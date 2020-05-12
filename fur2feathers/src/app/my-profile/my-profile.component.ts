import { Component, OnInit } from '@angular/core';

import {Pet} from '../interfaces/pet';
import {Customer} from '../interfaces/customer';
import {Policy} from '../interfaces/policy';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { DataAccessService } from '../data-access.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor( 
      public oktaAuth:OktaAuthService,
      public DAL:DataAccessService,
      public router:Router
    ) { }

  //profile variables
  name:string = ""
  pet_profiles:Pet[] = [];
  cust_profile:boolean=true;
  pet_profile:boolean=false;
  cust_info:Customer=new Customer();
  pet_info:Pet =new Pet()
  policyHeadElements:string[] = ["Covered Pet(s)","Policy","Policy Status"]
  policies:Policy[] = [];
  userClaims: UserClaims=undefined;
  //update password form
  confirm_password:string="";
  new_password:string="";

  async ngOnInit() {
    this.initDummyData();
    const userClaims = await this.oktaAuth.getUser();
    console.log(userClaims)
    this.DAL.getCust().then(resp=>this.cust_info=resp)
      .catch((err)=>{
        console.log(err);
        alert("User with Okta e-mail not found")
        this.router.navigate(['log-in']);
      });
  }

  initDummyData() {
    this.name = "bui";
    for(let i=0;i<5;i++){
      let obj = new Pet(0,"jon"+i,""+i,""+i,0,""+i,""+i,""+i,"",0,[]);
      this.pet_profiles.push(obj);
    }
    for(let i=0;i<5;i++) {
      let obj = new Policy("lorem","lorem","lorem");
      this.policies.push(obj);
    }
  }

  /**
   * Determines which type of profile to display (cust/pet) then initiates retrieval of corresponding information
   * @param {Event} event information about clicked tab, used to detemine type, id of clicked profile
   * @param {string} name name corresponding to clicked profile tab
   */
  loadProfile(event:Event,name:string) {
    console.log((<HTMLInputElement>event.target).id);
    if((<HTMLInputElement>event.target).id =="customer-tab") {
      this.cust_profile=true;
      this.pet_profile=false;
    } else {
      this.cust_profile=false;
      this.pet_profile=true;
      this.pet_info=this.pet_profiles[0];
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

  changePwd() {

  }

  /**
   * Show form for img url upload
   */
  imgUrlPrompt() {
  }

  /**
   * Add img to db and display 
   */
  submitImg() {
    event.stopPropagation();
  }
}
