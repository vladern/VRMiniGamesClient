import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginGateway } from './domain/models/login/gateway/login.gateway';
import { GraphQLLoginApiService } from './infrastructure/driven-adapter/graph-ql-login-api/graph-ql-login-api.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: LoginGateway, useClass: GraphQLLoginApiService}],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
