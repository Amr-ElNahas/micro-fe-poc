import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAuthenticated() {
    if (this.currentUserValue) {
      return true;
    } else {
      return false;
    }
  }

  public getUserName() {
    const result = this.currentUserValue.username;
    return result;
  }

  public isSuperVisor() {
    return this.currentUserValue.role === 'supervisor';
  }

  public isEmployee() {
    return this.currentUserValue.role === 'employee';
  }
  public getRole() {
    return this.currentUserValue.role;
  }
}
