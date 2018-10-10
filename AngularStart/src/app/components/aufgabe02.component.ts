import { Component } from '@angular/core';

// Kombination aus EventBinding und Propertybinding
@Component({
    selector: 'Aufgabe02',
    template: `
      <h1> Aufgabe02 </h1>
        <!-- Übergabe des $Events an die Funktion -->
        <input (input) = "onInput1($event)">
        <input (input) = "onInput2($event)"> 
        <br>
        <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->
        {{output}}
    `,
    styles: []
  })
  export class Aufgabe02Component {
    // Es sind alles public Eigenschaften brauchen daher kein const oder let
    // können aus allen Funktionen heraus ausgelesen und geändert werden
    public zahl1:number = 0
    public zahl2:number = 0
    public output:number = 0
    onInput1(e:Event){
      // erste Zahl auslesen und mit der zweiten Zahl addieren
      const input = e.target as HTMLInputElement
      this.zahl1 = Number(input.value)
      this.output = this.zahl1 + this.zahl2
    }
    onInput2(e:Event){
      // zweite Zahl auslesen und mit der ersten Zahl addieren
      const input = e.target as HTMLInputElement
      this.zahl2 = Number(input.value)
      this.output = this.zahl1 + this.zahl2
    }
  }