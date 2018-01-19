import { Component, OnInit, Input } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { CarritoService } from '../servicios/carrito.service';
import { Carro } from '../modelo/carro';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {




  model: any = {};
  @Input() publicacion: Publicacion;
  carro: Carro;

  constructor(private fUser: AutenticacionFirebaseService, private carritoService: CarritoService) { }

  ngOnInit() {
    this.verificarCarro();
  }




  addToShop() {
    if (this.model.cantidad < 1 || this.carro.haveThisPublication(this.publicacion.id)) { return; }
    this.carro.addItem(this.model.cantidad, this.publicacion.id);
    this.carritoService.updateCarro(this.carro.id, this.carro);
    // todo actualizar stock de publicacion?
    // *todo* agregar alguna tipo de animacion que muestre que se agrega al carro? (snack bar?)
  }

  verificarCarro() {
   this.getMyCarrito(this.fUser.getUid());
  }

  publicacionTieneFotos(): boolean {
    return this.publicacion.fotos.length > 0;
  }


  getMyCarrito(userId: string): void {

    if (this.carro) { return; }
    this.carritoService.obtenerListaDeCarros().subscribe(
      (data) => {
        this.carro = data.find(carro => carro.userId === userId);

      }
    );
  }

}
