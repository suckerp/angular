import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  AppComponent, 
  HalloComponent, 
  StringInterpolationComponent, 
  PropertyBindingComponent,
  EventBindingComponent,
  Aufgabe01Component,
  Aufgabe02Component,
  Aufgabe03Component,
  Aufgabe04Component
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HalloComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    Aufgabe01Component,
    Aufgabe02Component,
    Aufgabe03Component,
    Aufgabe04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
