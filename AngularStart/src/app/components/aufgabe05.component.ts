import { Component } from '@angular/core';

@Component({
    selector:'Aufgabe05',
    template: `
    <h1> Aufgabe05 </h1>
      <button [style.background-color] = "(color1)" (click) = "onClickMinus()">-</button>
      {{counter}}
      <button [style.background-color] = "(color2)" (click) = "onClickPlus()">+</button>
    `,
    styles: []
  })
  export class Aufgabe05Component {
    public counter = 0
    public color1
    public color2

    onClickMinus(){
      this.counter--
      this.color1 ='#'+Math.floor(Math.random()*16777215).toString(16)
    }
  
    onClickPlus(){
      this.counter++
      this.color2 ='#'+Math.floor(Math.random()*16777215).toString(16)
    }
  
  }