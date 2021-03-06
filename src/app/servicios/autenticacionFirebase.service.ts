import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Usuario } from '../modelo/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AutenticacionFirebaseService {

  private userF: Observable<firebase.User>;
  private userFDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

  this.userF = afAuth.authState;

  this.userF.subscribe(
      (userF) => {
        if (userF) {
          this.userFDetails = userF;
          console.log('entre al suscribe');
          console.log(this.userFDetails);
          localStorage.setItem('currentUser', JSON.stringify(userF));
        } else {
          this.userFDetails = null;
        }
      }
    );
  }
  login() {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFaceBook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  logout() {
    localStorage.setItem('currentUser', null);
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/firebase']));
  }

  isLoggedFaceBook() {
    if (this.userFDetails == null ) {
        return false;
      } else {
        return true;
      }
  }

  isLoggedIn() {
    const user = localStorage.getItem('currentUser');
    return user !== undefined && user !== null;
  }

  getName(): string {
    return this.userFDetails.displayName;
  }

  getPicture(): string {
    return this.userFDetails.photoURL;
  }

  getUid(): string {
    return this.userFDetails.uid;
  }

  promiseUid(): Promise<string> {
   const promise = new Promise<string>((resolve, reject) => {
      let userid;
      this.userF.subscribe(
        (userF) => {
          userid = userF.uid;
          if (userid) { resolve(userid); } else {reject('todo mal'); }
        }
      );
   });
   return promise;
  }



  loginAdmin(email: string, password: string) {
      return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error En login Admin: ' + errorCode + errorMessage );
      // ...
    });
  }
}
