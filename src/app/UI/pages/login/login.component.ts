import { Component, OnInit } from '@angular/core';
import { LoginUseCase } from 'src/app/domain/use-cases/login.use-case';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginUseCase: LoginUseCase) { }

  ngOnInit(): void {
  }

  public submit(email: string, password: string): void {
    this.loginUseCase.login(email, password).subscribe((res) => {
      // TODO: save token in auth cookie
      const tokent = res.token;
    },
    (error) => {
      // TODO: manage errors like wrong password
    });
  }

}
