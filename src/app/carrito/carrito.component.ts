import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { PublicacionCrudFirebaseService } from '../servicios/publicacion-crud-firebase';
import { CarritoService } from '../servicios/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { ImagenesStorage } from '../modelo/imagenesStorages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  publicaciones: Publicacion[];
  carroId: string;
  items: any[] = [];
  itemsCar: ItemCar[] = [];
  total = 0;

  constructor(
    private pfc: PublicacionCrudFirebaseService,
    private carServ: CarritoService,
    private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.carroId = params['id'].toString();
      this.getItems(this.carroId);
      this.pfc.obtenerListaDeProductos().subscribe(
        (publicaciones) => {
          this.publicaciones = publicaciones;
          this.setModelos();
          this.getTotal();
        }
      );
    });
  }

  getItems(carroId) {
    this.carServ.obtenerListaItems(carroId).subscribe(
      (items) => {
        console.log('cargando items de carrito:');
        console.log(items);
        console.log('termine de cargar los item del carrito');
        this.items = items;
      });
  }

  setModelos() {
       this.items.forEach( (item) => {
       let publicacion = this.publicaciones.find(unaPublicacion => unaPublicacion.id === item.publicacionId );
       let itemCar = new ItemCar();
       itemCar.descripcion = publicacion.description;
       itemCar.fotos = publicacion.fotos;
       itemCar.precio = publicacion.precio;
       itemCar.cantidad = publicacion.cantidad;
       itemCar.tipoCantidad = publicacion.tipoCantidad;
       itemCar.publicacionId = publicacion.id;
       itemCar.titulo = publicacion.titulo;
       itemCar.stock = item.stock;
       itemCar.itemId = item.id;
       this.itemsCar.push(itemCar);
      } );
  }

  getTotal() {
    this.itemsCar.forEach (
      itemCar => this.total = this.total + itemCar.precio
    );
  }

  itemTieneFotos(item) {
    if (item.fotos) {return item.fotos.length > 0; }
    return false;
  }

  borrarItem(item) {
    console.log(item);
    this.carServ.deleteItem(item.itemId);
    this.itemsCar.splice(this.itemsCar.indexOf(item), 1);
  }

  goToPedidos() {
    this.router.navigate(['pedidos', this.carroId]);
  }

}


class ItemCar {

  stock: number;
  itemId: string;
  publicacionId: string;
  fotos: ImagenesStorage[];
  titulo: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  tipoCantidad: string;

}
