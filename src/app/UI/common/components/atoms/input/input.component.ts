import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vrmg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild(DefaultValueAccessor) valueAccessor: DefaultValueAccessor;
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;

  constructor() { }


  writeValue(obj: any) {
    this.valueAccessor.writeValue(obj);
  }

  registerOnChange(fn: any) {
    this.valueAccessor.registerOnChange(fn);
  }

  registerOnTouched(fn: any) {
    this.valueAccessor.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.valueAccessor.setDisabledState(isDisabled);
  }
}