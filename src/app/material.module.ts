import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

  const material = [
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
