import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginGateway } from './login/domain/gateway/login.gateway';
import { GraphQLLoginApiService } from './login/infrastructure/graph-ql-login-api/graph-ql-login-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GraphQLModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
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
