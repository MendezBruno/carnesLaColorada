import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../../servicios/autenticacionFirebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserCrudFirebaseService } from '../../servicios/users/usuario-crud-firebase.service';
import { Router } from '@angular/router';
import { SimpleUser } from '../../modelo/templeteUser/simpleUser';
import { FacebookUser } from '../../modelo/templeteUser/facebookUser';
import { GoogleUser } from '../../modelo/templeteUser/googleUser';



@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private autenticacionFirebase: AutenticacionFirebaseService,
    private af: AngularFireAuth,
    private fCrud: UserCrudFirebaseService,
    private router: Router) { }

  ngOnInit() { }

  login() {
    this.autenticacionFirebase.login()
    .then( (data: firebase.auth.UserCredential) => {
      if (data.additionalUserInfo.isNewUser) {
        // TODO preguntar si desea completar el perfil ahora o despues
        // this.fCrud.addUser(new GoogleUser(data.user));
      }
      this.goTo('/tienda');
    })
    .catch((error) => {
      console.log(error);
      alert('hubo un error al loguearse');
      this.goTo('/inicio');
    });
  }

  loginFacebook() {
    this.autenticacionFirebase.loginFaceBook()
    .then((data: firebase.auth.UserCredential) => {
      console.log(data);
      if (data.additionalUserInfo.isNewUser) {
        // TODO preguntar si desea completar el perfil ahora o despues
        // this.fCrud.addUser(new FacebookUser(data.user));
      }
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

