import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, pipe} from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-view-child',
  template: `
  <div #div1>
    <h1>View Child</h1>
    <button #btn1 id="btn2">btn1</button>
    <input #input1>
  </div>
  `,
  styles: []
})
export class ViewChildComponent implements OnInit {
  //ViewChild ist sinnvoll, wenn man mehere Aktionen mit einem Element ausführen will

  //mit @ViewChild sucht er das Element btn1 aus dem HTML, wie früher getElementById
  //@ViewChild ist ein Dekorator bzw. spezielle Funktion
  @ViewChild('btn1') 
  public btn1:ElementRef<HTMLButtonElement>

  @ViewChild('input1') 
  public input1:ElementRef<HTMLInputElement>

  @ViewChild('div1') 
  public div1:ElementRef<HTMLDivElement>

  //ngOnInit wird ausgeführt, wenn die Seite vollständig geladen ist
  //ähnlich wie früher DOMContent Loaded bzw. das JS nach dem Body einfügen
  ngOnInit() {
    //

    fromEvent(this.input1.nativeElement,'change')
      .pipe(
        map(x => this.input1.nativeElement.value)
      )
      .subscribe(x => {
        console.log(x)
        this.input1.nativeElement.value = ""
      })


    /*this.btn1.nativeElement.innerText = "btn1"
    console.log(this.btn1)*/
  }


  /*Alternative Methode über getElementById, benötigt die id
  public btn2:HTMLButtonElement
  ngOnInit() {
    //this.btn1.nativeElement.innerText = "btn2"

    this.btn1 = document.getElementById('btn2') as HTMLButtonElement
    console.log(this.btn2)
  }*/


}
