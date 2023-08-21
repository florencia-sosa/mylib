
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
  <button>
  <ng-content></ng-content>
</button>
  `,
  styleUrls: [
    './button.component.scss'
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
