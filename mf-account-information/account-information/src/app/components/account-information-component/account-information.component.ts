import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from "@coreServices/accounts.service";

@Component({
  selector: 'account-information-component',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css'],
})
export class AccountInformationComponent implements OnInit {

  constructor(private accountsService: AccountsService)
  {
  }
  ngOnInit(): void {
    this.accountInformation=this.accountsService.getAccountInformation(this.accountNumber);
    this.accountBalance = this.accountInformation.balance;
    this.cardNumber = this.accountInformation.cardnumber
  }
  @Input() accountNumber = '651651';
  @Input() username = 'ahmed aly';
  accountInformation:any;
  accountBalance = 0
  cardNumber = ""
}

