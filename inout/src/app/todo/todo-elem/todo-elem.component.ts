import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todo } from '../todo.component';

@Component({
  selector: 'app-todo-elem',
  templateUrl: './todo-elem.component.html',
  styleUrls: ['./todo-elem.component.css']
})
export class TodoElemComponent implements OnInit {

  @Input() text:string
  @Input() index:string
  @Output('delete') setDeleteEvent: EventEmitter<string>
  @Output('done') setDoneEvent:EventEmitter<string>

  
  public content:todo
  

  constructor() {
    //EventEmitter ist eine Klasse und davon muss im Constructor zwingend eine neue Instanz angelegt werden
    this.setDeleteEvent = new EventEmitter<string>()
    this.setDoneEvent = new EventEmitter<string>()
   }

  ngOnInit() {
    this.content = {index: this.index, text: this.text, done:false}
  }

  doneEvent(event:Event){
    if (this.content.done == false){
      this.content.done = true
    } else {
      this.content.done = false
    }
    this.setDoneEvent.emit(this.index)
  }

  deleteEvent(event){

    console.log(event)

    this.setDeleteEvent.emit(this.index)


  }

}
