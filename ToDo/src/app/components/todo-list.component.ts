import { Component } from '@angular/core';

@Component({
  selector: 'ToDo', 
  template:`
      <h1> ToDo List </h1>

      <div class="container">
        <!-- ng-container wird nicht angezeigt, aber es hilft, damit das item-Feld und der button im gleichen child-Element sind -->
        <ng-container *ngFor="let item of items; let index = index"> 
          <!-- Klasse item-text ist für das item-Feld und soll in der css im Grid in Spalte 1-->
          <div class="item-text" [style.text-decoration] = "(item.done) ? 'line-through':''"> {{item.text}} </div>
          <!-- Klasse item-button ist für den Button und soll in der css im Grid in Spalte 2-->
          <button class="item-button1" (click)="onStrike(index)">Done</button>
          <button class="item-button2" (click)="onDelete(index)">Delete</button>
        </ng-container>

        <input class="item-text" #input1 (change)="onInput(input1.value); input1.value=''">
        <button class="item-button2" (click)="onInput(input1.value); input1.value='' ">Add</button>
      </div>


      
  `,
  styleUrls: ['../css/todo-list.component.css']

})
export class ToDoComponent{
    public items = []
    
    //
    public onInput(value:string){
      if (value.length>0){
        this.items.push({
          text:value,
          done:false
        })
        window.localStorage.setItem("table", JSON.stringify(this.items))
      }
    }

    public onDelete(index:number){
      this.items.splice(index,1)
    }

    public onStrike(index:number){
      if (this.items[index].done == true){
         this.items[index].done = false
      } else {
        this.items[index].done = true
      }
       
    }

    //ngOnInit wird bei jedem Start automatisch ausgeführt
    ngOnInit(){
      const listString = window.localStorage.getItem("table") || "[]"
      this.items = JSON.parse(listString)
  }
}