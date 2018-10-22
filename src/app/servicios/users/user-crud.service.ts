import { Injectable } from '@angular/core';
import { User } from '../../modelo/usuario';
import { UserRepository } from './userRepository';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService implements UserRepository {
    
    getUser(): Observable<User[]> {
        throw new Error("Method not implemented.");
    }
    getUserById(id: any): Observable<User> {
        throw new Error("Method not implemented.");
    }
    addUser(user: User): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateUser(user: User) {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User) {
        throw new Error("Method not implemented.");
    }    
}
