import { Component, OnInit } from '@angular/core';
import { ServiceService, myArray } from '../service.service'
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-ausgabe',
  templateUrl: './ausgabe.component.html',
  styleUrls: ['./ausgabe.component.css']
})

export class AusgabeComponent implements OnInit {

  ausgabe:BehaviorSubject<string>
  myArray:myArray

  constructor(public service:ServiceService) { 
    this.ausgabe = service.puffer
    this.myArray = service.myarray
  }

  ngOnInit() {
  }

}
