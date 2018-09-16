import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../../servicios/autenticacionFirebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserCrudFirebaseService } from '../../servicios/users/usuario-crud-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private autenticacionFirebase: AutenticacionFirebaseService,
    private af: AngularFireAuth,
    private fCrud: UserCrudFirebaseService,
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
