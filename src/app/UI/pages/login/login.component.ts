import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCase } from 'src/app/domain/use-cases/login.use-case';


@Component({
  selector: 'vrmg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.nullValidator])
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
    (error) => {
      // TODO: manage errors like wrong password
      console.error(error);
    });
  }

  public gotoHome() {
    const url = `/home`;
    this.router.navigateByUrl(url);
  }

}
