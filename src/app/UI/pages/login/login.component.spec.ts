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
import { LoginGateway } from 'src/app/domain/models/login/gateway/login.gateway';
import { LoginResponse } from 'src/app/domain/models/login/login-response.model';
import { GraphQLModule } from 'src/app/graphql.module';
import { CommonUIModule } from '../../common/common.module';
import { MaterialModule } from '../../material-module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page: LoginPage;
  const loginUseCaseMock = {
    login: () =>
      new Observable<LoginResponse>((r) => r.next({ token: 'aaaaa' })),
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        CommonUIModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        GraphQLModule,
        HttpClientModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: LoginGateway, useValue: loginUseCaseMock },
        { provide: Router, useValue: routerSpy },
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
      return this.query<HTMLInputElement>('.qa-email-input');
    }
    get passwordInput() {
      return this.query<HTMLInputElement>('.qa-password-input');
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
      email: 'test@example.com',
      password: 'password',
    };
    page.emailInput.value = expectedLoginFormValue.email;
    page.emailInput.dispatchEvent(new Event('input'));
    page.passwordInput.value = expectedLoginFormValue.password;
    page.passwordInput.dispatchEvent(new Event('input'));
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
      email: 'test@example.com',
      password: 'password',
    };
    page.emailInput.value = expectedLoginFormValue.email;
    page.emailInput.dispatchEvent(new Event('input'));
    page.passwordInput.value = expectedLoginFormValue.password;
    page.passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    page.submitBtn.click();
    tick();
    const spy = routerSpy.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should nav to home page').toBe('/home');
  }));
});
