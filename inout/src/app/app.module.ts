import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoElemComponent } from './todo/todo-elem/todo-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoElemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }