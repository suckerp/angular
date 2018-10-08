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
    <li> {{ timer }}
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
  selector: 'app-root',
  template: `
    <!-- <Hallo></Hallo> -->
    <!-- <StringInterpolation></StringInterpolation> -->
    <PropertyBinding></PropertyBinding>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'AngularStart';
}
