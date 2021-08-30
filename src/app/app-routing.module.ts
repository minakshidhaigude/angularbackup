import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { FirstComponent } from './first/first.component';

import { FormComponent } from './form/form.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ObserveComponent } from './observe/observe.component';
import { Observe1cmpntComponent } from './observe1cmpnt/observe1cmpnt.component';
import { ObservecomponentComponent } from './observecomponent/observecomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { Rxjsoperator1Component } from './rxjsoperator1/rxjsoperator1.component';
import { SecondComponent } from './second/second.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { SubjectcmpntComponent } from './subjectcmpnt/subjectcmpnt.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';





const routes: Routes = [
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'reactivefrm',
    component:ReactivefrmComponent
  },
  {
    path:'rxjsoperator/:id',
    component:Rxjsoperator1Component
  },
  {
    path:'subject',component:SubjectcmpntComponent
  },
  {path:'observe',component:ObservecomponentComponent},
  {path:'admin',component:AdminComponent, canActivate:[AdminGuardGuard]},
  {path:'parent',component:ParentComponent},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'pagenf',component:PageNotFoundComponent},
  {path:'obs1',component:Observe1cmpntComponent},
  //{path:'insert',component:InsertdataComponent},
  //{path:'show',component:ShowdataComponent},
  //{path:'update',component:UpdatedataComponent},
  
  {
    path:'**',redirectTo:'form'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
