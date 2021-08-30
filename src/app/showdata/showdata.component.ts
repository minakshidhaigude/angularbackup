import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserService } from '../sharedata/studentser.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  stdData:any;
  ​
  tableheader:any=['First Name','Last Name','Email','Course','Gender','UserName']
  constructor(private ser:StudentserService,private route:Router) {
    this.ser.crtdata.subscribe(data=>{
      console.log(data);
      this.stdData =data;
    })
   }

  ngOnInit(): void {
  }
  UpdateData(data:any){
    console.log(data);
    //this.ser.updatestdData(data);
  }
  DeleteData(data:any){
    console.log(data)
   var txt; 
  if (confirm("Are you sure to delete this data?")) {
    txt = "You pressed OK!";
    this.route.navigate(['show']);
  } else {
    txt = "You pressed Cancel!";
    this.route.navigate(['home']);
  }

  }

}
