import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserService } from '../sharedata/studentser.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {
  updateform:any = FormGroup;
  allstdData:any;
  datafrmshwData:any;
  courses = ['Engineering','Medical','Architecture','Biotech','MSW'];
  constructor(private sers:StudentserService,private fb:FormBuilder,private router:Router){
    this.sers. crtdata.subscribe(res=>{
      console.log(res);
      this.allstdData= res;
    })

      //this data from showdata comp

      this.sers.perstdData.subscribe((res1:any)=>{
        this.datafrmshwData=res1;
        console.log(this.datafrmshwData);
      
        this.updateform = this.fb.group({
          fname:[{value:'this.datafrmshwData.fname',disabled:true},[Validators.required]],
          lname:[{value:'this.datafrmshwData.lname',disabled:true},[Validators.required]],
          email:[{value:'this.datafrmshwData.email',disabled:true},[Validators.required,Validators.email]],
          selectcourse:['this.datafrmshwData.selectcourse',[Validators.required]],
          gender:[{value:'this.datafrmshwData.gender',disabled:true},[Validators.required]],
          usrname:['this.datafrmshwData.usrname',[Validators.required]],
          password:['this.datafrmshwData.password',[Validators.required]],
        })
      })
   }
   
  ngOnInit(): void {
  }

  onupdate(){
    console.log(this.updateform.value);
    console.log(this.allstdData);
    for(let i=0;i<this.allstdData.length;i++){
     if(this.allstdData[i].fname == this.datafrmshwData.fname &&
      this.allstdData[i].lname == this.datafrmshwData.lname &&
      this.allstdData[i].email == this.datafrmshwData.email &&
      this.allstdData[i].gender == this.datafrmshwData.gender){

        this.allstdData[i].selectcourse = this.updateform.value.selectcourse;
        this.allstdData[i].usrname=this.updateform.value.usrname;
        this.allstdData[i].password=this.updateform.value.password;
      }

      this.sers.updatestdData(this.allstdData);
      this.router.navigate(['show']);
    }
    
  }
  

}
