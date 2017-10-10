import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USER } from './usuario-data';

@Injectable()
export class UsuarioService {
    private users = USER;
    
    
    getUsuarioFromBD(): Usuario[] {
        
        return this.users;
    }

    addUsuario(usuario:Usuario){
    this.users.push(usuario);
    console.log(this.users);
    }
}