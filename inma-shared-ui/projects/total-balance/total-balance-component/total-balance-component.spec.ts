import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBalanceComponentComponent } from './total-balance-component.component';

describe('TotalBalanceComponentComponent', () => {
  let component: TotalBalanceComponentComponent;
  let fixture: ComponentFixture<TotalBalanceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalBalanceComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalBalanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TotalBalanceComponentComponent', () => {
    it('user balance is visible', () => {
    expect(fixture.debugElement.query(By.css('#userBalance'))).toBeDefined();
  });
  });

  describe('TotalBalanceComponentComponent', () => {
    it('user balance text is correctly displayed', () => {
      const hTMLElements: HTMLElement = fixture.nativeElement;
    const currencyButton = hTMLElements.querySelector('#userBalance')!;
    expect(currencyButton.textContent).toEqual("Your balance is : "+ component.balance.toString());
  });
  });
});
