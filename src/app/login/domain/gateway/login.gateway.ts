import { Observable } from 'rxjs';
import { LoginResponse } from '../login-response.model';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoginGateway {
    abstract login(email: string, password: string): Observable<LoginResponse>;
}
