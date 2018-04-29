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

  isLogIn = false;
  username: string;
  userpicture: string;
  carro: Carro;
  // todo agregar el numero de compras que hay en el carro.


  private afService: AutenticacionFirebaseService;

  constructor(afService: AutenticacionFirebaseService, private carritoService: CarritoService, private router: Router) {
    this.afService = afService;
    this.isLoggedIn();
    this.initilize();
  }

  ngOnInit() {
  }

  initilize() {
    if (this.carro) { return; }
    this.carritoService.obtenerCarro().then( carro => this.carro );

  }

  /*
  initilize() {
    if (this.carro) { return; }
    this.afService.promiseUid().then(
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



      this.afService.promiseUid().catch((error) => {console.log(error); });
    }
*/

/*
  getMyCarrito(userID: string) {
    console.log('carro del nav: ');
//    if (this.carro) { return; }
    this.carritoService.getCarroById(userID).then(
      (carro) => {  this.carro = carro; }
  ); }
*/

/*
  createReferenceToCarro(carroId: string) {
    this.carritoService.isPathItemsCreate(carroId).then(
      (snapshot) => {
            this.carritoService.getRefenceItemsObsevable(carroId).subscribe(
            (items) => {
              this.carro.items = items;
            });

    });
  }
*/

  isLoggedIn() {
    if ( this.afService.isLoggedIn() ) {
      const user = localStorage.getItem('currentUser');
      this.isLogIn = true;
    }
  }

  logout() {
    this.afService.logout();
  }

  getUserName( ) {
    return this.afService.getName();
  }

  getUserID() {
    return this.afService.getUid();
  }

  goTo() {
    this.router.navigate(['carrito']);
  }


}

