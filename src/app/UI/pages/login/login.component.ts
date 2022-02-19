import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginUseCase } from 'src/app/domain/use-cases/login.use-case';
import { LoginStore } from '../../store/login/login.store';

@Component({
  selector: 'vrmg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore]
})
export class LoginComponent implements OnInit {

  public loginFormGroup$: Observable<FormGroup>;

  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly loginStore: LoginStore
  ) { }

  ngOnInit(): void {
    this.loginFormGroup$ = this.loginStore.loginFormGroup$;
  }

  public submit({email, password}): void {
    this.loginUseCase.login(email, password).subscribe((res) => {
      // TODO: save token in auth cookie
      const tokent = res.token;
    },
    (error) => {
      // TODO: manage errors like wrong password
    });
  }

}
