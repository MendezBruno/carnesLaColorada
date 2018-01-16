import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { PRODUCTOS } from './tienda-data';
import { Publicacion } from '../modelo/publicacion';
import { Router } from '@angular/router';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  
    publicaciones: Publicacion[];
    currentPhoto = 0;
  
    constructor(private router: Router, private pcf: PublicacionCrudFirebaseService) {
      this.pcf = pcf;
      this.pcf.obtenerListaDeProductos().subscribe(
        (data) => {
          this.publicaciones =  data;
        }
      );
      console.log('llegaron las publicaciones:');
    }
  

  ngOnInit() {
  }

}
