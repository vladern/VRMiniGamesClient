import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';

export interface LoginState {
  loginFormGroup: FormGroup;
}

const defaultState: LoginState = {
  loginFormGroup: new FormGroup({email: new FormControl(), password: new FormControl()}),
};

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {

  constructor() {
    super(defaultState);
  }

  readonly loginFormGroup$ = this.select(({ loginFormGroup }) => loginFormGroup);

  readonly formGroupChanged = this.updater((loginState, loginFormGroup: FormGroup) => ({
    ...loginState,
    loginFormGroup,
  }));
}
