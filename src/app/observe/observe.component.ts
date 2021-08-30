
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {
    
  constructor() { }

  ngOnInit(): void {
    const pr = new Promise((resolve)=>{
      console.log('done');
      setTimeout(() => {
        console.log(' yep');
      }, 3000);
    });
    pr.then((data)=>{
       console.log(data);
    });
  }
   

}
