import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { MatButtonModule } from '@angular/material';

import { Usuario } from '../modelo/usuario';
import { UsuarioCrudFirebaseService } from '../servicios/usuario-crud-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private autenticacionFirebase: AutenticacionFirebaseService,
              private af: AngularFireAuth,
              private fCrud: UsuarioCrudFirebaseService,
              private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    this.autenticacionFirebase.login()
        .then((data) => {
          console.log(data);
          this.goTo('/tienda');
        })
        .catch((error) => {
          console.log(error);
          alert('hubo un error al loguearse');
          this.goTo('/inicio');
        });
  }

  loginFacebook() {
    this.autenticacionFirebase.loginFaceBook().then((data) => {
      console.log(data);
      this.goTo('/tienda');
    })
    .catch((error) => {
      console.log(error);
      alert('hubo un error al loguearse');
      this.goTo('/inicio');
    });

  }

  logOut() {
    this.autenticacionFirebase.logout();
    this.goTo('/firebase');
  }

  goTo(path: string) {
  this.router.navigate([path]);
  }

}
