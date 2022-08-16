import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginGateway } from 'src/app/domain/models/login/gateway/login.gateway';
import { LoginApiService } from 'src/app/infrastructure/driven-adapter/login-api/login-api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: LoginGateway, useClass: LoginApiService}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
