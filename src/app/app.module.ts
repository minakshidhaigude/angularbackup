
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider'
import { DataComponent } from './data/data.component';
import { CommonserviceService } from './commonservice.service';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserveComponent } from './observe/observe.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomstyleDirective } from './customstyle.directive';
import { UserserviceService } from './userservice.service';
import { ObservecomponentComponent } from './observecomponent/observecomponent.component';
import { Observe1cmpntComponent } from './observe1cmpnt/observe1cmpnt.component';
import { IntercmpntComponent } from './intercmpnt/intercmpnt.component';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';
import { Rxjsoperator1Component } from './rxjsoperator1/rxjsoperator1.component';
import { SubjectcmpntComponent } from './subjectcmpnt/subjectcmpnt.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { MyexamplePipe } from './myexample.pipe';





@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DataComponent,
    FormComponent,
    ObserveComponent,
    ReactivefrmComponent,
    PageNotFoundComponent,
    CustomstyleDirective,
    ObservecomponentComponent,
    Observe1cmpntComponent,
    IntercmpntComponent,
    RxjsoperatorComponent,
    Rxjsoperator1Component,
    SubjectcmpntComponent,
    AdminComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    InsertdataComponent,
    ShowdataComponent,
    UpdatedataComponent,
    MyexamplePipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  exports: [],
  providers: [CommonserviceService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
