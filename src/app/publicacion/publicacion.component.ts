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

  getMyCarrito(userId: string): void {
    this.carritoService.obtenerListaDeCarros().subscribe(
      (data) => {
        this.carro = data.find(carro => carro.userId === userId);
        if (!this.carro) { this.createCarro(userId); }
      }
    );
  }

  createCarro(userId: string) {
    this.carro = new Carro(userId);
    this.carritoService.guardarCarro(this.carro);
  }

  addToShop() {
    if (this.model.cantidad < 1) { return; }
    // Todo agregar publicacion al carro!!
  }

  verificarCarro() {
    this.getMyCarrito(this.fUser.getUid());
  }

  publicacionTieneFotos(): boolean {
    return this.publicacion.fotos.length > 0;
  }


}
