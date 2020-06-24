import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";

import {AuthModule} from "./auth.module";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
