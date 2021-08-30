import { style } from '@angular/animations';
import { I18nPluralPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
simpleclass ='myclass'
showdata = false;
 color:any = 'purple';
 updateclr(){
   this.color='orange';
 }

}

