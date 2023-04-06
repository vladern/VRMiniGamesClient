import { Observable } from 'rxjs';
import { LoginResponse } from '../login-response.model';

export abstract class LoginGateway {
    abstract login(email: string, password: string): Observable<LoginResponse>;
}
