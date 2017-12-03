import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatFormFieldControl} from '@angular/material/form-field';

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

  onFormSubmit(model){
    console.log(model);
  }

  keyDownFunction(event){
    console.log(event);
  }

}
