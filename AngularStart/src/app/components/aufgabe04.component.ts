import { Component } from '@angular/core';

//Einfacher Zufallsgenerator
@Component({
    selector: 'Aufgabe04',
    template: `
      <h1> Aufgabe04 </h1>
      <div>
        <label class="label">Anzahl der Würfe:</label>
        <input #anzahl class="no-spinners" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="Anzahl der Würfe">
        
        <label class="label">Augenzahl der Würfel:</label>
        <input #augenzahl class="no-spinners" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="Augenzahl der Würfel">

        <button (click) = "onClick(anzahl.value, augenzahl.value)">click</button><br><br>
        <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->
      </div>

      <ng-container *ngIf = "show">
        <div class="container">Ergebnis von {{anzahl.value}} Würfen mit jeweils {{augenzahl.value}} Augen</div>
        <div class="container2" *ngFor = "let item of output.werte"> {{item}} </div>
        <div class="container">Kleinster Wert: {{output.min}}</div>
        <div class="container">Grösster Wert: {{output.max}}</div>
        <div class="container">Summe: {{output.summe}} </div>
      </ng-container>
      <div *ngIf = "fehler">
        Fehlerhafte Eingabe. Bitte korrekte Werte eingeben.
      </div>
    `,
    styleUrls: ['../css/aufgabe04.component.css']
  })
  export class Aufgabe04Component {
    // Es sind alles public Eigenschaften einer Klasse und brauchen daher kein const oder let
    // können aus allen Funktionen heraus ausgelesen und geändert werden

    // Mit Startwerten intialisieren - Wichtig!!!
    public output = {
      werte:[],
      min:0,
      max:0,
      summe:0
    }

    public show
    public fehler

    onClick(anzahl, augenzahl){

      this.output.summe = 0
      this.show = false
      this.fehler = false

      function compareNumbers(a, b) {
        return a - b;
      }

      if (Number(anzahl) > 0 && Number(augenzahl) > 0){

      
        for(let i=0; i<anzahl; i++){
          this.output.werte[i] = Math.ceil(Math.random()*(augenzahl))
        }
      
        let temp = this.output.werte.slice(0,this.output.werte.length)
        temp = temp.sort(compareNumbers)

        this.output.min = temp[0]
        this.output.max = temp[anzahl-1]

        for (let item of this.output.werte){
          this.output.summe += item
        }
        
        this.show = true
    
      } else {
        this.fehler = true
      }
    }
  }