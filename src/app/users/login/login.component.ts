import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }

  //ngOnInit(): void {}
  public name = 'minakshi';
  imgurl = './assets/manu.jpg';
  onsubmit(){
    console.log("hello");
  }
currval = "";
  getvalue(val:any){
   this.currval=val;
  }
  show="green";
  color="yellow";
  data =['manu','didi','soham'];
  data1=[
    {
    fname:"madhuri",
    age:25
    },
    {
      fname:"minakshi",
      age:20
    },
    {
      fname:"soham",
      age:3
    }
]
    
getUserValue(value:any){
  console.log(value);
}
}
