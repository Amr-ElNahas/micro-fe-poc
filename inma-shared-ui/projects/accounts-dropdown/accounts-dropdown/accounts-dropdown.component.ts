import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-accounts-dropdown',
  templateUrl: './accounts-dropdown.component.html',
  styleUrls: ['./accounts-dropdown.component.css'],
})
export class AccountsDropdownComponent implements OnInit {
  // subscription!: Subscription;
  @Input() userPassed!: {
    username: string;
    email: string;
    role: string;
    balance: number;
    accountnumbers: string[];
    accountNumber: string;
  };
  ngOnInit(): void {
    this.accountnumbers = this.accountN.split(',');
    // this.userPassed = userReceived.user;
    // this.subscription = accountNumber$.subscribe((data: any) => {
    //   // console.log(data);
    // });
  }
  accountnumbers: string[] = [];
  @Input() accountN: string = '';
  @Output() onChange: EventEmitter<any>= new EventEmitter()
  OnChange = (accountNumber: string) => {
    this.userPassed.accountNumber = accountNumber;
    this.onChange.next({ accountNumber: this.userPassed })
  };
}
