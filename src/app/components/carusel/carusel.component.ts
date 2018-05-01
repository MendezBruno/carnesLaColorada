import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

  
  @Input() imagenes;
  imagenPath: any;
  index = 0;

  constructor() { }

  ngOnInit() {
    if ( this.imagenes !== undefined ) {
      this.imagenPath = this.imagenes[this.index].url;
    }
  }

  cambiarImagenAnterior() {
    if (this.imagenes[this.index - 1] !== undefined) {
      this.index = this.index - 1;
      this.imagenPath = this.imagenes[this.index].url;
    }
  }

  cambiarImagenSiguiente() {
    if (this.imagenes[this.index + 1] !== undefined) {
      this.index = this.index + 1;
      this.imagenPath = this.imagenes[this.index].url;
    }
  }

}
