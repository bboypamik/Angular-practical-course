import {TodoService} from "../../services/todo/todo.service";
import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({

  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public isLoggedIn: Observable<any>;
  public user: any;
  public todos: {}[];
  public addItem: FormGroup;
  private newItem: object;
  public date;
  public currentMonth;
  public arrayOfDays;
  public firstDay;
  public selectedDate;


  public months = [
    ["January", 31],
    ["February", 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 31],
    ["December", 31]
  ];



  constructor(private router: Router,
              private authService: AuthService,
              public todoService: TodoService,
              private formBuilder: FormBuilder,
              private http: HttpClient
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.date = new Date();
    this.currentMonth = this.date.getMonth();
    this.arrayOfDays = Array(this.months[this.currentMonth][1]).fill(0).map((x,i)=>i+1);
    this.firstDay = new Date(this.date.getFullYear(), this.currentMonth, 1)
    this.firstDay = Array(this.firstDay,).fill(0).map((x, i ) => null);
    this.arrayOfDays = this.firstDay.concat(this.arrayOfDays);
    this.selectedDate = this.date;

    if (!this.user){
      this.router.navigate(['/login-form']);
    }

    this.todoService.getToDoList(this.user.id).subscribe(data => {
      this.todos = data;
      console.log(data);

    });

  }

  get f() {
    return this.addItem.controls;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.currentUserValue;

    if (!this.isLoggedIn) {
      this.router.navigate(['/login-form']);
    }


    this.addItem = this.formBuilder.group({
      addNewItem: ['', Validators.required],
      todoDate: [this.selectedDate]
    });

  }

  onDelete(id, index) {
    this.todoService.delete(id).subscribe(data => {
      this.todos.splice(index, 1);
    });

  }

  changeMonth(num: number) {
     this.currentMonth += num;
      this.arrayOfDays = Array(this.months[this.currentMonth][1]).fill(0).map((x, i) => i+1);
    this.firstDay = new Date(this.date.getFullYear(), this.currentMonth, 1).getDay();
    this.firstDay = Array(this.firstDay,).fill(0).map((x, i ) => null)
    this.arrayOfDays = this.firstDay.concat(this.arrayOfDays);
    };

  getTodosByDay(day, currentMonth, year) {
    this.selectedDate = new Date(year, currentMonth, day);
  }

  addNewItem() {

    const body = new URLSearchParams();
    body.set('item', this.f.addNewItem.value);
    body.set('userId', this.user.id);
    body.set('date_time', this.selectedDate.toISOString());
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post<any>('http://ng-todo.local/add-new-item', body.toString(), options).subscribe({
      next: data => {
        this.newItem = {id: data, user_id: this.user.id, todo_item: this.f.addNewItem.value, date_time: this.selectedDate };
        this.todos.push(this.newItem);

        this.addItem.reset()
        console.log(this.todos);

      }
    });
  }

}
