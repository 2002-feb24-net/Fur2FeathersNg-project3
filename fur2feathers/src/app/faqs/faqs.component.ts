import { Component, OnInit } from '@angular/core';

import {Faq} from '../interfaces/faq';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqs:Faq[] = [];

  constructor() { }

  initializeFaqs() {
    // for(let i=0;i<5;i++){
    //   let obj = new Faq("lorem",`ipsumasdsadadssaLorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam quis possimus minima illum numquam in quos cumque, sunt consectetur ducimus velit tenetur omnis quibusdam eius quod modi! Dolorum, fugit!
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed, a placeat voluptatem, magnam nesciunt quaerat doloremque vitae dolor rem quod quidem, nihil eaque error nisi nemo cum officiis nulla.`);
    //   this.faqs.push(obj)
    // }
  }


  shChildren(answer_content:HTMLCollection) {
    console.log(answer_content);
    for(let answer of Array.from(answer_content)) {
      if(answer.hasChildNodes()){
        this.shChildren(answer.children);
      }
      if(answer.classList.contains("show-answer")) {
        answer.classList.remove("show-answer");
      } else {
        answer.classList.add("show-answer");
      }
    }
  }

  showOrHide(event:Event) {

    let answer_content =  (<HTMLInputElement>event.target).children;
    this.shChildren(answer_content);

  }
  ngOnInit(): void {
    this.initializeFaqs();
  }

}
