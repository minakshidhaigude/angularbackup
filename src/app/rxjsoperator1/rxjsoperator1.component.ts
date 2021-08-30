import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,of,from} from 'rxjs';
import { count, filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-rxjsoperator1',
  templateUrl: './rxjsoperator1.component.html',
  styleUrls: ['./rxjsoperator1.component.css']
})
export class Rxjsoperator1Component implements OnInit {
//router params gives direct value
  constructor(private actroute:ActivatedRoute) { 
    let data = this.actroute.snapshot.params.id;
    console.log('router params value'+ data);

    //paramMap give observable
    this.actroute.paramMap.subscribe((dt)=>{
      let data1 = dt.get('id');
      console.log('parmap value'+ data1);
    })
    
  }

  ngOnInit(): void {
    const person:any={
      name:'minakshi'
    };
    const personobj: Observable<string> = of('manu');
    //personobj.subscribe((data)=>{console.log(data)});

    const personprm: Promise<any> = Promise.resolve(person);
    const personobs: Observable<any> = from(personprm);
    //personobs.subscribe(data => console.log(data));

    const source = of('soham');
    source
    .pipe(
      map(name => name.toUpperCase())
    ).subscribe(data => console.log(data));

let test1 = of(10,33,45)
let case1 = test1.pipe(
  filter(x => x%2 === 0)
)
case1.subscribe(x=>console.log('op of test1 filter operator:' + x));
    
let test2 = of(10,20,30,40,50)
let case2 = test2.pipe(
  map(x => x*2),
  filter(x => x > 60)
)
case2.subscribe(x => console.log('output of filter:'+ x));

let case3 = test2.pipe(count())
case3.subscribe(x => console.log('the count is:' + x))

  }

}
