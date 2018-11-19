import { Injectable } from '@angular/core';
import { User } from '../modelo/templeteUser/usuario';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private observerUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  observerUser$: Observable<User> = this.observerUser.asObservable();

  constructor() { }

  notifyUser(user: User) {
    this.observerUser.next(user);
  }

}
