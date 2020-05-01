import { Component, OnInit } from '@angular/core';

interface faq { 
  question:string,
  answer:string
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqs:faq[] = [];

  constructor() { }

  initializeFaqs() {
    for(let i=0;i<5;i++){
      // this.faqs.push(faq)
    }
  }

  showOrHide() {
    
  }
  ngOnInit(): void {
    this.initializeFaqs();
  }

}
