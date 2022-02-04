import { Observable } from 'rxjs';
import { LoginResponse } from '../login.model';

export abstract class LoginGateway {
    abstract login(email: string, password: string): Observable<LoginResponse>;
}
