import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { user$ } from '@SUMERGE/utility';

@Injectable({ providedIn: 'root' })
export class LoginService {
  subscription!: Subscription;
  user$ = user$;
  constructor() {
    this.subscribe();
  }
  subscribe() {
    this.subscription = user$.subscribe((data: any) => {
      console.log(data);
    });
  }
  unsubscribe (){
    this.subscription.unsubscribe();
  }
}
