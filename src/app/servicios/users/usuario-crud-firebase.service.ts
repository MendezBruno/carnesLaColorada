import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { User } from '../../modelo/usuario';
import { UserRepository } from './userRepository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const SEPARADOR = '/';

@Injectable()
export class UserCrudFirebaseService implements UserRepository {

  private dbPath = 'clientes';
  private itemsRef: AngularFireList<any>;
  private clientRef: AngularFireObject<any>;
  clients: any;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list(this.dbPath);
    this.clients = this.itemsRef.snapshotChanges().pipe(
      map((changes) =>  changes ),
      map(() => (c => ({ key: c.payload.key, ...c.payload.val() })) )
    );

    this.itemsRef.snapshotChanges(['child_added'])
        .subscribe(actions => {
          actions.forEach(action => {
            console.log(action.type);
            console.log(action.key);
            console.log(action.payload.val());
          });
    });
  }


  getUser(): Observable<User[]> {
    return this.db.list(this.dbPath).valueChanges() as Observable<User[]>;
  }
  getUserById(id: string): Observable<User> {
    return this.db.object(this.dbPath + SEPARADOR + id ).valueChanges() as Observable<User>;
  }

  addUser(user: User): Promise<User> {
    const refKey = this.itemsRef.push(user).key;
    console.log('Guarde La Publicacion');
    console.log(refKey);
    user.id = refKey;
    return this.db.database.ref(this.dbPath + SEPARADOR + refKey).set(user);
  }
  updateUser(modifierUser: User): Promise<any> {
    return this.itemsRef.update(modifierUser.id, modifierUser);
  }
  deleteUser(user: User) {
    this.itemsRef.remove(user.id);
  }

  deleteEverything() {
    this.itemsRef.remove();
  }


}
