
import { Component, OnInit } from '@angular/core';
import { dataType } from '../datainterface';
import {Address } from '../address';

interface combined extends dataType,Address{

}
interface order{
  totalprice(price:number,qty:number):number
}

interface Customer{
  [index:number]:string
}
let customerarray:Customer = ['soham','manu','didi'];
console.log(customerarray[1]);

@Component({
  selector: 'app-intercmpnt',
  templateUrl: './intercmpnt.component.html',
  styleUrls: ['./intercmpnt.component.css']
})
export class IntercmpntComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {}
    getData(){
    const data:combined ={
      name:'soham',
      id:123,
      indian:true,
      street:'nira moragaon road',
      city:'pune'
      
    }
    return data;
   }    
   calculatetotal:order={
    totalprice(price:number,qty:number){
    let newprice = price*qty;
      return newprice;
    }
   }
}
     

