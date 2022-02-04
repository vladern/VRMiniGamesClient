import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login/login.model';
import { LoginGateway } from '../models/login/gateway/login.gateway';

@Injectable({
  providedIn: 'root'
})
export class LoginUseCase {
  constructor(private loginGateWay: LoginGateway) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.loginGateWay.login(email, password);
  }
}
