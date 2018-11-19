import { Injectable } from '@angular/core';
import { UserRepository } from './userRepository';
import { User } from '../../modelo/templeteUser/usuario';
import { Observable } from 'rxjs/Observable';
import { ArrayUtils } from '../../utils/arrayUtils';

@Injectable({
  providedIn: 'root'
})
export class UserCrudLocalService implements UserRepository {

  private users: User[] = []; // todo mockear usuarios

  constructor() { }

  getUser(): Observable<User[]> {
      return Observable.of(this.users);
  }
  getUserById(id: any): Observable<User> {
      return Observable.of(this.users.find( (user) =>  user.id === id   ));
  }
  addUser(user: User): Promise<any> {
      this.users.push(user);
      console.log('Guarde el usuario en memoria: ', this.users);
      return Promise.resolve(user);
  }
  updateUser(user: User): Promise<any> {
      user =  this.users.find( (aUser) =>  aUser.id === user.id   );
      return Promise.resolve(this.users.find( (aUser) =>  aUser.id === user.id));
  }
  deleteUser(user: User) {
      return Promise.resolve(ArrayUtils.remove(this.users, user));
  }

}
