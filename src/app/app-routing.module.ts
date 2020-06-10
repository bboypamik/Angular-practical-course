import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";

import {TodoComponent} from "./core/components/todo/todo.component";




const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'login-form', component: LoginComponent},
  {path: 'login-form/app-signup', component: SignupComponent },
  {path: 'app-todo', loadChildren:() =>import('./core/components/todo/todo.module').then(m=> m.TodoModule)},
  {path: '**', redirectTo: '/', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
