import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observecomponent',
  templateUrl: './observecomponent.component.html',
  styleUrls: ['./observecomponent.component.css']
})
export class ObservecomponentComponent implements OnInit {
orderstatus:any;
   
  constructor() { }

  ngOnInit(): void {
     const observable = new Observable(observer =>{
     setTimeout(() =>{
       observer.next('in progress');
     },4000);

     setTimeout(() =>{
      observer.next('progressing');
    },8000);

    setTimeout(() =>{
      observer.next('completed');
    },12000);
    }).subscribe(val =>{
      this.orderstatus = val;
    });
  }

}
