import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutenticacionFirebaseService } from '../../servicios/autenticacionFirebase.service';
import { CarritoService } from '../../servicios/carrito.service';
import { Carro } from '../../modelo/carro';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, CarroState } from '../../app.states';
import { User } from '../../modelo/templeteUser/usuario';
import { AdminUser } from '../../modelo/templeteUser/adminUser';
import { SharedService } from '../../servicios/shared.service';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy {

  isLogIn = false;
  username: string;
  userpicture: string;
  carro: Carro;
  // todo agregar el numero de compras que hay en el carro.

 subscription: Subscription;
  isAdmin: boolean;

  constructor(private afService: AutenticacionFirebaseService,
    private carritoService: CarritoService,
    private router: Router,
    private store: Store<AppState>,
    private sharedService: SharedService) {
   // this.isLoggedIn();
    this.initilize();

  }

  ngOnInit() {  }

  initilize() {

    // Esto se va a ir me parece...
    // if (this.carro) { return; }
    // this.carritoService.obtenerCarro().then(
    //   carro => {
    //     this.carro = carro;
    //     console.log('llego el carro al nav-bar: ' + this.carro);
    //   }
    // );

    this.subscription = this.store.select('carro').subscribe(
      (data: CarroState) => {
        this.carro = new Carro();
        if (data.carro.items) {this.carro.items = data.carro.items; }
        console.log(this.carro);
      }
    );

    this.sharedService.observerUser$.subscribe(
      (user) => {

        if (user) {
          if ( user instanceof AdminUser  ) {
            const auxAdminUser = user as AdminUser;
            this.isAdmin = true;
            this.userpicture = auxAdminUser.photoURL;

          } else {
            this.userpicture = user.fotoPerfil;
            this.username = user.username;
          }
          this.isLogIn = true;
        } else {
          this.isLogIn = false;
        }
      });


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // isLoggedIn() {
  //   if (this.afService.isLoggedIn()) {
  //     const user = JSON.parse(localStorage.getItem('currentUser'));
  //     if ( user instanceof AdminUser  ) {
  //       const auxAdminUser = user as AdminUser;
  //       this.isAdmin = true;
  //       this.userpicture = auxAdminUser.photoURL;

  //     } else {
  //       this.userpicture = user.fotoPerfil;
  //       this.username = user.username;
  //     }
  //     this.isLogIn = true;
  //   }
  // }

  goToConsola() {
     this.router.navigate(['/admin/consola']);
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

