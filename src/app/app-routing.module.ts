import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {TodoComponent} from "./components/todo/todo.component";

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'login-form', component: LoginComponent},
  {path: 'login-form/app-signup', component: SignupComponent },
  {path: 'app-todo', loadChildren:() =>import('./todo.module').then(m=> m.TodoModule)},
  {path: '**', redirectTo: '/', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
