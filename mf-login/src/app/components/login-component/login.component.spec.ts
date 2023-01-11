import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import usersData from '@store/users-data/users.json';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { ValidationErrors} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`appRoute has default value`, () => {
    expect(component.appRoute).toEqual(`/dashboard`);
  });

  it(`usersfile imported correctly`, () => {
    expect(component.users).toEqual(usersData);
  });

  it(`isAuth has default value`, () => {
    expect(component.isAuth).toEqual(false);
  });

  it(`hide password as default`, () => {
    expect(component.hide).toEqual(true);
  });
  it(`should render email login input`, () => {
    expect(
      fixture.debugElement.query(By.css('#email-container')).nativeElement
    ).toBeTruthy();
  });
  it(`should render password login input`, () => {
    expect(
      fixture.debugElement.query(By.css('#password-container')).nativeElement
    ).toBeTruthy();
  });
  it(`should render login button`, () => {
    expect(
      fixture.debugElement.query(By.css('#loginbtn')).nativeElement
    ).toBeTruthy();
  });
  it('should display error', () => {
    component.Email.setErrors({ required: true } as ValidationErrors);
    component.Email.markAsTouched();
    fixture.detectChanges();
    const matErrorEl: HTMLElement = fixture.debugElement.query(
      By.css('#error-msg')
    ).nativeElement;
    expect(matErrorEl).toBeTruthy();
  });
});
