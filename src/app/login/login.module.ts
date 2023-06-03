import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, CardComponent, ErrorComponent, InputComponent } from '../shared/components';
import { LoginGateway } from './domain/gateway/login.gateway';
import { GraphQLLoginApiService } from './infrastructure/graph-ql-login-api/graph-ql-login-api.service';
import { LoginUseCase } from './application/login.use-case';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    ErrorComponent
  ],
  providers: [
    { provide: LoginGateway, useClass: GraphQLLoginApiService},
    LoginUseCase,
  ],
})
export class LoginModule { }
