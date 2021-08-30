import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MydirectiveDirective } from './mydirective.directive';
import { CustompipePipe } from './custompipe.pipe'



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    MydirectiveDirective,
    CustompipePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent

  ]
})
export class UsersModule { }
