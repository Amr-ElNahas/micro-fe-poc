import { Injectable } from '@angular/core';
import accounts from '@store/accounts-data/accounts.json'

@Injectable
(
  {providedIn: 'root'}
)
export class AccountsService {

 getAccountInformation(accountNumber: string) {
    for (var val of accounts) {
        if(val["accountnumber"]==accountNumber)
        {
            return val;
        }
      }
  return {
    accountnumber: "notfound",
    balance: 0,
    cardnumber: '0',
  };
}
}
