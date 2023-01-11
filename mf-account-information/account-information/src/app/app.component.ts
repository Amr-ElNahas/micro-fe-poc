import { Component, OnInit } from '@angular/core';
import { accountNumber$ } from '@SUMERGE/utility';
import { Subscription } from 'rxjs';
import {UtilityService} from "@coreServices/utility.service"
import { AuthenticationService } from '@coreServices/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private utilityService: UtilityService,private authenticationService:AuthenticationService) {}
  username:string=""

  accountNumber:string=""
  totalBalance:Number=0;

  subscription!: Subscription;
  ngOnInit(): void {



    this.username=this.authenticationService.getUserName()
    this.accountNumber=this.utilityService["accountNumber"]
    this.totalBalance=this.utilityService["totalBalance"]

  }
  title = 'Account-information';

  getRole(){
    return this.authenticationService.getRole()
  }
  isEmployee(){
    return this.authenticationService.isEmployee()
  }
}
