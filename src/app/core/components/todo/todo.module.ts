import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import {TodoComponent} from "./todo.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];


@NgModule({
  declarations: [
    TodoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [RouterModule],


})
export class TodoModule { }
