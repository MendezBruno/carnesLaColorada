import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  publicaciones: Publicacion[];
  constructor(private pfc: PublicacionCrudFirebaseService, private carServ: CarritoService) {
    this.pfc.obtenerListaDeProductos().subscribe(
      (publicaciones) => {this.publicaciones = publicaciones; }
    );
   // this.carServ.
   }

  ngOnInit() {
  }

}
