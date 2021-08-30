import { Component, OnInit } from '@angular/core';
import { DummyserviceService } from '../dummyservice.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
   data:any;
  constructor(private dser:DummyserviceService) { 
    this.dser.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
