import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AccountInformationComponent } from './account-information.component';
import { By } from '@angular/platform-browser';
import { AuthenticationService } from '@coreServices/authentication.service';

describe('LoginComponent', () => {
  let component: AccountInformationComponent;
  let fixture: ComponentFixture<AccountInformationComponent>;
  let fakeAuthService: jasmine.SpyObj<AuthenticationService>;
  beforeEach(() => {
    const activatedRouteStub = () => ({});
    const routerStub = () => ({});
    fakeAuthService = jasmine.createSpyObj('AuthenticationService', [
      'getUserName',
      'isSupervisor',
      'isEmployee',
      'getRole',
    ]);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AccountInformationComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: AuthenticationService, useValue: fakeAuthService },
        {
          provide: window,
          useValue: {
            localStorage: {
              getItem: (user: string) => {
                return JSON.stringify({
                  userName: '',
                });
              },
              currentUser: JSON.stringify({
                userName: '',
              }),
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(AccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should render information card`, () => {
    expect(fixture.debugElement.query(By.css('#informationcard'))).toBeTruthy();
  });
  it(`should render username`, () => {
    expect(
      fixture.debugElement.query(By.css('#informationusername')).nativeElement
    ).toBeTruthy();
  });
  it(`should render account number`, () => {
    expect(
      fixture.debugElement.query(By.css('#informationaccountnumber'))
        .nativeElement
    ).toBeTruthy();
  });
  it(`should render balance`, () => {
    expect(
      fixture.debugElement.query(By.css('#informationbalance')).nativeElement
    ).toBeTruthy();
  });
  it(`should render card number`, () => {
    expect(
      fixture.debugElement.query(By.css('#informationcardnumber')).nativeElement
    ).toBeTruthy();
  });
});
