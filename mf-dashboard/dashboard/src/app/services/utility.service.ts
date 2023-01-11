import { Injectable } from '@angular/core';
import{user$,  accountNumber$} from '@SUMERGE/utility';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  subscription!: Subscription;
  username:string=""
  accountnumber:any
  totalbalance:number=0;
  user:any

  accountNumber$:any


  constructor() {
    this.getData()
   }

  getData(){
    this.subscription = user$.subscribe((data: any) => {

      this.username=data["userData"]["username"]
      this.accountnumber=data["userData"]["accountnumbers"]
      this.totalbalance=data["userData"]["balance"]
      
      this.user=data["userData"]



    })
    this.accountNumber$=accountNumber$

  }
}
