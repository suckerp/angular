import { Component } from '@angular/core';

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
      </ul>
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