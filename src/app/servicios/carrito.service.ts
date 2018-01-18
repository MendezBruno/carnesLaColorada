import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../modelo/carro';
import 'rxjs/add/operator/toPromise';


const SEPARADOR = '/';

@Injectable()
export class CarritoService {

  private dbPath = 'carritos';
  publications: Observable<any[]>;
  public itemsRef: any;
  carritoRef: any;
  public carrito: Carro;
  public carritos: Carro[] = [];


  constructor(private db: AngularFireDatabase) {

    this.itemsRef = this.db.list(this.dbPath);
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

  createCarro(userId: string): Carro {
    let carro = new Carro(userId);
    return this.guardarCarro(carro);
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
    let carro: Carro;
    return this.obtenerListaDeCarros().toPromise().then( (data) => {
      carro = data.find(unCarro => unCarro.userId === id);
      return carro;
    });
  }
}

