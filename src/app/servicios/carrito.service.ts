import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../modelo/carro';
import 'rxjs/add/operator/toPromise';



const SEPARADOR = '/';

@Injectable()
export class CarritoService {

  private dbPath = 'carritos';
  public itemsRef: any;
  carritoRef: any;
  public carrito: Carro;
  public carritos: Observable<any[]>;
 
  public db;

  constructor(db: AngularFireDatabase) {

    this.db = db;
    this.itemsRef = this.db.list(this.dbPath);
    console.log('entre al constructor de carrito');
    this.carritos = this.itemsRef.snapshotChanges().map(changes => {
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
    const refKey = this.itemsRef.push(carro).key;
    console.log('Guarde La carro');
    console.log(refKey);
    carro.id = refKey;
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
    this.itemsRef.update(key, modifiedCarro);
  }

  deleteCarro(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
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

  //  this.obtenerListaDeCarros().subscribe(
  //   (data) => {
  //      if (data) {
  //         carro = data.find(unCarro => unCarro.userId === id);
  //         resolve(carro); }
  //      else {reject(new Carro(id)); }},
  //   (error) => {reject(error); },
  //   () => {console.log('Se completo el puto subcribe'); }
  // );



}

// (!carro) { resolve(this.createCarro(id)); } else {  resolve(new Carro(id)); }},