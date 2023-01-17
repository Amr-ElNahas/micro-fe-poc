import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalBalanceComponentComponent } from './total-balance-component.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TotalBalanceComponentComponent],
  imports: [CommonModule, MatCardModule],
  exports: [TotalBalanceComponentComponent, CommonModule],
})
export class TotalBalanceComponentModule {}
