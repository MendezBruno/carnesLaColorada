import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { User } from '../../modelo/usuario';
import { UserRepository } from './userRepository';
import { Observable } from 'rxjs';

@Injectable()
export class UserCrudFirebaseService implements UserRepository {

  private dbPath = '/clientes';
  public itemRef: any;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object(this.dbPath);
   }


  getUser(): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  getUserById(id: any): Observable<User> {
    throw new Error('Method not implemented.');
  }
  addUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  updateUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(user: User) {
    throw new Error('Method not implemented.');
  }

}
