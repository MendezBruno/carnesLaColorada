import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Publicacion } from '../../modelo/publicacion';
import { Observable } from 'rxjs/Observable';
import { PublicacionRepository } from './publicacionRepository';

const SEPARADOR = '/';

@Injectable()
export class PublicacionCrudFirebaseService implements PublicacionRepository {
  
  private dbPath = 'publicaciones';
  publications: Observable<any[]>;
  public itemsRef: any;
  productoRef: any;
  public publicacion: Publicacion;
  public publicaciones: Publicacion[];

  constructor(private db: AngularFireDatabase) {

    this.itemsRef = this.db.list(this.dbPath);
    this.publications = this.itemsRef.snapshotChanges().map(changes => {
      console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
      this.itemsRef.snapshotChanges(['child_added'])
          .subscribe(actions => {
            actions.forEach(action => {
              console.log(action.type);
              console.log(action.key);
              console.log(action.payload.val());
            });
          });
          
    }
    
    guardarPublicacion(publicacion: Publicacion) {
      const refKey = this.itemsRef.push(publicacion).key;
      console.log('Guarde La Publicacion');
      console.log(refKey);
      publicacion.id = refKey;
      this.db.database.ref(this.dbPath + SEPARADOR + refKey).set(publicacion);
      
    }
    obtenerListaDePublicaciones( ): Observable<any> {
      return this.db.list(this.dbPath).valueChanges();
    }

    addInfoToPublicatino(key: string, publicationWithNewInfo: Publicacion) {
      this.db.database.ref(this.dbPath + SEPARADOR + key).set(publicationWithNewInfo);
    }
    
    updatePublicacion(modifiedPublication: Publicacion) {
      this.itemsRef.update(modifiedPublication.id, modifiedPublication);
    }
   
    deleteEverything() {
      this.itemsRef.remove();
    }
    // getPublicacion(): Observable<Publicacion> {
    //  return (this.db.list(this.dbPath).valueChanges())
    // }
    // getPublicacionById(id: any): Publicacion {
    //   throw new Error("Method not implemented.");
   // }
    addPublicacion(publicacion: Publicacion) {
      throw new Error("Method not implemented.");
    }
    deletePublicacion(publicacion: Publicacion) {
      this.itemsRef.remove(publicacion.id);
    }
  }
