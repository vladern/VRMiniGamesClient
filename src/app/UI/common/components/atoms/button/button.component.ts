import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrmg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
