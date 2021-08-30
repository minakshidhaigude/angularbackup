import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  pdata="This is the message from parent to child";
  childdata="This data from parent to child";
  datapar:any='';
  constructor() { }
  @ViewChild(ChildComponent) vchobj:any ;
  ngOnInit(): void {
  }
  cemitdata(ev:any){
    console.log(ev);
    this.datapar=ev;
    console.log(this.datapar);
  }
  ngAfterViewInit(){
    console.log(this.vchobj.viewchdata);
  }

}
