import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutenticacionFirebaseService } from '../../servicios/autenticacionFirebase.service';
import { CarritoService } from '../../servicios/carrito.service';
import { Carro } from '../../modelo/carro';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, CarroState } from '../../app.states';





@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy{

  isLogIn = false;
  username: string;
  userpicture: string;
  carro: Carro;
  // todo agregar el numero de compras que hay en el carro.


  private afService: AutenticacionFirebaseService;
  subscription: Subscription;

  constructor( afService: AutenticacionFirebaseService,
    private carritoService: CarritoService,
    private router: Router,
    private store: Store<AppState>) {
    this.afService = afService;
    this.isLoggedIn();
    this.initilize();
  }

  ngOnInit() {
  }

  initilize() {
    if (this.carro) { return; }
    this.carritoService.obtenerCarro().then(
      carro => {
        this.carro = carro;
        console.log('llego el carro al nav-bar: ' + this.carro);
      }
    );

    this.subscription = this.store.select('carro').subscribe(
      (data: CarroState) => {
        this.carro = new Carro();
        if (data.carro.items) this.carro.items = data.carro.items;
        console.log(this.carro);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
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
    if (this.afService.isLoggedIn()) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.userpicture = user.providerData[0].photoURL;
      this.username = user.displayName;
      this.isLogIn = true;
    }
  }

  logout() {
    this.afService.logout();
  }

  getUserName() {
    return this.afService.getName();
  }

  getUserID() {
    return this.afService.getUid();
  }

  goTo() {
    this.router.navigate(['carrito']);
  }


}

