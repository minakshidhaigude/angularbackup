import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() parent:EventEmitter<any>= new EventEmitter()
  @Input() hero:any

  constructor() { }

  ngOnInit(): void {
    //this.parent.emit({fn:'manali',age:25})
    //this.parent.emit('fun call from parent component')
    //console.log(this.hero)
  }
senddata(){
  let item ={fn:'manali',age:25}
  this.parent.emit(item)
}
}
