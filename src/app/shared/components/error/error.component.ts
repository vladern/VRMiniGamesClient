import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'vrmg-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class ErrorComponent {
  @Input() message: string;
  constructor() { }
}
