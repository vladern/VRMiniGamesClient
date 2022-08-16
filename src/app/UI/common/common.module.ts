import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components/index';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [...components.index],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [...components.index],
})
export class CommonUIModule { }
