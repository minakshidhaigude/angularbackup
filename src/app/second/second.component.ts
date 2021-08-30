import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserService } from '../dataser.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
info:any;
secdata:any;
  constructor(private obj1:DataserService,private router:Router) {
    this.obj1.crntdata.subscribe(data=>{
      console.log(data);
    })
   }

  ngOnInit(): void {
  }
  sendData(){
    this.secdata="reverse msg from second comp to first comp";
    this.obj1.changemsg(this.secdata);
    this.router.navigate(['first']);
    
  }

}
