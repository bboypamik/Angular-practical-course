import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  currentUser: any;

  constructor(private router: Router,
              private authService: AuthService) {
    this.title = 'ngTodo';
    this.authService.currentUser.subscribe(x => this.currentUser = x);

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login-form']);
  }

  ngOnInit(): void {
  }

}
