import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Pet} from 'src/app/interfaces/pet';
import {Customer} from 'src/app/interfaces/customer'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private baseUrl = environment.f2fApiBaseUrl;
  private petUrl = '/api/pets'
  private custUrl = '/api/customers'

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

  constructor(private http:HttpClient) { }

}
