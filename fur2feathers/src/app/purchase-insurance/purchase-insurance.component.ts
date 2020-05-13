import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

import { Customer } from '../interfaces/customer';
import { Pet } from '../interfaces/pet';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-purchase-insurance',
  templateUrl: './purchase-insurance.component.html',
  styleUrls: ['./purchase-insurance.component.scss']
})
export class PurchaseInsuranceComponent implements OnInit {

  model: Customer = new Customer();
  pet_model: Pet = new Pet();
  pet_queue: Pet[] = [];
  confirm_password:string = "";
  mult_pets: boolean = false;
  dbUpdateError: boolean = false;
 

  constructor(
    public router:Router,
    public dal: DataAccessService
  ) { }

  ngOnInit(): void {
  }

  petToSheet(pet:Pet) {
    axios.post('https://sheetdb.io/api/v1/vh0d5e21jw3tc',{data:[{
        "Customer ID": pet.customerId,
        "Name": pet.name,
        "Species": pet.species,
        "Color": pet.color,
        "Sex": pet.sex,
        "Age": pet.age,
        "Preexisting Conditions": pet.preexisting_conditions
    }]})
  }

  onSubmit() {
    event.preventDefault();
    event.stopPropagation();

    console.log("full submit")
    console.log(this.pet_model);
    console.log(this.model);
    this.dal.addCust(this.model).then( //add cust
      x=>{
      this.model.customerId=x.customerId
      //send cust to admin google sheet
      axios.post('https://sheetdb.io/api/v1/8x1860887znut',{data:[{
        "Customer ID": this.model.customerId,
        "Name": this.model.name,
        "Street":this.model.street,
        "State": this.model.state,
        "Address line 2":this.model.addr2,
        "City": this.model.city,
        "Zip": this.model.zip,
        "Phone":this.model.phone,
        "Email": this.model.email,
      }]})
        //add current pet
      if(this.pet_model.name!=null){
        this.pet_model.customerId=x.customerId;
        //copy current pet to avoid erasure after form reset
        let new_pet:Pet = new Pet();
        Object.assign(new_pet,this.pet_model);
        this.dal.addPet(this.pet_model).then(x=>this.petToSheet(new_pet)); 
      }
      //add all previously added pets
      for(let pet of this.pet_queue) { 
        pet.customerId=x.customerId;
        this.dal.addPet(pet);
        this.petToSheet(pet);
      }
      this.router.navigate(['submitted'])
   
    })
    .catch((x)=>{
      console.log(x);
      this.dbUpdateError=true
      alert("Duplicate phone/email")
      //reset form
      this.model = new Customer();
      this.pet_model = new Pet();
    });
    
   
  }
/**
 * 
 */
  addPet() {
    //prevent multiple addition of same pet
    event.stopPropagation();
    event.preventDefault();

    console.log("Addpet")
    //deep copy of current pet model and 
    let new_pet:Pet = new Pet();
    Object.assign(new_pet,this.pet_model);
    this.pet_queue.push(new_pet);
  }
}
