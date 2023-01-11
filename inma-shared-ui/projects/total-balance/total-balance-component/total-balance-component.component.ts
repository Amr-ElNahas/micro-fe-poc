import { Component, Input } from '@angular/core';

@Component({
  selector: 'total-balance-component',
  templateUrl: './total-balance-component.component.html',
  styleUrls: ['./total-balance-component.component.css'],
})
export class TotalBalanceComponentComponent {
  @Input() balance = '';
}
