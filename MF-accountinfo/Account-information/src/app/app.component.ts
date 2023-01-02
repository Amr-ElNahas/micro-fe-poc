import { Component, OnInit } from '@angular/core';
import { accountNumber$ } from '@SUMERGE/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  username:string=""
  accountnumber:string=""
  totalbalance:Number=0;

  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = accountNumber$.subscribe((data: any) => {
      console.log("abadeer",data["accountNumber"]);
      this.username=data["accountNumber"]["username"]
      this.accountnumber=data["accountNumber"]["accountNumber"]
      this.totalbalance=data["accountNumber"]["balance"]
      
    });
    
  }
  title = 'Account-information';
}
