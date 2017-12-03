import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-publicacion',
  templateUrl: './crud-publicacion.component.html',
  styleUrls: ['./crud-publicacion.component.css']
})
export class CrudPublicacionComponent implements OnInit {

model: any = {};

  constructor( ) { }

  ngOnInit() {
  }

}
