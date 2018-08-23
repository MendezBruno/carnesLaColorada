import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../modelo/publicacion';
import { Carro } from '../../modelo/carro';
import { CarritoService } from '../../servicios/carrito.service';
import { PublicacionCrudFirebaseService } from '../../servicios/publicaciones/publicacion-crud-firebase';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {


  publicaciones: Publicacion[];
  currentPhoto = 0;
  querySearch: string;
  carro: Carro;

  constructor(  private pcf: PublicacionCrudFirebaseService, private carritoService: CarritoService) {
    this.pcf = pcf;
    this.pcf.getPublicacion().subscribe(
      (data) => {
        this.publicaciones =  data;
        console.log(this.publicaciones);
      }
    );
    console.log('llegaron las publicaciones:');
   // this.verificarCarro();
  }

  // cambiar por el store del carrito
  ngOnInit() {
    this.carritoService.obtenerCarro().then( carro => this.carro = carro );
  }

  handleQueryStringUpdate(queryString):  void {
    this.querySearch = queryString;
  }
}
