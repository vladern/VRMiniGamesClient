import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'vrmg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class CardComponent {
  @Input() title: string;
  constructor() {}
}
