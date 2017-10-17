import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { MatButtonModule } from '@angular/material';

import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  private userFDetails: firebase.User = null;

  constructor(private autenticacionFirebase: AutenticacionFirebaseService, private af: AngularFireAuth) {

  }

  ngOnInit() {
  }

  login() {
    this.autenticacionFirebase.login()
        .then((data) => {
          console.log(data);
          alert('estoy logueado');
        })
        .catch((error) => {
          console.log(error);
          alert('hubo un error al loguearse');
        });
  }

  loginFacebook() {
    this.autenticacionFirebase.loginFaceBook().then((data) => {
      console.log(data);
      alert('estoy logueado');
    })
    .catch((error) => {
      console.log(error);
      alert('hubo un error al loguearse');
    });

  }

  logOut() {
    this.autenticacionFirebase.logout();
  }

}
