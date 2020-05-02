import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../interfaces/customer';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-purchase-insurance',
  templateUrl: './purchase-insurance.component.html',
  styleUrls: ['./purchase-insurance.component.scss']
})
export class PurchaseInsuranceComponent implements OnInit {

  model: Customer = new Customer();
  pet_model: Pet = new Pet();
  confirm_password:string = "";
  mult_pets: boolean = false;
 

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("full submit")
    console.log(this.pet_model);
    console.log(this.model);
    this.router.navigate(['submitted'])
  }

  addPet() {
    console.log("Addpet")
    console.log(this.pet_model)
  }
}
