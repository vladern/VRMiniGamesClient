import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ErrorResponse } from 'src/app/shared/error/domain/error-response';
import { LoginUseCase } from 'src/app/login/application/login.use-case';


@Component({
  selector: 'vrmg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public errors: ErrorResponse[] = [];
  public loginFormGroup: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.email, Validators.nullValidator]),
    password: new UntypedFormControl('', [Validators.nullValidator])
  });

  constructor(
    private readonly loginUseCase: LoginUseCase,
    private router: Router,
  ) { }

  public submit({email, password}): void {
    this.loginUseCase.login(email, password).subscribe((res) => {
      // TODO: save token in auth cookie
      const tokent = res.token;
      this.gotoHome();
    },
    (errors: ErrorResponse[]) => {
      this.errors = errors;
    });
  }

  public gotoHome() {
    const url = `/home`;
    this.router.navigateByUrl(url);
  }

}
