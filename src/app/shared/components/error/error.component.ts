import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'vrmg-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule]
})
export class ErrorComponent {
  @Input() message: string;
  constructor() { }
}
