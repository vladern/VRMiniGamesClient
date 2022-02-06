import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './UI/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './UI/pages/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginGateway } from './domain/models/login/gateway/login.gateway';
import { LoginApiService } from './infrastructure/driven-adapter/login-api/login-api.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./UI/pages/home/home.module').then((m) => m.HomeModule),
  },
  // { path: '', redirectTo: '/home' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ],
  providers: [{ provide: LoginGateway, useClass: LoginApiService}],
  bootstrap: [AppComponent],
})
export class AppModule {}
