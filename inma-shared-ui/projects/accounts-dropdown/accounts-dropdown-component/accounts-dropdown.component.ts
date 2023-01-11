import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'accounts-dropdown-component',
  templateUrl: './accounts-dropdown.component.html',
  styleUrls: ['./accounts-dropdown.component.css'],
})
export class AccountsDropdownComponent implements OnInit {
  @Input() userPassed!: {
    username: string;
    email: string;
    role: string;
    balance: number;
    accountNumbers: string[];
    accountNumber: string;
  };
  ngOnInit(): void {
    this.accountNumbers = this.accountNumberInput.split(',');
  }
  accountNumbers: string[] = [];
  @Input() accountNumberInput: string = '';
  @Output() onChange: EventEmitter<any>= new EventEmitter()
  OnChange = (accountNumber: string) => {
    this.userPassed.accountNumber = accountNumber;
    this.onChange.next({ accountNumber: this.userPassed })
  };
}
