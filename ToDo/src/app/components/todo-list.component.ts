import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ToDo', 
  template:`
      <h1> ToDo List </h1>

      <div class="container">
        <!-- ng-container wird nicht angezeigt, aber es hilft, damit das item-Feld und der button im gleichen child-Element sind -->
        <ng-container *ngFor="let item of items; let index = index"> 
          <!-- Klasse item-text ist für das item-Feld und soll in der css im Grid in Spalte 1-->
          <div class="item-counter">-</div>
          <div class="item-text" [style.color] = "(item.color)" [style.text-decoration] = "(item.done) ? 'line-through':''">
          {{item.text}}
          </div>
          <!-- Klasse item-button ist für den Button und soll in der css im Grid in Spalte 2-->
          <button class="item-button1" (click)="onStrike(index)">Done</button>
          <button class="item-button2" (click)="onDelete(index)">Delete</button>
        </ng-container>

        <input class="item-text" #input1 (change)="onInput(input1.value); input1.value=''">
        <button class="item-button2" (click)="onInput1(input1)">Add</button>
      </div>

  `,
  styleUrls: ['../css/todo-list.component.css']

})
export class ToDoComponent implements OnInit {
    public items = []

    //Einfache onInput Methode, die den Wert aus dem Inputfeld übergibt und dann zur Liste hinzugefügt wird und auch im Localstorage gespeichert wird
    public onInput(value:string){
      if (value.length>0){
        this.items.push({
          text:value,
          done:false,
          color:'#'+Math.floor(Math.random()*16777215).toString(16)
        })
        
        window.localStorage.setItem("todo_list", JSON.stringify(this.items))
      }
    }
    
    //Alternative zur normalen onInput, nur das diesmal das komplette Event übergeben wird und nicht nur der Wert
    //Der Wert wird hier dann auf leer gesetzt
    public onInput1(input){
      if (input.value.length>0){
        this.items.push({
          text:input.value,
          done:false,
          color:'#'+Math.floor(Math.random()*16777215).toString(16)
        })
        window.localStorage.setItem("todo_list", JSON.stringify(this.items))
        input.value = ""
      }
    }

    //Der gewählte Eintrag wird gelöscht
    //Splice benötigt den Startpunkt (index) und die Schrittlänge
    public onDelete(index:number){
      this.items.splice(index,1)
      window.localStorage.setItem("todo_list", JSON.stringify(this.items))
    }

    //Eigenschaft done wird entweder auf true oder auf false gesetzt, je nachdem, ob man den entsprechenden Button drückt
    //Dementsprechend wird auch der dazugehörige Eintrag durchgestrichen oder nicht
    public onStrike(index:number){
      if (this.items[index].done == true){
         this.items[index].done = false
      } else {
        this.items[index].done = true
      }
      window.localStorage.setItem("todo_list", JSON.stringify(this.items))
    }

    //Local Storage kann auch im Constructor initialisiert werden, dann braucht man nicht OnInit extra implementieren / importieren
    /*constructor(){
      this.items = JSON.parse(window.localStorage.getItem("todo_list") || "[]")
    }*/

    //ngOnInit wird bei jedem Start automatisch ausgeführt
    ngOnInit(){
      this.items = JSON.parse(window.localStorage.getItem("todo_list") || "[]")
    }

}