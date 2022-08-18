import { TestBed } from '@angular/core/testing';

import { GraphQLLoginApiService } from './graph-ql-login-api.service';

describe('LiginApiService', () => {
  let service: GraphQLLoginApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphQLLoginApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
