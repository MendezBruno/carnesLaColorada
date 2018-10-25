import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButton } from '@angular/material';
import { User } from '../../modelo/usuario';
import { UsuarioService } from '../../servicios/users/user-crud.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

    nuevoUsuario: any = {};

    constructor(private _usuarioService: UsuarioService) { }

    ngOnInit() {
    }

    guardarUsuario(newUsuario: User) {
      console.log(newUsuario);
      this._usuarioService.addUser(newUsuario);

    }

}
