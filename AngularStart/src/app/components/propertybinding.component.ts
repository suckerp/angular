import { Component } from '@angular/core';

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