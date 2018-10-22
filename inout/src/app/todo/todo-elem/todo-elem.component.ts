import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { todo } from '../todo.component';

@Component({
  selector: 'app-todo-elem',
  templateUrl: './todo-elem.component.html',
  styleUrls: ['./todo-elem.component.css']
})
export class TodoElemComponent implements OnInit {

  @ViewChild('zero1')
  zero1:ElementRef<HTMLButtonElement>

  @ViewChild('zero2')
  zero2:ElementRef<HTMLButtonElement>

  @Input() text:string
  @Input() index:string
  @Output('delete') setDeleteEvent:EventEmitter<string>
  @Output('done') setDoneEvent:EventEmitter<string>

  public content:todo

  constructor() {
    //EventEmitter ist eine Klasse und davon muss im Constructor zwingend eine neue Instanz angelegt werden
    this.setDeleteEvent = new EventEmitter<string>()
    this.setDoneEvent = new EventEmitter<string>()
   }

  ngOnInit() {
    this.content = {text: this.text, done:false}
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
    this.setDeleteEvent.emit(this.index)
  }

  zeroEvent(){
    if (this.zero1.nativeElement.style.backgroundColor == "red"){
      this.zero1.nativeElement.style.backgroundColor = ""
    } else {
      this.zero1.nativeElement.style.backgroundColor = "red"
    }
    if (this.zero2.nativeElement.style.backgroundColor == "red"){
      this.zero2.nativeElement.style.backgroundColor = ""
    } else {
      this.zero2.nativeElement.style.backgroundColor = "red"
    }
  }

}
