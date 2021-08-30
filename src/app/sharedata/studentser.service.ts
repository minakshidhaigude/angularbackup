import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserService {
  //to get the data from insert comp.
private stdData = new BehaviorSubject('student');
crtdata = this.stdData.asObservable();

//to share data to update comp
perstdData:any=[];
 private stddt= new BehaviorSubject('hello perstdData');
 perstdUpdate= this.stddt.asObservable();

  constructor() { }
  updatestdData(msg:any){
    this.stdData.next(msg)
  }

  sendDatatoUpdate(msg1:any){
    this.stddt.next(msg1)

  }
}
