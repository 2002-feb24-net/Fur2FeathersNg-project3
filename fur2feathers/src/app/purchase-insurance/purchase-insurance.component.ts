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
    console.log("full submit")
    console.log(this.pet_model);
    console.log(this.model);
    // debugger;
    this.dal.addCust(this.model).then(
      x=>{
      if(this.pet_model.name!=null){
        this.pet_model.customerId=x.customerId;
        this.dal.addPet(this.pet_model); //add current pet
      }
      for(let pet of this.pet_queue) { //add all previously added pets
        pet.customerId=x.customerId;
        this.dal.addPet(pet);
      }
    })
    .catch(()=>{
      this.dbUpdateError=true
      console.log("Purchase insurance failed")
    });
    this.router.navigate(['submitted'])
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
    // debugger;
  }
}
