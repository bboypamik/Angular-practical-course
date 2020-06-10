import {TodoService} from "../../services/todo/todo.service";
import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";


@Component({

  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  public isLoggedIn: Observable<any>;
  public user: any;
  public todos: object;
  public addItem: FormGroup;



  constructor(private router: Router,
              private authService: AuthService,
              private todoService: TodoService,
              private formBuilder: FormBuilder,
              private http: HttpClient
) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit(): void {
    this.isLoggedIn = this.authService.currentUserValue;

    if (!this.isLoggedIn){
      this.router.navigate(['/login-form']);
    }


   this.todoService.getToDoList(this.user.id).subscribe(data=>{
     this.todos = data;

   })

    this.addItem = this.formBuilder.group({
      addNewItem: ['', Validators.required]
    })

  }

  get f() { return this.addItem.controls;}

  onDelete(id) {
  this.todoService.delete(id).subscribe(data => {});



  }


  addNewItem() {

    console.log(this.f)

    this.http.post<any>('http://ng-todo.local/add-new-item.php', {item: this.f.addNewItem.value, userId: this.user.id}).subscribe({
      next: data => {
        console.log(data)
      }
    });

  }


}
