import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {
  courses = ['Engineering','Medical','Architecture','Biotech','MSW'];
  constructor(private fb: FormBuilder) { }

  userform:any = FormGroup;

  ngOnInit(): void {
    this.userform = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required,Validators.maxLength(8)],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],
      selectcourse:['',Validators.required],
      gender:['',Validators.required],
    })
  }
  onsubmit(){
   console.log(this.userform.value);
  }

}
