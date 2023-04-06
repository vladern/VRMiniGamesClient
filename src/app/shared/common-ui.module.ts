import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import * as components from './components/index';
import { InputComponent } from 'src/app/shared/components/input/input.component';

@NgModule({
  declarations: [...components.index, InputComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...components.index],
})
export class CommonUIModule { }
