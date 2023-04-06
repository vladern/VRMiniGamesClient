import { Component, Input } from '@angular/core';

@Component({
  selector: 'vrmg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string;
  @Input() icon: string;
  @Input() type: string;

  constructor() { }

}
