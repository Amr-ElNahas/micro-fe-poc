import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { UtilityService } from './services/utility.service';

describe('account information', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let utilityService: jasmine.SpyObj<any>;

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: (_key: string, value: string) => {},
        removeItem: (key: string) => {},
        length,
        key: (index: number) => {
          return '';
        },
        clear: () => {},
        getItem: (user: string) => {
          return JSON.stringify({
            userName: '',
            role: 'employee',
          });
        },
        currentUser: JSON.stringify({
          userName: '',
        }),
      },
    });

    const activatedRouteStub = () => ({});
    const routerStub = () => ({});
    utilityService = jasmine.createSpyObj('UtilityService', ['getdata']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: UtilityService, useValue: utilityService },
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should render account info`, () => {
    expect(fixture.debugElement.query(By.css('#accountinfo'))).toBeTruthy();
  });
  it(`should render total balance`, () => {
    expect(fixture.debugElement.query(By.css('#totalbalance'))).toBeTruthy();
  });
  it(`should render exchange rate`, () => {
    expect(fixture.debugElement.query(By.css('#exrate'))).toBeTruthy();
  });
});
