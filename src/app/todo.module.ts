import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import {TodoComponent} from "./components/todo/todo.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
];

@NgModule({
  declarations: [
    TodoComponent,
    ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule

  ],

  exports: [RouterModule],


})
export class TodoModule { }
