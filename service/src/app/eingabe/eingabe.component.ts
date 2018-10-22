import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.css']
})
export class EingabeComponent implements OnInit {

  public eingabe = ""

  constructor(public service:ServiceService) { }

  ngOnInit() {
  }
  eingabeEvent(eingabe: string){
    this.service.setPuffer(eingabe)
  }

}
