import { Injectable } from '@angular/core';
import { accountNumber$ } from '@SUMERGE/utility';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  subscription!: Subscription;
  username: string = '';
  accountNumber: string = '';
  totalBalance: Number = 0;

  constructor() {
    this.getdata();
  }
  getdata() {
    this.subscription = accountNumber$.subscribe((data: any) => {
      this.username = data['accountNumber']['username'];
      this.accountNumber = data['accountNumber']['accountNumber'];
      this.totalBalance = data['accountNumber']['balance'];
    });
  }
}
