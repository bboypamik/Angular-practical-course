import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./components/login/login.component"
import {SignupComponent} from "./components/signup/signup.component";

import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material.module";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ]
})
export class AuthModule { }
