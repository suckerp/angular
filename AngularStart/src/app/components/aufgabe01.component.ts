import { Component } from '@angular/core';

// Kombination aus EventBinding und Propertybinding
@Component({
    selector: 'Aufgabe01',
    template: `
      <h1> Aufgabe01 </h1>
        <!-- Übergabe des $Events an die Funktion -->
        <input (input) = "onInput($event)"> <br>
        <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->
        
        {{output}}
    `,
    styles: []
  })
  export class Aufgabe01Component {
    // erst output definieren, damit es im onChange() bekannt ist
    output:string
    onInput(e:Event){
      // das Target des onClicks auslesen
      const input = e.target as HTMLInputElement
      // this ist der Klassenname, der zum output gehört und value ist der Wert, der übergeben wird
      this.output = input.value
    }
  }
  