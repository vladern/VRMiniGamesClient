import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
