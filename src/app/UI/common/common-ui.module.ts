import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { InputComponent } from './components/atoms/input/input.component';
import * as components from './components/index';

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