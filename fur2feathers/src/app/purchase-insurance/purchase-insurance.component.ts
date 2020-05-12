import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  onSubmit() {
    event.preventDefault();
    event.stopPropagation();

    console.log("full submit")
    console.log(this.pet_model);
    console.log(this.model);
    this.dal.addCust(this.model).then( //add cust
      x=>{
        //add current pet
      if(this.pet_model.name!=null){
        this.pet_model.customerId=x.customerId;
        this.dal.addPet(this.pet_model); 
      }
      //add all previously added pets
      for(let pet of this.pet_queue) { 
        pet.customerId=x.customerId;
        this.dal.addPet(pet);
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
