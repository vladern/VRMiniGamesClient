import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorResponse } from 'src/app/shared/error/domain/error-response';
import { LoginGateway } from 'src/app/login/domain/gateway/login.gateway';
import { LoginResponse } from 'src/app/login/domain/login-response.model';
import { GraphQLModule } from 'src/app/graphql.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material-module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { InputComponent } from '../shared/components/input/input.component';
import { ErrorComponent } from '../shared/components/error/error.component';
import { LoginUseCase } from './application/login.use-case';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page: LoginPage;
  const validEmail = 'test@example.com';
  const validPassword = 'password';
  const loginUseCaseMock = {
    login: (email: string, password: string) => {
      if (email === validEmail && password === validPassword) {
        return new Observable<LoginResponse>((r) => r.next({ token: 'aaaaa' }));
      }
      return new Observable<ErrorResponse[]>((r) =>
        r.error([{ message: 'Email or password are not valid' }])
      );
    },
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        GraphQLModule,
        HttpClientModule,
        ButtonComponent,
        InputComponent,
        ErrorComponent
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: LoginGateway, useValue: loginUseCaseMock },
        { provide: Router, useValue: routerSpy },
        LoginUseCase,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    page = new LoginPage(fixture);

    // 1st change detection triggers ngOnInit which gets a hero
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();
    });
  });

  class LoginPage {
    get submitBtn() {
      return this.query<HTMLButtonElement>('.qa-submit-button button');
    }
    get emailInput() {
      return this.query<HTMLInputElement>('.qa-email-input input');
    }
    get passwordInput() {
      return this.query<HTMLInputElement>('.qa-password-input  input');
    }

    get errorMessages() {
      return this.query<HTMLElement>('.qa-error-messages');
    }

    submitSpy: jasmine.Spy;
    loginUseCaseSpy: jasmine.Spy;
    routerSpy = routerSpy;

    constructor(someFixture: ComponentFixture<LoginComponent>) {
      // spy on component's `submit()` method
      const someComponent = someFixture.componentInstance;
      this.submitSpy = spyOn(someComponent, 'submit').and.callThrough();
      this.loginUseCaseSpy = spyOn(loginUseCaseMock, 'login').and.callThrough();
    }

    //// query helpers ////
    private query<T>(selector: string): T {
      return fixture.nativeElement.querySelector(selector);
    }
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('As user I want to login with my email and password data', fakeAsync(() => {
    const expectedLoginFormValue = {
      email: validEmail,
      password: validPassword,
    };
    page.emailInput.value = expectedLoginFormValue.email;
    page.emailInput.dispatchEvent(new Event('change'));
    page.passwordInput.value = expectedLoginFormValue.password;
    page.passwordInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    page.submitBtn.click();
    tick();
    expect(page.submitSpy).toHaveBeenCalledOnceWith(expectedLoginFormValue);
    expect(page.loginUseCaseSpy).toHaveBeenCalledOnceWith(
      expectedLoginFormValue.email,
      expectedLoginFormValue.password
    );
  }));

  it('As user I want to be redirected to home page if my login credentials are valid', fakeAsync(() => {
    const expectedLoginFormValue = {
      email: validEmail,
      password: validPassword,
    };
    page.emailInput.value = expectedLoginFormValue.email;
    page.emailInput.dispatchEvent(new Event('change'));
    page.passwordInput.value = expectedLoginFormValue.password;
    page.passwordInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    page.submitBtn.click();
    tick();
    const spy = routerSpy.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should nav to home page').toBe('/home');
  }));

  it('As user I want to be notified if my email or password are wrong', fakeAsync(() => {
    const notValidEmail = 'error@test.com';
    const notValidPassword = 'error';
    const expectedLoginFormValue = {
      email: notValidEmail,
      password: notValidPassword,
    };
    page.emailInput.value = expectedLoginFormValue.email;
    page.emailInput.dispatchEvent(new Event('change'));
    page.passwordInput.value = expectedLoginFormValue.password;
    page.passwordInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    page.submitBtn.click();
    tick();
    fixture.detectChanges();
    expect(page.loginUseCaseSpy).toHaveBeenCalledOnceWith(
      expectedLoginFormValue.email,
      expectedLoginFormValue.password
    );
    expect(page.errorMessages.textContent).toEqual('Email or password are not valid');
  }));
});
