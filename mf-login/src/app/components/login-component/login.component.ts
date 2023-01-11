import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import usersData from '@store/users-data/users.json';
import * as singleSpa from 'single-spa';
import { AuthenticationService } from '@loginServices/authentication.service';
import { LoginService } from '@loginServices/login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  appRoute = '/dashboard';
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

  constructor(private loginService: LoginService, private authenticationService:AuthenticationService) {}
  ngOnDestroy(): void {
    this.loginService.unsubscribe();
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
      this.authenticationService.login({
        isAuthenticated:true,
        username:user.username,
        role:user.role
      })
      this.loginService.user$.next({ userData: this.userPassed });
      this.isAuth = true;
      singleSpa.navigateToUrl(this.appRoute);
    }
  }
}
