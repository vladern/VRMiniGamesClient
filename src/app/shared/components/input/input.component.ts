import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vrmg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string | number;
  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();

  constructor() {}

  onValueChange(value: string | number): void {
    this.valueChange.emit(value);
  }
}
