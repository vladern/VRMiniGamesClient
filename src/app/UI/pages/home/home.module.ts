import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { CommonUIModule } from '../../common/common.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonUIModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
