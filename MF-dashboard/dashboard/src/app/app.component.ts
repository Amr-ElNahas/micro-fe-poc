import { Component, Input, OnInit } from '@angular/core';
import { user$ } from '@SUMERGE/utility';
import { Subscription } from 'rxjs';
import { userReceived } from './app.service';
import * as singleSpa from 'single-spa';
import { accountNumber$ } from '@SUMERGE/utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  subscription!: Subscription;
  user!:any
  ngOnInit(): void {
    this.subscription = user$.subscribe((data: any) => {
      this.user=data.userData
      userReceived.user = data.userData;
      this.username = data.userData.username;
      this.balance = data.userData.balance;
      this.accountnumbers = data.userData.accountnumbers;
      console.log(data.userData.accountnumbers);
    });
  }
  @Input() username = ' ';
  balance: number = 0;
  accountnumbers: string[] = [];

  onChange(event:any){
    accountNumber$.next(event);
    singleSpa.navigateToUrl('/accountinfo');
  }
}
