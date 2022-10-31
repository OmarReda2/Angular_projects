import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = '';
  validEmail(test:string): boolean {
    let x = /[a-zA-z]@/.test(test);
   
    
    return x;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
