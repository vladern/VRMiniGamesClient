import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from '../shared/components/button/button.component';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ButtonComponent,
    MatToolbarModule,
    MatSidenavModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
