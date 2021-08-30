import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserService } from '../dataser.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   info:any;
   secdata:any;
   constructor(private obj:DataserService,private router:Router) { 
    this.obj.crntdata.subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }
  Sendfromfirst(){
    this.info = "hello this message from first component";
    this.obj.changemsg(this.info);
    this.router.navigate(['second']);
  }

}
