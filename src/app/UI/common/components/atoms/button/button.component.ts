import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrmg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}