import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../domain/login-response.model';
import { LoginGateway } from '../domain/gateway/login.gateway';

@Injectable()
export class LoginUseCase {
  constructor(private loginGateWay: LoginGateway) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.loginGateWay.login(email, password);
  }
}
