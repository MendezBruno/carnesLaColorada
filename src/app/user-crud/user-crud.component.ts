import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { Usuario } from './usuario';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  model: any = {};
  nuevoUsuario: any = {};
  
    constructor() { }
  
    ngOnInit() {
    }
  
    guardarUsuario(newUsuario: Usuario){
      this.nuevoUsuario.nombre = newUsuario.nombre;
      console.log(newUsuario);
      
    }

}
