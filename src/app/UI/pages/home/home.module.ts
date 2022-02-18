import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { CommonUIModule } from '../../common/common.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    CommonUIModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
