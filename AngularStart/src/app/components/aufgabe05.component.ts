import { Component } from '@angular/core';

@Component({
    selector:'Aufgabe05',
    template: `
    <h1> Aufgabe05 </h1>
      <button (click) = "onClickPlus()">+</button>
      {{counter}}
      <button (click) = "onClickMinus()">-</button>
    `,
    styles: []
  })
  export class Aufgabe05Component {
    public counter = 0
  
    onClickPlus(){
      this.counter++
    }
  
    onClickMinus(){
      this.counter--
    }
  }