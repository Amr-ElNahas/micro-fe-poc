import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AccountInformationComponent } from './components/account-information-component/account-information.component';
import {ExchangeRateModuleModule} from 'inma-shared-ui'
import {TotalBalanceComponentModule} from 'inma-shared-ui'

@NgModule({
  declarations: [
    AppComponent,
    AccountInformationComponent,
  ],
  imports: [BrowserModule, MatCardModule,
    ExchangeRateModuleModule,
    TotalBalanceComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
