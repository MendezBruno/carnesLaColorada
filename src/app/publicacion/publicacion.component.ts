import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  model: any = {};
  @Input() publicacion: Publicacion;

  constructor() { }

  ngOnInit() {
  }

  addToShop() {

  }

  publicacionTieneFotos(): boolean {
    return this.publicacion.fotos.length > 0;
  }

}
