import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  readonly url = 'https://db-19.azurewebsites.net/'


  constructor(private http:HttpClient) { }

  
}
