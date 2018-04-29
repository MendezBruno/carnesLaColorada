import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Publicacion } from '../modelo/publicacion';
import { Observable } from 'rxjs/Observable';

const SEPARADOR = '/';

@Injectable()
export class PublicacionCrudFirebaseService {

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
    obtenerListaDeProductos( ): Observable<any> {
      return this.db.list(this.dbPath).valueChanges();
    }

    addInfoToPublicatino(key: string, publicationWithNewInfo: Publicacion) {
      this.db.database.ref(this.dbPath + SEPARADOR + key).set(publicationWithNewInfo);
    }

    updatePublicacion(key: string, modifiedPublication: Publicacion) {
      this.itemsRef.update(key, modifiedPublication);
    }
    deletePublicacion(key: string) {
      this.itemsRef.remove(key);
    }
    deleteEverything() {
      this.itemsRef.remove();
    }
}
