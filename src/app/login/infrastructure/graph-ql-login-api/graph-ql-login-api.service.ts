import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { LoginGateway } from 'src/app/login/domain/gateway/login.gateway';
import { LoginResponse } from 'src/app/login/domain/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class GraphQLLoginApiService extends LoginGateway {
  public loginQuery = gql`
    query login($data: LoginInput!) {
      login(data: $data) {
        token
      }
    }
  `;

  constructor(private apollo: Apollo) {
    super();
  }

  public login(email: string, password: string): Observable<LoginResponse> {
    return this.apollo
      .watchQuery<any>({
        query: this.loginQuery,
        variables: {
          data: { email, password },
        },
      })
      .valueChanges.pipe(
        shareReplay(1),
        map((response) => ({ ...response?.data?.login } as LoginResponse)),
        catchError(_err => {
          return throwError(_err.graphQLErrors.map(err => ({message: err.message})));
        })
      );
  }
}
