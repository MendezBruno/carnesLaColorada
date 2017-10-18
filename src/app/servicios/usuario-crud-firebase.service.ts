import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Usuario } from '../modelo/usuario';

@Injectable()
export class UsuarioCrudFirebaseService {

  private dbPath: string = '/clientes';
  public itemRef : any;
  
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object(this.dbPath);
   }
  

  guardarUsuario(user: Usuario){

  }


}
