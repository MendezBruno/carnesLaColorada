import { Component, OnInit} from '@angular/core';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { CarritoService } from '../servicios/carrito.service';
import { Carro } from '../modelo/carro';
import { Router } from '@angular/router';





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

  constructor(af: AutenticacionFirebaseService, private carritoService: CarritoService, private router: Router) {
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
                    (carro) => {
                      this.carro = carro;
                      this.createReferenceToCarro(this.carro.id);
                    });
                  } else {
                    this.carro = this.carritoService.createCarro(userID);
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

  createReferenceToCarro(carroId: string) {
    this.carritoService.isPathItemsCreate(carroId).then(
      (snapshot) => {
            this.carritoService.getRefenceItemsObsevable(carroId).subscribe(
            (items) => {
              this.carro.items = items;
            });

    });
  }

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

  goTo() {
    this.router.navigate(['carrito', this.carro.id]);
  }


}

