import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public stunde
  public minute
  public sekunde
  public show
  public countdown

  @Input() done:boolean
  @Output('zero') setZeroEvent:EventEmitter<void>

  constructor() { 
    this.setZeroEvent = new EventEmitter<void>()
  }

  ngOnInit() {
  }

  zeitEvent(wert){
    if (!this.done){
    this.show = true
    const endzeit = new Date(Date.now()+(Number(wert)*60000)).getTime()

    this.countdown = setInterval(()=>{
      let jetzt = new Date().getTime()

      let rest = endzeit - jetzt

      this.stunde = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minute = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60))
      this.sekunde = Math.floor((rest % (1000 * 60)) / 1000)

      this.stunde = this.stunde < 10 ? "0" + this.stunde : this.stunde
      this.minute = this.minute < 10 ? "0" + this.minute : this.minute
      this.sekunde = this.sekunde < 10 ? "0" + this.sekunde : this.sekunde


      if (rest < 0 || this.done){
        this.show = false
        if (!this.done){
          this.setZeroEvent.emit()
        }
        this.sekunde = undefined

        clearInterval(this.countdown)
        return
      }
    }

    ,1000)

    }
  }

}
