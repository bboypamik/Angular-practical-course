import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {

          this.router.navigate(['login-form'], {queryParams: { registered: true}});

        },
        error=> {
          this.error = error;
          this.loading = false;
        }
      )
  }
}
