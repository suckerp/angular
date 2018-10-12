import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//FormsModule wird für das TwoWayBinding benötigt
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'


import {
  HalloComponent, 
  StringInterpolationComponent, 
  PropertyBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  Aufgabe01Component,
  Aufgabe02Component,
  Aufgabe03Component,
  Aufgabe04Component,
  Aufgabe05Component,
  ngIfComponent,
  ngForComponent
} from './components'


import { 
  AppComponent
} from './app.component';
import { ViewChildComponent } from './components/view-child.component';

const myRoutes:Routes = [
  { path: '', redirectTo: "/Hallo", pathMatch: "full" },
  { path: 'Hallo', component: HalloComponent },
  { path: 'Aufgabe01', component: Aufgabe01Component },
  { path: 'Aufgabe02', component: Aufgabe02Component },
  { path: 'Aufgabe03', component: Aufgabe03Component },
  { path: 'Aufgabe04', component: Aufgabe04Component },
  { path: 'Aufgabe05', component: Aufgabe05Component },
  { path: 'tut-ngIf', component: ngIfComponent },
  { path: 'tut-ngFor', component: ngForComponent },
  { path: 'viewChild', component: ViewChildComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HalloComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    Aufgabe01Component,
    Aufgabe02Component,
    Aufgabe03Component,
    Aufgabe04Component,
    Aufgabe05Component,
    ngIfComponent,
    ngForComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
