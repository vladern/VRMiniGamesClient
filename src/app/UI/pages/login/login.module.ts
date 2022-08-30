import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonUIModule } from '../../common/common-ui.module';

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
