import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../servicios/user-crud.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

    nuevoUsuario :any = {};
  
    constructor(private _usuarioService: UsuarioService) { }
  
    ngOnInit() {
    }
  
    guardarUsuario(newUsuario: Usuario){
      console.log(newUsuario);
      this._usuarioService.addUsuario(newUsuario);
      
    }

}
