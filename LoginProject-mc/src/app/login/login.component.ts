import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import usersData from '../Data/users.json';
import { user$ } from '@SUMERGE/utility';
import { Subscription } from 'rxjs';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  appRoute = 'dashboard';
  subscription!: Subscription;
  Email = new FormControl('', [Validators.required, Validators.email]);
  Password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  users = usersData;
  usersList: {
    username: string;
    email: string;
    password: string;
    role: string;
    balance: number;
    accountnumbers: string[];
  }[] = this.users;
  userPassed!: {
    username: string;
    email: string;
    role: string;
    balance: number;
    password?: string;
    accountnumbers: string[];
  };
  isAuth = false;
  hide = true;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = user$.subscribe((data: any) => {
      // console.log(data);
    });
  }

  getErrorMessage() {
    if (this.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    var user = this.usersList.find(
      (user) =>
        user.email == this.Email.value && user.password == this.Password.value
    );
    if (user) {
      this.userPassed = user;
      delete this.userPassed.password;
      user$.next({ userData: this.userPassed });
      this.isAuth = true;
      singleSpa.navigateToUrl('/dashboard');
      //console.log(user);
    }
  }
}
