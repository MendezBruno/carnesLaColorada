import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AutenticacionFirebaseService } from '../servicios/autenticacionFirebase.service';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private autenticacionFirebase: AutenticacionFirebaseService) { }

  ngOnInit() {
  }

  login(){
    this.autenticacionFirebase.login()
        .then((data)=>{
          console.log(data);
          alert('estoy logueado');
        })
        .catch((error)=>{
          console.log(error);
          alert('hubo un error al loguearse');
        } )
  }

  loginFacebook(){
    this.autenticacionFirebase.loginFaceBook()
/*.then((data)=>{
          console.log(data);
          alert('estoy logueado');
        })*/
  }

}
