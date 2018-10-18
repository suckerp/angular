import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export type todo = {
  index:string,
  text:string,
  done:boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('eingabe')
  eingabe:ElementRef<HTMLInputElement>

  todoArray:todo[] = []


  constructor() { }

  ngOnInit() {
  }

  neuEvent(event:Event){
    let text = this.eingabe.nativeElement.value
    let index = ""
    if (this.todoArray.length==0){
      index = "0"
    } else {
      index = (Number(this.todoArray[this.todoArray.length-1].index)+1).toString()
    }
    this.todoArray.push({
      index,
      text,
      done:false
    })
  }

  setDone(event){
    if (this.todoArray[Number(event)].done == false) {
      this.todoArray.filter(x=>x.index==event) //sucht das Element mit dem korrekten Index
      .forEach(x=>x.done=true)
    } else{
      this.todoArray.filter(x=>x.index==event)
      .forEach(x=>x.done=false)
    }

  }

  setDelete(event){
    //erstellt eine neues Array, welches alle Elemente außer dem mit dem zu löschenden Index enthält
    //this.todoArray = this.todoArray.filter(x=>x.index!=event)

    //Alternativ müssten man den übergebenen Index im todoArray.index finden und dann nachgucken, welcher Array-Index dem entspricht

    this.todoArray.splice(Number(event),1)
  }
}
