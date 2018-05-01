import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { CarritoService } from '../servicios/carrito.service';
import { Carro } from '../modelo/carro';
import { Item } from '../modelo/Item';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  model: any = {};
  @Input() publicacion: Publicacion;
  @Input() carro: Carro;
  carrito: Carro;

  constructor( private carritoService: CarritoService) {
    this.model.cantidad = 0;
   }

  ngOnInit() {
    this.carritoService.obtenerCarro().then(
      carro => {
         this.carro = carro;
      });
  }
  addToShop() {
    if (this.model.cantidad < 1 || this.haveThisPublication(this.publicacion.id)) { return; }
    this.carritoService.addItem(this.model.cantidad, this.publicacion.id);
  }

  publicacionTieneFotos(): boolean {
    if (this.publicacion.fotos) { return this.publicacion.fotos.length > 0; }
    return false;
  }

  haveThisPublication(publicacionId: string): boolean {
    return this.carro.items.filter(item => item.publicacionId === publicacionId).length > 0;
  }

}


/*

 if (this.model.cantidad < 1 || this.carro.haveThisPublication(this.publicacion.id)) { return; }
      let item = this.carro.addItem(this.model.cantidad, this.publicacion.id);
   //   this.carro.items.length === 1 ? this.carritoService.addInfoToCarro(this.carro.id, this.carro) :
  //                               this.carritoService.addItem(item);
      this.carritoService.addItem(item, this.carro.id);

                                    // todo actualizar stock de publicacion?
    // *todo* agregar alguna tipo de animacion que muestre que se agrega al carro? (snack bar?)


*/
