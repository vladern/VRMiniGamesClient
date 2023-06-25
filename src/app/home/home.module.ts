import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HeaderComponent,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
