import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../modelo/carro';
import 'rxjs/add/operator/toPromise';
import { AutenticacionFirebaseService } from './autenticacionFirebase.service';
import { Item } from '../modelo/Item';




const SEPARADOR = '/';

@Injectable()

export class CarritoService {

  // Carritos
  private dbPath = 'carritos';
  public carritosRef: any;
  carritoRef: any;
  public carrito: Carro;
  public carritos: Observable<any[]>;
 
  // Items de los carritos
  private dbPathItems = 'carritos/items';
  public itemsRef: any;
  itemRef: any;
  public item: Item;
  public Items: Observable<any[]>;

  public db;



  constructor(db: AngularFireDatabase, private authFb: AutenticacionFirebaseService) {

    this.db = db;
    this.carritosRef = this.db.list(this.dbPath);
    console.log('entre al constructor de carrito');
    this.carritos = this.carritosRef.snapshotChanges().map(changes => {
      console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.carritosRef.snapshotChanges(['child_added'])
    .subscribe(actions => {
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
      });
    });

  }


  obtenerCarro(): any {
    throw new Error('Method not implemented.');
  }


  isPathRootCreate() {
   return this.db.database.ref(this.dbPath).once('value');
 //   .then(function(snapshot) {
 //       this.pathExist = snapshot.exists();
 //   });
  }


  createCarro(userId: string): Carro {
    return this.guardarCarro(new Carro(userId));
  }

  guardarCarro(carro: Carro): Carro {
    const refKey = this.carritosRef.push(carro).key;
    console.log('Guarde La carro');
    console.log(refKey);
    // carro.id = refKey;
    this.db.database.ref(this.dbPath + SEPARADOR + refKey).set(carro);
    return carro;
  }

  obtenerListaDeCarros( ): Observable<Carro[]> {
    return this.db.list(this.dbPath).valueChanges();
  }

  addInfoToCarro(key: string, carroWithNewInfo: Carro) {
    this.db.database.ref(this.dbPath + SEPARADOR + key).set(carroWithNewInfo);
  }

  updateCarro(key: string, modifiedCarro: Carro) {
    this.carritosRef.update(key, modifiedCarro);
  }

  deleteCarro(key: string) {
    this.carritosRef.remove(key);
  }
  deleteEverything() {
    this.carritosRef.remove();
  }

  getCarroById(id: string): Promise<Carro> {
    const promise = new Promise<Carro>( (resolve, reject) => {
      if (this.carritos) {
        this.carritos.subscribe( (carritos) => resolve( carritos.find(unCarro => unCarro.userId === id)));
      }else {
        reject(new Carro(id));
      }
    });
   return promise;
   }

  getRefenceItemsObsevable(idCarro: string): Observable<any> {
    this.itemsRef = this.db.list(this.dbPath + SEPARADOR + idCarro + SEPARADOR + 'items');
    this.itemsRef.snapshotChanges(['child_added'], ['child_removed']);
    this.itemsRef.snapshotChanges().map(changes => {
                            console.log(changes);
                            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                          });
    return this.db.list(this.dbPath + SEPARADOR + idCarro + SEPARADOR + 'items').valueChanges();
  }

  obtenerListaItems (idCarro: string): Observable<any> {
   return this.db.list(this.dbPath + SEPARADOR + idCarro + SEPARADOR + 'items').valueChanges();
  }

  isPathItemsCreate(idCarro: string) {
    return this.db.database.ref(this.dbPath + SEPARADOR + idCarro + SEPARADOR + 'items').once('value');
  }

  addItem(item, idCarro) {
    const refKey = this.itemsRef.push(item).key;
    console.log('Guarde el Item');
    console.log(refKey);
    item.id = refKey;
    this.db.database.ref(this.dbPath + SEPARADOR + idCarro + SEPARADOR + 'items' + SEPARADOR + refKey).set(item);
  }

  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
}

// (!carro) { resolve(this.createCarro(id)); } else {  resolve(new Carro(id)); }},
