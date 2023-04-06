import { Component, Input } from '@angular/core';

@Component({
  selector: 'vrmg-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() message: string;
  constructor() { }
}
