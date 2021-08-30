import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-subjectcmpnt',
  templateUrl: './subjectcmpnt.component.html',
  styleUrls: ['./subjectcmpnt.component.css']
})
export class SubjectcmpntComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //create subject
    const subobj = new Subject();
    subobj.subscribe({
      next: (v) => console.log(`from subject value: ${v}` )
    });

    subobj.subscribe({
      next: (v) => console.log(`from subject value: ${v} `)
    });
    subobj.subscribe({
      next: (v) => console.log(`from subject value: ${v} `)
    });
    subobj.next("hello");
    subobj.complete();
    subobj.next("RXJS");
  
    //2.diff betn observable and subject
    const test = new Subject();
    test.subscribe({
      next: (v)=>console.log(v)
    });
    test.subscribe({
      next: (v)=>console.log(v)
    });

    let res = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(e => e.response));
    let subscr1 = res.subscribe(test);
    //let subscr2 = res.subscribe(a=>console.log(a));

    //behaviour subject
    const bhsub = new BehaviorSubject('testing behavior subject');
    bhsub.subscribe({
      next:(v)=>console.log(`observer A: ${v}`)
    });
    bhsub.next('hello bhsubject');
    bhsub.subscribe({
      next:(v)=>console.log(`observer B: ${v}`)
    });
    bhsub.next('last call to behavior subject');
  }

}
