import { Component, OnInit } from '@angular/core';

import {Contact} from '../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: Contact = new Contact("","","","","","","","",0,"","");
  contact_methods = ["Email","Phone"];
  email_subjects = ["Request a quote","My account","My open claims", "Other"];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
