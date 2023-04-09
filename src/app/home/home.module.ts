import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonUIModule } from '../shared/common-ui.module';
import { MaterialModule } from '../shared/material-module';
import { ButtonComponent } from '../shared/components/button/button.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonUIModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ButtonComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
