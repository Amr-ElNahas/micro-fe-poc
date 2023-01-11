import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as singleSpa from 'single-spa';
import { AuthenticationService } from '@coreServices/authentication.service';
import { UtilityService } from '@coreServices/utility.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  subscription!: Subscription;
  user!:any
  constructor(private utilityService:UtilityService, private authenticationService:AuthenticationService){

  }
  ngOnInit(): void {


      this.user=this.utilityService.user


      this.username = this.authenticationService.getUserName();
      this.balance = this.utilityService.totalbalance;
      this.accountNumbers = this.utilityService.accountnumber;


  }
  @Input() username = ' ';
  balance: number = 0;
  accountNumbers: string[] = [];

  onChange(event:any){
    this.utilityService.accountNumber$.next(event);
    singleSpa.navigateToUrl('/accountinfo');
  }
}
