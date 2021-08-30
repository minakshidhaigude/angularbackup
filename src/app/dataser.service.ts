import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserService {
 private sermsg = new BehaviorSubject('by default service message');
 crntdata = this.sermsg.asObservable();
  constructor() { }

  changemsg(msg:any){
   this.sermsg.next(msg);
  }
}
