import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphQLLoginApiService } from './graph-ql-login-api.service';

fdescribe('LiginApiService', () => {
  let service: GraphQLLoginApiService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });
    service = TestBed.inject(GraphQLLoginApiService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#login should return expected LoginResponse (Apollo should be called once)', (done: DoneFn) => {
    const loginInput = {
      email: 'test@example.com',
      password: 'password',
    };
    const expectedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmUzMGRiNTNkOGQzNDc3Y2IxNGI2MyIsImVtYWlsIjoidmxhZHlzLjMyMzRAZ21haWwuY29tIiwiaWF0IjoxNjYwODI1ODYxLCJleHAiOjE2NjA5MTIyNjF9.KVHe_GN89gl-oS_8kSWKE03x108o-4JAWL4GmLGVbiU";
    service.login(loginInput.email, loginInput.password).subscribe(loginResponse => {
      expect(loginResponse.token).toBe(expectedToken);
      done();
    });
    const op = controller.expectOne(service.loginQuery);
    expect(op.operation.variables.data).toEqual(loginInput);
    op.flush({
      data: {
        login: {
          token: expectedToken
        }
      }
    });
  });
});
