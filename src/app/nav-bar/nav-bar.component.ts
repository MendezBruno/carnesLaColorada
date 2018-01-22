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
  // todo agregar el numero de compras que hay en el carro.


  private af: AutenticacionFirebaseService;

  constructor(af: AutenticacionFirebaseService, private carritoService: CarritoService) {
    this.af = af;
    this.initilize();
  }

  ngOnInit() {
   
  }

  initilize() {
    if (this.carro) { return; }
    this.af.promiseUid().then(
      (userID) => {
        console.log('entre a la promesa del ID:');
        console.log(userID);
        this.carritoService.isPathRootCreate().then(
          (snapshot) => {
                 if (snapshot.exists()) {
                    this.carritoService.getCarroById(userID).then(
                    (carro) => {  this.carro = carro; });
                  } else {
                    this.carritoService.createCarro(userID);
                  }

                });
      },
      (error) => {console.log(error); });

      this.af.promiseUid().catch((error) => {console.log(error); });
    }

  getMyCarrito(userID: string) {
    console.log('carro del nav: ');
//    if (this.carro) { return; }
    this.carritoService.getCarroById(userID).then(
      (carro) => {  this.carro = carro; }
  ); }

  // getMyCarrito(userId: string): void {

  //   if (this.carro) { return; }
  //   this.carritoService.obtenerListaDeCarros().subscribe(
  //           (data) => {
  //             console.log('entre al suscribe de carro: ');
  //             this.carro = data.find(carro => carro.userId === userId);
  //             console.log(this.carro);
  //             if (!this.carro) {
  //               this.carro = this.carritoService.createCarro(userId);
  //                 console.log('carro del nav creado: ');
  //                 console.log(this.carro); }
  //     }
  //   );
  // }

  isLoggedIn() {
    if ( this.af.isLoggedIn() ) {
      this.userpicture = this.af.getPicture();
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

