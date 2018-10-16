import { Component } from '@angular/core';

//Binomialkoeffizient
@Component({
    selector: 'Aufgabe06',
    template: `
      <h1> Aufgabe06 </h1>
      <div>
        <label class="label">n eingeben (muss größer k sein):</label>
        <input #n class="no-spinners" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="n eingeben (muss größer k sein)">
        
        <label class="label">k eingeben (muss kleiner n sein):</label>
        <input #k class="no-spinners" type="number" pattern="[0-9]*" inputmode="numeric" placeholder="k eingeben (muss kleiner n sein)">

        <button (click) = "onClick(n.value, k.value)">click</button>
      </div>

      <div *ngIf = "show">
        Binomialkoeffizient - Mögliche Kombinationen bei {{n.value}} über {{k.value}}: {{output}}
      </div>
      <div *ngIf = "fehler">
        Fehlerhafte Eingabe. Bitte korrekte Werte eingeben.
      </div>
    `,
    styleUrls: ['../css/aufgabe06.component.css']
  })
  export class Aufgabe06Component {
    // Es sind alles public Eigenschaften einer Klasse und brauchen daher kein const oder let
    // können aus allen Funktionen heraus ausgelesen und geändert werden
    public output
    public fehler
    public show

    onClick(n, k){
      this.fehler = false
      this.show = false
      function factorialize(num) {
        if (num === 0 || num === 1)
          return 1
        for (var i = num - 1; i >= 1; i--) {
          num *= i
        }
        return num
      }
      if (Number(n)>Number(k) && Number(k) > 0) {
        this.output = Math.round(factorialize(n) / (factorialize(k) * (factorialize(n-k))))
        this.show = true
      } else {
        this.fehler = true
      }
    }
  }