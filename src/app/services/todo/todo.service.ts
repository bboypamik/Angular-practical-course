import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TodoService{



  constructor(private http: HttpClient) {
  }

  getToDoList(userId) {
    return this.http.get<any[]>('http://ng-todo.local/get-todos/'+ userId);
  }

  delete(id) {
    const options = {responseType: 'text' as 'json'};
    return this.http.get<any>('http://ng-todo.local/delete/'+id, options);
  }

  // add(item, userId) {
  //   console.log(item, userId);
  //   return this.http.post<any>('http://ng-todo.local/add-new-item.php', {item, userId}).pipe(map(data => {
  //     console.log(data);
  //   }));
  // }



}
