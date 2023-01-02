import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountsDropdownComponent } from "./accounts-dropdown.component";

@NgModule({
  declarations: [AccountsDropdownComponent],
  imports: [CommonModule],
    exports:[AccountsDropdownComponent,CommonModule],
})
export class AccountsDropdownModule { }
