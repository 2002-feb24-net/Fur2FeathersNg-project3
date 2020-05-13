import { Component, OnInit } from '@angular/core';
import axios from "axios";

import {Contact} from '../interfaces/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: Contact = new Contact("","","","","","","","",0,"","");
  contact_methods = ["Email","Phone"];
  email_subjects = ["Request a quote","My account","My open claims", "Other"];
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
      console.log(this.model);
      
      axios.post('https://sheetdb.io/api/v1/o96lvdg1uxcd2',{data:[{ 
          Name:this.model.name,
          Phone:this.model.phone,
          Email:this.model.email,
          State:this.model.state,
          Zip:this.model.zip,
          Contact_Method:this.model.contact_method,
          Pet_Name:this.model.pet_name,
          Pet_Age:this.model.pet_age,
          Subject:this.model.subject,
          Text:this.model.text
        }]
      });
  }
}
