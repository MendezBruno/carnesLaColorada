import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { USER } from '../vista/user-crud/usuario-data';

@Injectable()
export class UsuarioService {
    private users = USER;

    getUsuarioFromBD(): Usuario[] {
        return this.users;
    }

    addUsuario(usuario: Usuario) {
    this.users.push(usuario);
    console.log(this.users);
    }
}
