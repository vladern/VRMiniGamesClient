import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/domain/models/login/login-response.model';
import { LoginGateway } from 'src/app/domain/models/login/gateway/login.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphQLLoginApiService extends LoginGateway {

  constructor() {
    super();
  }

  public login(email: string, password: string): Observable<LoginResponse> {
    // TODO: Implement here comunication with GraphQL
    throw new Error('Not implemented yet!!');
  }
}
