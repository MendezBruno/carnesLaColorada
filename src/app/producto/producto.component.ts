import { Component, OnInit } from '@angular/core';
import { ProductoCrudFirebaseService } from '../servicios/producto-crud-firebase.service';
import { Producto } from '../modelo/producto';
import { UNPRODUCTO } from './producto-data';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:Producto;

  constructor(public _dbProducto: ProductoCrudFirebaseService ) { 
    this.producto = UNPRODUCTO
   }

  ngOnInit() {
  }

  guardar(producto: Producto) {
   this._dbProducto.guardarProd(producto);
  }
}
