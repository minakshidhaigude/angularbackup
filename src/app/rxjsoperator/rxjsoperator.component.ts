import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-rxjsoperator',
  templateUrl: './rxjsoperator.component.html',
  styleUrls: ['./rxjsoperator.component.css']
})
export class RxjsoperatorComponent implements OnInit {
  datastream:any;
  
  constructor() { 
    this.datastream =from([1,2,3,4,5]);
    console.log(this.datastream);
    this.datastream.subscribe((res:any)=>{console.log(res)})

    let data = this.datastream.pipe(
      //map(x => x + 2 ),
      //filter(x => x>5)
      )
      console.log(data);
      data.subscribe((res:any)=>{console.log(res)})
    
    
  }

  ngOnInit(): void {
  }

}