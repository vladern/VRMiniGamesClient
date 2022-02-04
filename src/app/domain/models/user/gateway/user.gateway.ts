import { Observable } from 'rxjs';
import { User } from '../user.model';

export abstract class AlbumGateway {
    abstract getByID(id: number): Observable<User>;
    abstract getAll(): Observable<Array<User>>;
    abstract saveNew(user: User): Observable<void>;
    abstract login(email: string, password: string): Observable<string>;
}
