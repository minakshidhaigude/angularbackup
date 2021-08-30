import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  getdata(){
    return{
      fname:'sayali',
      age:23,
      id:100
    }
  }
}
