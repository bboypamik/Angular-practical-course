import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./components/auth/auth.component";
import {LoginComponent} from "./components/login/login.component"
import {SignupComponent} from "./components/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";





@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,




  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,


  ],
  exports: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ]
})
export class AuthModule { }
