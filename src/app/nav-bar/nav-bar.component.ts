import { Component, OnInit} from '@angular/core';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { CarritoService } from '../servicios/carrito.service';
import { Carro } from '../modelo/carro';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  username: string;
  userpicture: string;
  carro: Carro;
  //todo agregar el numero de compras que hay en el carro.


  private af: AutenticacionFirebaseService;

  constructor(af: AutenticacionFirebaseService, private carritoService: CarritoService) {
    this.af = af;
  }

  ngOnInit() { }

  getMyCarrito() {
    console.log('carro del nav: ');
    if (this.carro) { return; }
    this.carritoService.getCarroById(this.getUserID()).then(
      (carro) => {if (carro) {  this.carro = carro; }}
    );
    if (!this.carro) {
      this.carro = this.carritoService.createCarro(this.getUserID());
    }
    console.log( this.carro );
  }

  isLoggedIn() {
    if ( this.af.isLoggedIn() ) {
      this.userpicture = this.af.getPicture();
      this.getMyCarrito();
      return true;
    }
   return false;
  }

  logout() {
    this.af.logout();
  }

  getUserName( ) {
    return this.af.getName();
  }

  getUserID() {
    return this.af.getUid();
  }



}

