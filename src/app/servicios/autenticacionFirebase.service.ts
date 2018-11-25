import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from '../modelo/templeteUser/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './shared.service';
import { FacebookUser } from '../modelo/templeteUser/facebookUser';
import { GoogleUser } from '../modelo/templeteUser/googleUser';
import { UserCrudFirebaseService } from './users/usuario-crud-firebase.service';



@Injectable()
export class AutenticacionFirebaseService {


  private userF: Observable<firebase.User>;
  private userFDetails: firebase.User = null;
  private user: User;

  constructor(
    public afAuth: AngularFireAuth,
    private sharedService: SharedService,
    private userCrudFirebase: UserCrudFirebaseService,
    private router: Router) {
    this.userF = afAuth.authState;

  }




  login() {
   this.user = new GoogleUser();
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFaceBook() {
    this.user = new FacebookUser();
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  // TODO LOGIN SIMPLE CON EMAIL Y CONTRASEÑA (MUST HAVE)

  logout() {
    localStorage.setItem('currentUser', null);
    localStorage.removeItem('currentUser');
    this.afAuth.auth.signOut().then((res) => this.router.navigate(['/login']));
  }
/* TODO:  hacer esto correctamente consulatando el provider del userFdetail
  isLoggedFaceBook() {
    if (this.userFDetails == null ) {
        return false;
      } else {
        return true;
      }
  }
*/
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



  loginAdmin(email: string, password: string): Promise<void | firebase.auth.UserCredential> {
      return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error En login Admin: ' + errorCode + errorMessage );
      return Promise.resolve(errorMessage);
      // ...
    });
  }

  searchAndsetUserStorage(): any {
    this.afAuth.authState.subscribe(
      (userF) => {
        if (userF) {
          this.userCrudFirebase.getUserById(userF.uid).subscribe(
            (user) => {

                  localStorage.setItem('currentItem', JSON.stringify(user));
                  this.sharedService.notifyUser(user);
                  this.userFDetails = userF;

           });
        }
      });

  }

  setNewUserStorage (): any {

    this.afAuth.authState.subscribe(
      (userF) => {
        if (userF) {
          this.user.setParameters(userF);
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.sharedService.notifyUser(this.user);
          this.userFDetails = userF;
        }
      });
  }

}
