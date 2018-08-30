import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Publicacion } from '../../modelo/publicacion';
import { AutenticacionFirebaseService } from '../../servicios/autenticacionFirebase.service';
import { CarritoService } from '../../servicios/carrito.service';
import { Carro } from '../../modelo/carro';
import { Item } from '../../modelo/item';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.states';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit, OnDestroy {

  model: any = {};
  @Input() publicacion: Publicacion;
  @Input() carro: Carro;
  carrito: Carro;
  hayFotos: boolean;
  subscription: Subscription;

  constructor( private carritoService: CarritoService, private store: Store<AppState>) {
    this.model.cantidad = 0;
   }

  ngOnInit() {
    this.hayFotos = this.publicacion.tieneFotos()
    // this.carritoService.obtenerCarro().then(
    //   carro => {
    //      this.carro = carro;
    //   });
    this.subscription = this.store.select('carro').subscribe( carroState => this.carro = carroState.carro );
  }
  addToShop() {
    if (this.model.cantidad < 1 || this.haveThisPublication(this.publicacion.id)) { return; }
    this.carritoService.addItem(this.model.cantidad, this.publicacion.id);
  }

  haveThisPublication(publicacionId: string): boolean {
    return this.carro.items.filter(item => item.publicacionId === publicacionId).length > 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
