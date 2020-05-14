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
  

  /**
   * 
   * @param http used for posting and getting from backend api
   * @param oktaAuth used to retrieve authenticated user's token to access restricted api endpoints
   */
  constructor(
    private http:HttpClient,
    private oktaAuth:OktaAuthService  
    ) { }

  /**
   * gets access token of logged in user, not currently in use since methods may run before await has completed.
   */
  async ngOnInit() {
     this.accessToken = await this.oktaAuth.getAccessToken();
  }

  /**
   * adds a pet
   * @param pet pet to be added
   */
  addPet(pet: Pet) {
    console.log(JSON.stringify(pet))
    return this.http.post<Pet>(this.baseUrl+this.petUrl,JSON.stringify(pet),httpOptions)
      .toPromise();
  }

  /**
   * adds a cust
   * @param cust cust to be added
   */
  addCust(cust:Customer) {
    console.log(JSON.stringify(cust))
    return this.http.post<Customer>(this.baseUrl+this.custUrl,JSON.stringify(cust),httpOptions)
      .toPromise();
  }

  /**
   * Function is async in order to retrieve access token,
   * uses the access token to access a protected endpoint which retrieves customer information based on logged in user's email
   */
  async getCust() {
    return this.http.get<Customer>(this.baseUrl+this.custUrl+`/email`, {
        headers: {
          Authorization: 'Bearer ' +await this.oktaAuth.getAccessToken(),
        }
      })
      .toPromise();
  }

  /**
   * gets all pets associated with cust id
   * @param custId 
   */
  getCustPets(custId:number) {
    console.log(`geting pets for custid:${custId}`);
    return this.http.get<Pet[]>(this.baseUrl+this.petUrl+`/cust/${custId}`)
      .toPromise();
  }

  /**
   * Updates a given pet, used to update image url
   * @param petId 
   */
  putPet(petId:number,pet:Pet) {
    console.log(JSON.stringify(pet));
    return this.http.put<Pet>(this.baseUrl+this.petUrl+`/${petId}`,JSON.stringify(pet),httpOptions)
      .toPromise();
  }

}
