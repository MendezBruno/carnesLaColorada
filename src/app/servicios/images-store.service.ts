import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { ImagenesStorage } from '../modelo/imagenesStorages';

//import { storage } from 'firebase/app';

@Injectable()
export class ImagesStoreService {

basePath: string = 'imagenes';
imagesStorages: ImagenesStorage[];
imagesObservable: Observable<ImagenesStorage[]>;
imagesRef : AngularFireList<any[]>;
db : AngularFireDatabase

// Get a reference to the storage service, which is used to create references in your storage bucket
//storage = firebase.storage();

// Create a storage reference from our storage service
//storageRef = this.storage.ref();

  constructor(private fb: FirebaseApp, db: AngularFireDatabase) {

    // const storageRef = firebase.storage().ref();
    // var imagenes = storageRef.child('imagenes');
    // console.log("construi el servicio de imagenes: ")
    // console.log(imagenes.getDownloadURL());
    this.db = db;
  }

  getListImages(){
     this.imagesRef = this.db.list('imagenes');
     this.imagesObservable = this.imagesRef.valueChanges();
     this.imagesObservable.subscribe( 
      (data) => {
        this.imagesStorages = data
        console.log(this.imagesStorages)
      }
    )
  }

getListImageStorage () :  Observable<ImagenesStorage[]> {
  this.imagesRef = this.db.list('imagenes');
  return this.imagesRef.valueChanges();
}

/*
getImages(){
  // Create a reference to the file we want to download
var starsRef = storageRef.child('images/stars.jpg');


// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;



    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});
}
*/

}
