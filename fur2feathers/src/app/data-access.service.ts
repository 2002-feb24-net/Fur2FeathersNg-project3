import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Pet} from 'src/app/interfaces/pet';
import {Customer} from 'src/app/interfaces/customer'
import { OktaAuthService } from '@okta/okta-angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataAccessService implements OnInit {
  private baseUrl = environment.f2fApiBaseUrl;
  private petUrl = '/api/pets'
  private custUrl = '/api/customers'
  private accessToken:string ="";

  async ngOnInit() {
     this.accessToken = await this.oktaAuth.getAccessToken();
  }

  addPet(pet: Pet) {
    console.log(JSON.stringify(pet))
    return this.http.post<Pet>(this.baseUrl+this.petUrl,JSON.stringify(pet),httpOptions)
      .toPromise();
  }

  addCust(cust:Customer) {
    console.log(JSON.stringify(cust))
    return this.http.post<Customer>(this.baseUrl+this.custUrl,JSON.stringify(cust),httpOptions)
      .toPromise();
  }

  async getCust() {
    console.log(`getting customer with email`);
    return this.http.get<Customer>(this.baseUrl+this.custUrl+`/email`, {
        headers: {
          Authorization: 'Bearer ' +await this.oktaAuth.getAccessToken(),
        }
      })
      .toPromise();
  }
  constructor(
    private http:HttpClient,
    private oktaAuth:OktaAuthService  
    ) { }

}
