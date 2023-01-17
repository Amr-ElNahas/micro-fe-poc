import { By } from '@angular/platform-browser';
import { AccountsDropdownComponent } from './accounts-dropdown.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AccountsDropdownComponent', () => {
  let component: AccountsDropdownComponent;
  let fixture: ComponentFixture<AccountsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('AccountsDropdownComponent', () => {
    it('SelectAccountBtn is visible', () => {
      const hTMLElements: HTMLElement = fixture.nativeElement;
      const selectAccountBtn = hTMLElements.querySelector('#SelectAccountBtn')!;
      expect(
        fixture.debugElement.query(By.css('#selectAccountBtn'))
      ).toBeDefined();
    });
  });
  describe('AccountsDropdownComponent', () => {
    it('SelectAccountBtn text is correctly displayed', () => {
      const hTMLElements: HTMLElement = fixture.nativeElement;
      const selectAccountBtn = hTMLElements.querySelector('#SelectAccountBtn')!;
      expect(selectAccountBtn.textContent).toEqual('Account Select');
    });
  });
  describe('AccountsDropdownComponent', () => {
    it('account number list displays all the data', () => {
      const accountNumbersListDiv = fixture.debugElement.queryAll(
        By.css('#accountnNumbersList')
      );
      const accountNumbersListDivLength = accountNumbersListDiv.length;
      expect(accountNumbersListDivLength).toEqual(
        component.accountNumbers.length
      );
    });
  });
});
