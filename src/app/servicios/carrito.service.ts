import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../modelo/carro';
import { AutenticacionFirebaseService } from './autenticacionFirebase.service';
import { Item } from '../modelo/Item';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';



const SEPARADOR = '/';

@Injectable()

export class CarritoService {

  carroExist = false;
  carrito: Carro;
  carroStore: Observable<Carro>;


  constructor(private store: Store<AppState>) {
    if (this.hayCarro()) {
      const carro = localStorage.getItem('currentCarro');
      this.carrito = new Carro(JSON.parse(carro));
      this.carroExist = true;
    }
    this.carroStore = this.store.select('carro');
  }


  obtenerCarro(): Promise<Carro> {
    return this.carroExist ?  Promise.resolve(this.carrito) : Promise.resolve(this.crearCarro());
  }

  crearCarro(): Carro {
    this.carrito = new Carro();
    this.actualizar();
    return this.carrito;
  }

  deleteCarro() {
    localStorage.setItem('currentCarro', null);
    this.carrito = null;
  }

  deleteItem(idItem: string) {
    this.carrito.items.splice(this.carrito.items.findIndex(item => item.id === idItem), 1);
  }

  addItem(cantidad: number, idPublicacion: string) {
    this.carrito.addItem(new Item (cantidad, idPublicacion));
    this.actualizar();
  }
  hayCarro(): boolean {
  const carro = localStorage.getItem('currentCarro');
    return carro !== undefined && carro !== null;
  }

  actualizar() {
    localStorage.setItem('currentCarro', JSON.stringify(this.carrito));
  }
}

// (!carro) { resolve(this.createCarro(id)); } else {  resolve(new Carro(id)); }},
