import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesStoreService } from '../servicios/images-store.service';

@Component({
  selector: 'app-crud-publicacion',
  templateUrl: './crud-publicacion.component.html',
  styleUrls: ['./crud-publicacion.component.css'],
  providers:[ImagesStoreService],
})
export class CrudPublicacionComponent implements OnInit {

model: any = {};

  constructor(dbImeges: ImagesStoreService) { }

  ngOnInit() {
  }

  onFormSubmit(model){
    console.log(model);
  }

  keyDownFunction(event){
    console.log(event);
  }

}
