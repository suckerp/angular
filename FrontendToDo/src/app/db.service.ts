import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as rx from 'rxjs'
import * as op from 'rxjs/operators'

export type Person = {
  pid: number,
  firstName: string,
  lastName: string
}

export type TodoList = {
  tid: number,
  text: string,
  status: boolean,
  fk_pid: number
}

export type getTable = {
  table: string,
  cols: string[],
  wheres: string[]
}


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public _http:HttpClient) { 

  }

  funktionstest$():rx.Observable<Person>{
    return this._http.post<Person>("http://localhost:3000/test", {
      tid:1, 
      firstName: "ich", 
      lastName: "Auch"
    })
  }

}
