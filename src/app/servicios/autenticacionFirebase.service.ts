import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 

@Injectable()
export class AutenticacionFirebaseService {
 
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  loginFaceBook(){
    var provider = new firebase.auth.FacebookAuthProvider();
  return  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
    //return result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}
