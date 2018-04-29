import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../modelo/carro';
import 'rxjs/add/operator/toPromise';
import { AutenticacionFirebaseService } from './autenticacionFirebase.service';
import { Item } from '../modelo/Item';




const SEPARADOR = '/';

@Injectable()

export class CarritoService {

  carroExist = false;
  carrito: Carro;


  constructor() {
    const carro = localStorage.getItem('currentCarro');
    if (carro) {
      this.carrito = new Carro(JSON.parse(carro));
      this.carroExist = true;
    }
  }


  obtenerCarro(): Promise<Carro> {
    return this.carroExist ?  Promise.resolve(this.carrito) : Promise.resolve(this.crearCarro());
  }

  crearCarro(): Carro {
    this.carrito = new Carro();
    localStorage.setItem('currentCarro', JSON.stringify(this.carrito));
    return this.carrito;
  }

  deleteCarro() {
    localStorage.setItem('currentCarro', null);
    this.carrito = null;
  }

  deleteItem(key: string) {
    // this.itemsRef.remove(key);
  }

  addItem(cantidad: number, idPublicacion: string) {
    this.carrito.addItem(new Item (cantidad, idPublicacion));
  }



}

// (!carro) { resolve(this.createCarro(id)); } else {  resolve(new Carro(id)); }},
