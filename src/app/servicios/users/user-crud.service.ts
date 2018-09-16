import { Injectable } from '@angular/core';
import { User } from '../../modelo/usuario';
import { USER } from '../../vista/user-crud/usuario-data';

@Injectable()
export class UsuarioService {
    private users = USER;

    getUsuarioFromBD(): User[] {
        return this.users;
    }

    addUsuario(usuario: User) {
    this.users.push(usuario);
    console.log(this.users);
    }
}
