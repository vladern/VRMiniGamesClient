import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components/index';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [...fromComponents.components],
})
export class CommonUIModule { }
