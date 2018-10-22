import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export type todo = {
  text:string,
  done:boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
/*
  @ViewChild('eingabe')
  eingabe:ElementRef<HTMLInputElement>*/

  todoArray:todo[] = []

  constructor() { }

  ngOnInit() {
  }

  neuEvent(text){

    this.todoArray.push({
      text,
      //text: this.eingabe.nativeElement.value,
      done:false
    })
  }

  setDone(event){
    if (this.todoArray[Number(event)].done == false) {
      this.todoArray[Number(event)].done = true
    } else{
      this.todoArray[Number(event)].done = false
    }
  }

  setDelete(event){
    this.todoArray.splice(Number(event),1)
  }
}
