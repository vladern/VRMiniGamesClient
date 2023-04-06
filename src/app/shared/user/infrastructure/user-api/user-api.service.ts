import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from '../../domain/geteway/user.gateway';
import { User } from '../../domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends UserGateway {

  constructor() {
    super();
  }

  public getByID(id: number): Observable<User> {
    throw new Error('Not implemented yet!!');
  }

  public getAll(): Observable<Array<User>> {
    throw new Error('Not implemented yet!!');
  }

  public saveNew(user: User): Observable<void> {
    throw new Error('Not implemented yet!!');
  }
}
