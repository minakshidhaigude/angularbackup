import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  userdata:any;
  constructor(private myser: CommonserviceService) { 
  }

  ngOnInit(): void {
    this.myser.getdata().subscribe(
      (res)=>{
        this.userdata=res;
        console.log(this.userdata)
      },
      (err)=>{
        console.log('got error')
      }
    )
  }

}
