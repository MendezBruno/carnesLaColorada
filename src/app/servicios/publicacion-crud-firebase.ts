import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Publicacion } from '../modelo/publicacion';

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
    }

    guardarPublicacion(publicacion: Publicacion) {
    this.itemsRef.push(publicacion);
    }
    obtenerListaDeProductos( ): Observable<Publicacion[]> {
      return this.db.list(this.dbPath).valueChanges();
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