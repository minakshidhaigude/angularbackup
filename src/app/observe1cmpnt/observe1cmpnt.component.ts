import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe1cmpnt',
  templateUrl: './observe1cmpnt.component.html',
  styleUrls: ['./observe1cmpnt.component.css']
})
export class Observe1cmpntComponent implements OnInit {
subscription:any;
  constructor() { }

  ngOnInit(): void {
    const observable = new Observable(observer=>{
      try{
        observer.next('first value')
        observer.next('second value')
        setTimeout(() => {
         observer.next('async value')
         observer.complete();
         observer.next('value not send')
        }, 5000);
      }
      catch(err){
         observer.error(err);
      }
    }).subscribe((val)=>{
      this.subscription = val;
      console.log(this.subscription);
    })

  }

}
