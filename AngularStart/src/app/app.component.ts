import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
    <!-- <Hallo></Hallo> -->
    <!-- <StringInterpolation></StringInterpolation> -->
    <!-- <PropertyBinding></PropertyBinding> -->
    <!-- <EventBinding></EventBinding> -->
    <!-- <Aufgabe01></Aufgabe01> -->
    <!-- <Aufgabe02></Aufgabe02> -->
    <!-- <Aufgabe03></Aufgabe03> -->
    <!-- <Aufgabe04></Aufgabe04> -->
    <!-- <TwoWayBinding></TwoWayBinding> -->
    <button routerLink = "Hallo"> Hallo </button>
    <button routerLink = "Aufgabe01"> Aufgabe01 </button>
    <button routerLink = "Aufgabe02"> Aufgabe02 </button>
    <button routerLink = "Aufgabe03"> Aufgabe03 </button>
    <button routerLink = "Aufgabe04"> Aufgabe04 </button>
    <button routerLink = "Aufgabe05"> Aufgabe05 </button>
    <button routerLink = "tut-ngIf"> tut-ngIf </button>
    <button routerLink = "tut-ngFor"> tut-ngFor </button>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'AngularStart';
}
