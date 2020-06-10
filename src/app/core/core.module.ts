import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    HeaderComponent,



  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule,

  ],
  exports: [
    HeaderComponent,
  ],




})
export class CoreModule { }
