import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './UI/pages/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginGateway } from './domain/models/login/gateway/login.gateway';
import { LoginApiService } from './infrastructure/driven-adapter/login-api/login-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./UI/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./UI/pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{ provide: LoginGateway, useClass: LoginApiService}],
  bootstrap: [AppComponent],
})
export class AppModule {}
