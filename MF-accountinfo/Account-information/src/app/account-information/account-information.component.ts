import { Component, Input, OnInit } from '@angular/core';
import { getaccountinfo } from "../services/getaccountinfo";

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css'],
})
export class AccountInformationComponent implements OnInit {
  ngOnInit(): void {
    this.accountinfo=getaccountinfo(this.accountnumber)
    this.accountbalance = this.accountinfo.balance;
    this.cardnumber = this.accountinfo.cardnumber
  }
  @Input() accountnumber = '651651';
  @Input() username = 'ahmed aly';
  accountinfo:any;
  accountbalance = 0
  cardnumber = ""
}

