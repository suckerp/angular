import { Component } from '@angular/core';

// Stoppuhr
@Component({
    selector: 'Aufgabe03',
    template: `
      <h1> Aufgabe03 </h1>
  
        <!-- Übergabe des $Events an die Funktion -->
        <button (click) = "onClick()">Start/Stop</button><br>
        <!-- im output wird soll dann der Wert aus dem input Feld eingetragen werden -->
        <div>{{stunde}}:{{minute}}:{{sekunde}}</div>
    `,
    styles: []
  })
  export class Aufgabe03Component {
    // Es sind alles public Eigenschaften brauchen daher kein const oder let
    // können aus allen Funktionen heraus ausgelesen und geändert werden
    public start = false
    public Beginn:Date
    public Ende:Date
    public sekunde:number = 0
    public minute:number = 0
    public stunde:number = 0
    public intervall
  
    onClick(){
      if (this.start == false){
        this.start = true
        this.Beginn = new Date()
        this.sekunde = 0
        this.minute = 0
        this.stunde = 0
        this.intervall = setInterval(()=>{
          this.sekunde++
          if (this.sekunde > 59){
            this.minute++
            this.sekunde = 0
            if (this.minute > 59){
              this.minute = 0
              this.stunde++
            }
        }
          }, 1000)
      }
      else{
        this.start = false
        this.Ende = new Date()
        clearInterval(this.intervall)
        this.stunde
        this.minute
        let temp = Number(this.Ende) - Number(this.Beginn)
        this.sekunde= (temp - this.minute * 60000 - this.stunde * 3600000) / 1000
        //this.sekunde
      }
    }
  }