import { Component, OnInit } from '@angular/core';
import { Person, DbService } from '../db.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public db:DbService) { }

  ngOnInit() {
  }

}
