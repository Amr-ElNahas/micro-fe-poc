import { Component } from '@angular/core';

@Component({
  selector: 'exchange-rate-component',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
})
export class ExchangeRateComponent {
  currency: String = 'USD';
  values: number[] = [1.4, 0.4, 1.6, 4.9, 6.9, 3.5];

  changeCurrency = (input: String) => {
    switch (input) {
      case 'USD':
        this.values = [1.4, 0.4, 1.6, 4.9, 6.9, 3.5];
        this.currency = 'USD';
        break;
      case 'SAR':
        this.values = [3.9, 0.5, 4.3, 1.5, 6.7, 2.6];
        this.currency = 'SAR';
        break;
      case 'EGP':
        this.values = [2.1, 4.4, 5.1, 0.2, 2.4, 1.7];
        this.currency = 'EGP';
        break;
    }
  };
}
