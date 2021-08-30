import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { UserserviceService } from './userservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  



 
/*fname="";
constructor(private ser:UserserviceService){
  console.log(this.ser.getdata());
  let data= this.ser.getdata();
  this.fname=data.fname;
  
}
  ngOnInit(){
    
  }*/
  constructor(private route:Router){

  }
 navigatetorxjs(){
    this.route.navigate(['rxjsoperator/13']);
//this.route.navigateByUrl('/rxjsoperator');
  }
  

 /* name = 'Minakshi';
   getname(){
    return 'manu' ;
  }
  obj = {name: 'soham',age: 3}
  arr = ['manu',12,'soham',3,'babu',1]
  a=100;
  b=2;
  siteurl=window.location.href;*/
  /*yourName = 'Minakshi Dhaigude';
  getName(names: string){
    alert(names);
  }*/
  /*myEvent(evt:any){
    console.log(evt);
  }*/
  /*getVal(val:any){
    console.log(val)
  }*/
  /*data = "minakshi dhaigude";
  data1=[
    {
    ln: 'angular11',
    marks:100
  },
  {
    ln: 'html5',
    marks:50
  }
 
]
parentcomponent(data1:any){
  console.log(data1)
}*/
/*today=Date.now()
salary = 50000
number1 = .76
pi:number = 3.14596*/
}
