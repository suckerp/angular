import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class myArray {
  array:string[]

  constructor(array:string[]) {
    this.array = array
  }
  toString(){
    let str = "{{"
    for(let elem of this.array) {
      str += `${elem}, `
    }
    str += "}}"
    return str
  }

}





@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  puffer = new BehaviorSubject<string>("")

  myarray:myArray = new myArray(["1","2","3","vier"])

  constructor() { }

  setPuffer(eingabe:string){
    this.puffer.next(eingabe)
  }

}
