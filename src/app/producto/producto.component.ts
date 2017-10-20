import { Component, OnInit } from '@angular/core';
import { ProductoCrudFirebaseService } from '../servicios/producto-crud-firebase.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public _dbProducto: ProductoCrudFirebaseService ) {  }

  ngOnInit() {
  }

  guardar(producto: Producto) {
   this._dbProducto.guardarProd(producto);
  }
}
