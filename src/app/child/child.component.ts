import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
parentdata:any;
chdata="This data from child to parent";
viewchdata = "This data from viewchild";
  constructor() { }
  @Input()cdata:any;
  @Output() event = new EventEmitter();
  ngOnInit(): void {
    console.log(this.cdata);
    this.parentdata= this.cdata;
  }
addevent(){
  this.event.emit(this.chdata);
}
}
