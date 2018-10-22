import { Injectable } from '@angular/core';
import { User } from '../../modelo/usuario';


@Injectable()
export class UsuarioService {
    private users = []; // todo mockear usuarios

    getUsuarioFromBD(): User[] {
        return this.users;
    }

    addUsuario(usuario: User) {
    this.users.push(usuario);
    console.log(this.users);
    }
}
