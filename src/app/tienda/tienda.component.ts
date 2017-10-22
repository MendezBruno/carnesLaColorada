import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { PRODUCTOS } from './tienda-data';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

    productos: Producto[];
    links: string[] = ['uno', 'dos', 'tres'];

  constructor() {
    this.productos = PRODUCTOS;
  }

  ngOnInit() {
  }

}
