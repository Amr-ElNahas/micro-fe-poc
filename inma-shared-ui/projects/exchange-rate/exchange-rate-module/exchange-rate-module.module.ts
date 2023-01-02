import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateComponent } from './exchange-rate.component'



@NgModule({
  declarations: [ExchangeRateComponent],
  imports: [CommonModule],
    exports:[ExchangeRateComponent,CommonModule],
})
export class ExchangeRateModuleModule { }
