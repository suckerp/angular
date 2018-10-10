import { Component } from '@angular/core';

@Component({
  selector: 'ToDo', 
  template:`
      <h1> ToDo List </h1>
      <div *ngFor = "let item of items ; let index = index"> {{item}} 
            <button (click) = "onDelete">Delete</button>
      </div>
      <input #input1>
      <button (click) = "onInput(input1.value); input1.value = '' ">Add</button>
  `,
  styles: []

})
export class ToDoComponent{
    public items = []
    public item

    public onInput(value:string){
      this.items.push(value)
    }

    public onDelete(){
      this.items.splice(this.item)
    }
}




@Component({
  selector: 'app-root',
  template: `<ToDo></ToDo>`,
  styles: [``]
})
export class AppComponent {
  title = 'todo';
}
