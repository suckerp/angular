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


@Component({
  selector:'StringInterpolation',
  template: `
    <h1> TEST </h1>
    <ul>
    <li> {{ "String"}} </li>
    <li> {{ "zusammengesetzer " + "String" }} </li>
    <li>{{ "Ternary" + ((true)?" Operator":"") }}</li>
    <li> {{ stringVar }} </li>
    <li> {{returnString()}} </li>
    <li> {{convertObject}} </li>
    <li> {{ timer }} </li>
  `,
  styles: []
})
export class StringInterpolationComponent{
  stringVar:string = "Stringvariable"
  returnString(){
    return "returnString"
  }

  convertObject = {
    text: "Daten",
    toString:function(this:{text:string}){
      return this.text
    }
  }

  timer = 0

  constructor(){
    setInterval(()=>{
      this.timer++
    },300)
  }

}


@Component({
  selector: 'PropertyBinding',
  template: `
    <h1> PropertyBinding </h1>
    <ul>
      <li [innerText] = "text"> </li>
      <li [innerHTML] = "myhtml"> </li>
      <li [style.background-color] = "mycolor"> text </li>
      <li [contentEditable] = "editierbar"> editierbar</li>
      <li [innerHTML] = "timer"> </li>
      <li> </li>
    </ul>
  `,
  styles: []
})
export class PropertyBindingComponent {
  text = "mein Text"
  myhtml = "<h3> mein text </h3>"
  mycolor = "red"
  editierbar = true

  timer = 0
  constructor(){
    setInterval(()=>{
      this.timer++
    },300)
  }
}

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
      <li> </li>
      <li> </li>
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


@Component({
  selector: 'TwoWayBinding',
  template: `
    <input [(ngModel)] = "text"><br>
    <input [(ngModel)] = "text">

  `,
  styles: []
})
export class TwoWayBindingComponent{
  text = ""

}


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
  //public Beginn:Date
  //public Ende:Date
  public sekunde:number = 0
  public minute:number = 0
  public stunde:number = 0
  public intervall

  onClick(){
    if (this.start == false){
      this.start = true
      //this.Beginn = new Date()
      this.sekunde = 0
      this.intervall = setInterval(()=>{
      this.sekunde++
      if (this.sekunde > 59){
        console.log(this.sekunde)
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
      //this.Ende = new Date()
      clearInterval(this.intervall)
      this.stunde
      this.minute
      //let temp = (Number(this.Ende) - Number(this.Beginn)) / 1000
      this.sekunde
    }
  }
}

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





@Component({
  selector: 'app-root',
  template: `
    <!-- <Hallo></Hallo> -->
    <!-- <StringInterpolation></StringInterpolation> -->
    <!-- <PropertyBinding></PropertyBinding> -->
    <!-- <EventBinding></EventBinding> -->
    <!-- <Aufgabe01></Aufgabe01> -->
    <!-- <Aufgabe02></Aufgabe02> -->
    <!-- <Aufgabe03></Aufgabe03> -->
    <!-- <Aufgabe04></Aufgabe04> -->
    <!-- <TwoWayBinding></TwoWayBinding> -->
    <button routerLink = "Hallo"> Hallo </button>
    <button routerLink = "Aufgabe01"> Aufgabe01 </button>
    <button routerLink = "Aufgabe02"> Aufgabe02 </button>
    <button routerLink = "Aufgabe03"> Aufgabe03 </button>
    <button routerLink = "Aufgabe04"> Aufgabe04 </button>
    <router-outlet></router-outlet>

  `,
  styles: [``]
})
export class AppComponent {
  title = 'AngularStart';
}
