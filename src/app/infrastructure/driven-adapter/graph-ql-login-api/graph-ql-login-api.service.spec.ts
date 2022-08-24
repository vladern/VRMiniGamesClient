import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController, ApolloTestingModule
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { ErrorResponse } from 'src/app/domain/models/error/error-response';
import { GraphQLLoginApiService } from './graph-ql-login-api.service';

describe('LiginApiService', () => {
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

  it('#login should return ErrorResponse with message "No user with that email"', (done: DoneFn) => {
    const loginInput = {
      email: 'test@example.com',
      password: 'password',
    };
    const expectedErrorResponse = {  message: "No user with that email" };
    service.login(loginInput.email, loginInput.password).subscribe((res)=>{}, (errors: ErrorResponse[]) => {
      expect(errors).toEqual([expectedErrorResponse]);
      done();
    });
    const op = controller.expectOne(service.loginQuery);
    expect(op.operation.variables.data).toEqual(loginInput);
    const graphqlErrors:  GraphQLError[] = [new GraphQLError(expectedErrorResponse.message)];
    op.flush({
      errors: graphqlErrors,
      data: null,
    });
  });
});
