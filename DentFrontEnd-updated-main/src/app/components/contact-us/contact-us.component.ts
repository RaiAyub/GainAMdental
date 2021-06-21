import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  styles: [`input.ng-invalid{border-left:5px solid red;} 
  input.ng-valid{border-left:5px solid green;}`]
})
export class ContactUsComponent implements OnInit {

  onSubmit(value: any){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
