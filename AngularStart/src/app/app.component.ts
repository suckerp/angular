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
    <button routerLink = "Aufgabe06"> Aufgabe06 </button>
    <button routerLink = "tut-ngIf"> tut-ngIf </button>
    <button routerLink = "tut-ngFor"> tut-ngFor </button>
    <button class="button" routerLink = "viewChild"> ViewChild </button>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .button{border-radius:50%; font-size:10px;}
  `]
})
export class AppComponent {
  title = 'AngularStart';
}
