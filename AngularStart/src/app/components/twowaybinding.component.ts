import { Component } from '@angular/core';

@Component({
    selector: 'TwoWayBinding',
    template: `
      <input [(ngModel)] = "text"><br>
      <input [(ngModel)] = "text">
    `,
    styles: []
  })
  export class TwoWayBindingComponent{
    text = ""
  }