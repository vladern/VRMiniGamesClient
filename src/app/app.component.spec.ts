import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginGateway } from './domain/models/login/gateway/login.gateway';
import { LoginApiService } from './infrastructure/driven-adapter/login-api/login-api.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: LoginGateway, useClass: LoginApiService}],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
