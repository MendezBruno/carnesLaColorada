import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Producto } from '../modelo/producto';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductoCrudFirebaseService {

  private dbPath = 'productos';
  public itemRef: any;
  productoRef: any;
  public producto: Producto;
  public productos: Producto[];

  constructor(private db: AngularFireDatabase) {  }

  guardarProd(producto: Producto) {
  this.itemRef = this.db.list(this.dbPath);
  this.itemRef.push(producto);
  }

  getPublicacion( ): Observable<any[]> {
    return this.db.list(this.dbPath).valueChanges();
  }


}
