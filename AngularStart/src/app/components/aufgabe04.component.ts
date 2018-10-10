import { Component } from '@angular/core';

//Einfacher Zufallsgenerator
@Component({
    selector: 'Aufgabe04',
    template: `
      <h1> Aufgabe04 </h1>
  
        <!-- Übergabe des $Events an die Funktion -->
        <button (click) = "onClick()">click</button><br><br>
        <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->
        {{output1}}  {{output2}}  {{output3}} 
    `,
    styles: []
  })
  export class Aufgabe04Component {
    // Es sind alles public Eigenschaften brauchen daher kein const oder let
    // können aus allen Funktionen heraus ausgelesen und geändert werden
    public output1:number = 0
    public output2:number = 0
    public output3:number = 0
  
    onClick(){
      this.output1 = Math.round(Math.random()*1000)
      this.output2 = Math.round(Math.random()*1000)
      this.output3 = Math.round(Math.random()*1000)
  
    }
  }