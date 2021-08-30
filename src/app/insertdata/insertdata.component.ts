import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserService } from '../sharedata/studentser.service';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {
  passData:any;
  Earray:any = [];
  courses = ['Engineering','Medical','Architecture','Biotech','MSW'];
  constructor(private fb:FormBuilder,private stdser:StudentserService,private route:Router) { }
  userform:any = FormGroup;
  ngOnInit(): void {
    this.userform = this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      selectcourse:['',[Validators.required]],
      gender:['',[Validators.required]],
      usrname:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  onsubmit(){
    console.log(this.userform.value);
    this.passData = this.userform.value;
    this.Earray.push(this.passData);
    console.log(this.Earray);
    this.stdser.updatestdData(this.Earray);

    //this.route.navigate(['show']);
  }

}
