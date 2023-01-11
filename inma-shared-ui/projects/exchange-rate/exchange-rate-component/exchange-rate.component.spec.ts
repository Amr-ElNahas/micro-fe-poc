import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateComponent } from './exchange-rate.component';

describe('ExchangeRateComponent', () => {
  let component: ExchangeRateComponent;
  let fixture: ComponentFixture<ExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeRateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ExchangeRateComponent', () => {
    it('currency button is visible', () => {
    expect(fixture.debugElement.query(By.css('#currencyButton'))).toBeDefined();
  });
  });
  describe('ExchangeRateComponent', () => {
    it('currency button text is shown correctly', () => {
      const hTMLElements: HTMLElement = fixture.nativeElement;
    const currencyButton = hTMLElements.querySelector('#currencyButton')!;
    expect(currencyButton.textContent).toEqual(component.currency.toString());
  });
  });
});
