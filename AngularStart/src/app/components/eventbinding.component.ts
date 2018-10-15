import { Component } from '@angular/core';

@Component({
    selector: 'EventBinding',
    template: `
      <h1> EventBinding </h1>
      <ul>
        <!-- Standard HTML/JS Version -->
        <li> 
          <button onclick = "console.log('click')">click</button>
        </li>
        <!-- Angular Event Binding -->
        <li> 
          <button (click) = "onClick($event)">click</button>
        </li>
        <li>
          <!-- $event ist ein festgelegtes Anguler Element, dass die Daten des Elements erhält -->
          <input 
          (change) = "onChange($event)"
          (input) = "onInput($event)"
          >
        </li>
      </ul>
    `,
    styles: []
  })
  export class EventBindingComponent {
    onClick(e:Event){
      console.log("Click")
      console.log(e)
    }
    onChange(e:Event){
      let input:HTMLInputElement = e.target as HTMLInputElement
      console.log("Change")
      console.log(e)
      console.log(input)
    }
    onInput(e:Event){
      console.log("Input")
      console.log(e)
    }
  }