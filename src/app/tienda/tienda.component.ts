import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { PRODUCTOS } from './tienda-data';
import { Publicacion } from '../modelo/publicacion';
import { Router } from '@angular/router';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { PublicacionFilter } from '../search/publicacion-filter';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { Carro } from '../modelo/carro';
import { CarritoService } from '../servicios/carrito.service';

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

    constructor( private fUser: AutenticacionFirebaseService,
                 private pcf: PublicacionCrudFirebaseService,
                 private carritoService: CarritoService,
                 private router: Router) {
      this.pcf = pcf;
      this.pcf.obtenerListaDeProductos().subscribe(
        (data) => {
          this.publicaciones =  data;
          console.log(this.publicaciones);
        }
      );
      console.log('llegaron las publicaciones:');
      this.verificarCarro();
    }


  ngOnInit() {
  }

  handleQueryStringUpdate(queryString):  void {
    this.querySearch = queryString;
  }

  verificarCarro() {
    this.getMyCarrito(this.fUser.getUid());
  }

  getMyCarrito(userId: string): void {

    let bdCarro: Carro;
    if (this.carro) { return; }
    this.carritoService.obtenerListaDeCarros().subscribe(
      (data) => {
        bdCarro = data.find(carro => carro.userId === userId);
        this.carro = new Carro(bdCarro.userId);
        this.carro.id = bdCarro.id;
      }
    );
  }

}
