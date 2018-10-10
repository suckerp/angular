import { Component } from '@angular/core';

@Component({
    selector:'Hallo',
    template: `
      <h1> HALLO {{ name }} </h1>`,
    styles: []
  })
  export class HalloComponent{
    name = "Max"
  }