import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';
import { CommonUIModule } from '../shared/common-ui.module';

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
    MaterialModule,
    CommonUIModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }