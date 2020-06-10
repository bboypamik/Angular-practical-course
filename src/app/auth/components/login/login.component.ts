import {AuthService} from "../../../core/services";

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';


@Component({
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  isSuccessful = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }


    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(data => {
        if (data) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.isSuccessful = false;
        }

      },
      error => {
        this.error = error;
        this.loading = false;
        this.isSuccessful = false;
      });
  }
}



