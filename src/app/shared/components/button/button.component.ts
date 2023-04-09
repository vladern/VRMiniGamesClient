import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'vrmg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class ButtonComponent {

  @Input() text: string;
  @Input() icon: string;
  @Input() type: string;

  constructor() { }

}
