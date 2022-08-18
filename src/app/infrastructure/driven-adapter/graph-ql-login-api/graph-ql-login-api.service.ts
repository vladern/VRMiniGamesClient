import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/domain/models/login/login-response.model';
import { LoginGateway } from 'src/app/domain/models/login/gateway/login.gateway';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraphQLLoginApiService extends LoginGateway {
  public loginQuery = gql`
    query login($data: LoginInput) {
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
      .valueChanges.pipe(shareReplay(1), map((response) => ({ ...response?.data?.login } as LoginResponse)));
  }
}
