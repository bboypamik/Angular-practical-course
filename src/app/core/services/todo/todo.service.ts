import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TodoService{


  constructor(private http: HttpClient) {
  }

  getToDoList(userId) {
    return this.http.get<any[]>('http://ng-todo.local/todo.php?id='+ userId);
  }

  delete(id) {
    return this.http.get<any>('http://ng-todo.local/delete.php?id='+ id);

  }

  add(item, userId) {
    console.log(item, userId);
    return this.http.post<any>('http://ng-todo.local/add-new-item.php', {item, userId}).pipe(map(data => {
      console.log(data);
    }));
  }
}
